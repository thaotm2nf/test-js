const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

// Đọc tệp PDF gốc
const pdfPath = 'path/to/your/document.pdf';
const pdfBytes = fs.readFileSync(pdfPath);

// Mục lục dưới dạng mảng JSON: [level, title, page]
const toc = [
    [1, 'Introduction', 1],
    [1, 'Chapter 1', 5],
    [1, 'Chapter 2', 10],
    // Thêm các mục lục khác vào đây
];

(async () => {
    // Tải tệp PDF gốc
    const pdfDoc = await PDFDocument.load(pdfBytes);

    for (let i = 0; i < toc.length; i++) {
        const [level, title, page] = toc[i];
        const startPage = page - 1; // pdf-lib đếm trang từ 0

        // Xác định trang kết thúc cho mỗi phần
        const endPage = i + 1 < toc.length ? toc[i + 1][2] - 1 : pdfDoc.getPageCount();

        // Tạo một tài liệu PDF mới
        const newPdfDoc = await PDFDocument.create();

        for (let j = startPage; j < endPage; j++) {
            const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [j]);
            newPdfDoc.addPage(copiedPage);
        }

        // Lưu tệp PDF mới
        const pdfBytes = await newPdfDoc.save();
        fs.writeFileSync(`${title}.pdf`, pdfBytes);
    }
})();
