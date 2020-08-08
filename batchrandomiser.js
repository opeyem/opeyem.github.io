
var result = document.getElementById("result")
var print1 = document.getElementById("file1")
var print2 = document.getElementById("file2")
var batchGenerate = document.getElementById("batchGenerate")
var activeDrugs = [];
var placebo = [];
var num = 0;
var counts = 0;
var genNumbers = [];

var max;
var min;

function getValue() {
    max = parseInt(document.getElementById("maximum").value)
    min = parseInt(document.getElementById("minimum").value)
    counts = 0;
    genNumbers = [];
    activeDrugs = [];
    placebo = [];
    result.style.display = 'none';
};

function batchGenerator() {
    if (isNaN(max) || isNaN(min)) {
        alert("please enter a valid minimum and maximum number and press enter")
    }  
    else if (min > max) {
        alert("Your minimum number is greater than your maximum number!")
    }
    else {
        while (counts < (max - min) + 1) {
            /**while(activeDrugs.includes(num) || placebo.includes(num)){
                num = Math.floor(Math.random() * ((max - min) + 1)) + min;     
            };*/
            num = Math.floor(Math.random() * ((max - min) + 1)) + min;
            if (!(genNumbers.includes(num))) {
                var randomiser = counts % 2;
                if (randomiser === 0) {
                    activeDrugs.push(' ' + num);
                    genNumbers.push(num);
                    if (counts % 20 === 0 && counts !== 0) {
                        activeDrugs.push('\n\n')
                    }
                    counts += 1;
                }
                else {
                    placebo.push(' ' + num);
                    genNumbers.push(num);
                    if (counts % 20 === 1 && counts !== 1) {
                        placebo.push('\n\n')
                    }
                    counts += 1;
                };

            };

        };
        result.style.display = 'block'
        print1.style.display = 'inline-block';
        print1.value = "print numbers assigned to GROUP 1"
        print2.style.display = 'inline-block';
        print2.value = "print numbers assigned to GROUP 2"
    };
};

batchGenerate.addEventListener('click', batchGenerator);


print1.addEventListener('click', function () {

    var blob = new Blob([activeDrugs], { type: 'application/msword' }, 'msword.doc');
    saveAs(blob, 'Active-Drugs.doc')
});

print2.addEventListener('click', function () {
    //following code can be used to generate pdf document instead
    /** pdfplacebo = new jsPDF();
    pdfplacebo.setFontSize(20);
    var splitPlacebo = pdfplacebo.splitTextToSize(String(placebo),150)
    pdfplacebo.text(10,10, splitPlacebo);
    pdfplacebo.save('placebo.pdf')**/
    //the codes below save as ms word document
    var blob = new Blob([placebo], { type: 'application/msword' }, 'msword.doc');
    saveAs(blob, 'Placebo.doc');
});
