var btnTranslate = document.querySelector("#btn-translate");
var textArea = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// btnTranslate.addEventListener("click", function clickEventHandler(){
//     outputDiv.innerText = "ajsjsjsjssjs " + textArea.value;
// })

function clickHandler(){
    outputDiv.innerText = "ajsjsjsjjsjs " + textArea.value;
}

btnTranslate.addEventListener("click", clickHandler);

