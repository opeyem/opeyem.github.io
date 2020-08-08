
var genNumbers = [];
var result = document.getElementById("result")
var print1 = document.getElementById("file1")
var print2 = document.getElementById("file2")
var generate = document.getElementById("generate")
//var batchGenerate = document.getElementById("batchGenerate")
var activeDrugs = [];
var placebo = [];
var num = 0;
var counts = 0;
var evenPrime = 0;
function generator() {
    if (isNaN(max) || isNaN(min)) {
        alert("please enter a valid minimum and maximum number and press enter")
    } else if (min > max) {
        alert("Your minimum number is greater than your maximum number!")
    }
    else {
        num = Math.floor(Math.random() * ((max - min) + 1)) + min;
        if (counts >= (max - min) + 1) {
            result.style.fontSize = '40px';
            result.style.fontWeight = '400';
            result.innerHTML = "Done!"
            print1.style.display = 'inline-block';
            print1.value = "print numbers assigned to ACTIVE DRUGS"
            print2.style.display = 'inline-block';
            print2.value = "print numbers assigned to PLACEBO"
        }
        else {
            while (genNumbers.includes(num)) {
                num = Math.floor(Math.random() * ((max - min) + 1)) + min;
            }
            genNumbers.push(num)
            counts += 1
            result.style.display = "block"
            if (evenPrime % 2 === 0) {
                //result.style.display = 'block';
                result.style.color = "green"
                result.innerHTML = "LABEL ACTIVE DRUG: " + num;
                //evenPrime += 1;
                activeDrugs.push(' ' + num);
                if (counts % 10 === 1 && counts !== 1) {
                    activeDrugs.push('\n\n');
                };
                evenPrime += 1;
            }
            else {
                result.style.color = "red"
                result.innerHTML = "LABEL PLACEBO: " + num
                //evenPrime += 1;
                placebo.push(' ' + num);
                if (counts % 10 === 0 && counts !== 0) {
                    placebo.push('\n\n');
                };
                evenPrime += 1;
            };
        }
    }
}
var max;
var min;

function getValue() {
    max = parseInt(document.getElementById("maximum").value)
    min = parseInt(document.getElementById("minimum").value)
    counts = 0;
    genNumbers = [];
    activeDrugs = [];
    placebo = [];
    result.style.display = 'none'
};

generate.addEventListener('click', generator);


print1.addEventListener('click', function () {

    var blob = new Blob([activeDrugs], { type: 'application/msword' }, 'msword.doc');
    saveAs(blob, 'Active-Drugs.doc')
});

print2.addEventListener('click', function () {
    var blob = new Blob([placebo], { type: 'application/msword' }, 'msword.doc');
    saveAs(blob, 'Placebo.doc');
});