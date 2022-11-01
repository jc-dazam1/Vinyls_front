function genPDF(el){

    var factura = document.getElementById(el);
    


    window.scrollBy(0, -window.innerHeight*100000000000000000);    

  

factura.setAttribute('style', 'width: 650px; display: block;');

    html2canvas(document.getElementById(el), {
            onrendered: function(canvas) {

    var imgData = canvas.toDataURL('image/png');
    var imgWidth = 130; 
    var pageHeight = 295;  
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    var doc = new jsPDF('p', 'mm');
    var position = 0;

    while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        doc.addImage(imgData, 'PNG', 40, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
}

doc.save('Factura.pdf');
factura.setAttribute('style', 'display: none;');
            }
        });

    /*html2canvas(document.getElementById("FACTURA"), {
            onrendered: function(canvas) {

                var imgData = canvas.toDataURL('image/png');
                console.log('Report Image URL: ' + imgData);
                var doc = new jsPDF; //210mm wide and 297mm high
                
                doc.addImage(imgData, 'PNG', 10, 10);
                doc.save('Factura.pdf');
            }
        });
        */

    /*html2canvas($("#canvas"), {
            onrendered: function(canvas) {         
                var imgData = canvas.toDataURL(
                    'image/png');              
                var doc = new jsPDF('p', 'mm');
                doc.addImage(imgData, 'PNG', 10, 10);
                doc.save('sample-file.pdf');
            }
        });
        */

    /*html2canvas(document.body).then(function(canvas) {
                var img = canvas.toDataURL('image/png');
                var doc = new jsPDF();
                doc.addImage(img, 'JPEG', 20, 20);
                doc.save('test.pdf');
            });*/

    /*html2canvas(document.body, {onrendered: function (canvas){
    alert('hola');

    var img = canvas.toDataUrl("image/png");

    var doc = new jsPDF();

    doc.addImage(img, 'JPEG', 20, 20);

    doc.save('test.pdf');


}});*/
}