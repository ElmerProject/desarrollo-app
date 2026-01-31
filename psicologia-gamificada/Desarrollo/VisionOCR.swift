// VisionOCR.swift - Extract text from PDF using Apple Vision OCR
import Foundation
import Vision
import PDFKit
import CoreGraphics

func extractText(from pdfURL: URL) -> String {
    guard let document = PDFDocument(url: pdfURL) else {
        fatalError("Cannot open PDF: \(pdfURL.path)")
    }

    var allText: [String] = []
    let pageCount = document.pageCount

    print("Processing \(pageCount) pages...")

    for i in 0..<pageCount {
        guard let page = document.page(at: i) else { continue }

        let pageRect = page.bounds(for: .mediaBox)
        let scale: CGFloat = 2.0 // 144 DPI
        let width = Int(pageRect.width * scale)
        let height = Int(pageRect.height * scale)

        let colorSpace = CGColorSpaceCreateDeviceRGB()
        guard let context = CGContext(
            data: nil,
            width: width,
            height: height,
            bitsPerComponent: 8,
            bytesPerRow: 0,
            space: colorSpace,
            bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
        ) else { continue }

        context.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
        context.fill(CGRect(x: 0, y: 0, width: width, height: height))
        context.scaleBy(x: scale, y: scale)

        page.draw(with: .mediaBox, to: context)

        guard let cgImage = context.makeImage() else { continue }

        let text = recognizeText(in: cgImage)
        allText.append("--- Page \(i + 1) ---\n\(text)")

        print("\rProcessed \(i + 1)/\(pageCount)", terminator: "")
        fflush(stdout)
    }

    print() // Newline after progress
    return allText.joined(separator: "\n\n")
}

func recognizeText(in image: CGImage) -> String {
    let request = VNRecognizeTextRequest()
    request.recognitionLevel = .accurate
    request.usesLanguageCorrection = true
    request.recognitionLanguages = ["es-ES", "en-US"] // Spanish first since it's Spanish notes

    let handler = VNImageRequestHandler(cgImage: image, options: [:])

    do {
        try handler.perform([request])
    } catch {
        print("\nVision error: \(error)")
        return ""
    }

    guard let observations = request.results else { return "" }

    // Sort by Y position (top to bottom)
    let sorted = observations.sorted { $0.boundingBox.origin.y > $1.boundingBox.origin.y }

    return sorted.compactMap { $0.topCandidates(1).first?.string }.joined(separator: "\n")
}

// Main
guard CommandLine.arguments.count >= 3 else {
    print("Usage: VisionOCR input.pdf output.txt")
    exit(1)
}

let inputPath = CommandLine.arguments[1]
let outputPath = CommandLine.arguments[2]

let pdfURL = URL(fileURLWithPath: inputPath)
let text = extractText(from: pdfURL)

do {
    try text.write(toFile: outputPath, atomically: true, encoding: .utf8)
    print("Saved to \(outputPath)")
} catch {
    print("Error writing file: \(error)")
    exit(1)
}
