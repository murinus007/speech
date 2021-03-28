let ul = document.querySelector("ul");
let recognizer = new webkitSpeechRecognition();
recognizer.interimResults = true;

recognizer.lang = 'ru-Ru';

recognizer.onresult = function(event) {
    let result = event.results[event.resultIndex];
    if (result.isFinal) {
        addText("you say: " + result[0].transcript);
    } else {
        console.log("rezult: " , result[0].transcript);
    }
};

function speech() {
    recognizer.start();
}

let synth = window.speechSynthesis;
let utterance = new SpeechSynthesisUtterance('');

function talk() {
    synth.cancel();
    synth.speak(utterance);
}

function stop() {
    synth.pause();
}

function addText(text) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    ul.appendChild(li);

    let del = document.createElement("button");
    del.appendChild(document.createTextNode("X"));
    li.appendChild(del);
    del.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.classList.add("delete");
    }

}