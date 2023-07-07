var pdf = require('pdfkit');
var fs = require('fs');
function createPdf(text){
    const courseName = "Copywriting";

    const doc = new pdf();
    doc.pipe(fs.createWriteStream('test.pdf'));

    doc
        .addPage()
        .fontSize(16)
        .text(text, 100, 100);

    doc.end();
}