var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/minion.json";
function getTranslationURL(input)
{
    return serverURL  + "?" + "text=" + input;
}
function errorHandler(error)
{
    console.log("error occured",error);
    alert("something wrong with server !try again after sometime ")

}
function clickHandler(){
    var inputText=txtInput.Value;

    fetch(getTranslateURL(inputText))                                                                                 (inputText))
    .then(response=> response.json())
    .then(json=> {
        var translatedText=json.contents.translated;
        outputDiv.innerText=TranslatedText;
    })
    .catch(errorHandler)
};
btnTranslate.addEventListener("click",clickHandler)

