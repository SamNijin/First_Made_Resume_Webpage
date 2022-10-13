
alert("You're viewing Resume of sam");


document.querySelector('#gen-pdf').addEventListener('click', function () {
    html2canvas(document.querySelector('#content')).then((canvas) => {
        let base64image = canvas.toDataURL('image/png');
        // console.log(base64image);
        let pdf = new jsPDF('p', 'px', [3508, 3500]);
        pdf.addImage(base64image, 'PNG', 0, 0, 3508, 2480);
        pdf.save('MyFile.pdf');
    });
});