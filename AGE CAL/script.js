const voice =document.getElementById("name")
const  year =document.getElementById("AGE")
const run =document.getElementById("run")
const answer = document.getElementById("answer")
const speak = document.getElementById("speak")
run.addEventListener("click",function(){
    let newName = document.createElement("p")
    let newAge = document.createElement("p")
    newName.innerText = voice.value
    let old =Number(2022-year.value)
    newAge.innerText = old
    let result = newName.innerText.toUpperCase() +" IS " + newAge.innerText +" YEARS "+" OLD "
     answer.innerHTML = result 
     
     console.log( typeof old) 
     voice.value=""
     year.value =""
})
speak.addEventListener("click",function(){
    const userText = answer.innerHTML;
    const speech = new SpeechSynthesisUtterance();

    speech.lang="en.US";
    speech.text = userText;
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);



})

