// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let voices = []

  const synth = window.speechSynthesis;

  const voiceSelect = document.getElementById('voice-select');

  // basically the same as the code provided from the source on how to use speechSynthesis
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const textInput = document.getElementById("text-to-speak");
  const speakButton = document.querySelector("button");
  const faceImg = document.querySelector("img");
  speakButton.addEventListener("click", () => {
    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.onstart = () => {
      faceImg.src = "assets/images/smiling-open.png";
    };

    utterThis.onend = () => {
      faceImg.src = "assets/images/smiling.png";
    };

    synth.speak(utterThis);
  });

}