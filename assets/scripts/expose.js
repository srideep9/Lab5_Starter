// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  // TODO

  const hornSelect = document.getElementById('horn-select');
  const img = document.querySelector('#expose img');
  const audio = document.querySelector('audio');

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
    if (selectedHorn == 'air-horn') {
      img.src = 'assets/images/air-horn.svg';
      audio.src = 'assets/audio/air-horn.mp3';
    } 
    else if (selectedHorn == 'car-horn') {
      img.src = 'assets/images/car-horn.svg';
      audio.src = 'assets/audio/car-horn.mp3';
    } 
    else if (selectedHorn == 'party-horn') {
      img.src = 'assets/images/party-horn.svg';
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  const volumeSlider = document.getElementById('volume');
  const icon = document.querySelector('#volume-controls img');

  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;

    if (volume == 0) {
      icon.src = 'assets/icons/volume-level-0.svg';
      icon.alt = 'Volume level 0';
    } 
    else if (volume < 33) {
      icon.src = 'assets/icons/volume-level-1.svg';
      icon.alt = 'Volume level 1';
    } 
    else if (volume < 67) {
      icon.src = 'assets/icons/volume-level-2.svg';
      icon.alt = 'Volume level 2';
    } 
    else {
      icon.src = 'assets/icons/volume-level-3.svg';
      icon.alt = 'Volume level 3';
    }
    audio.volume = volume / 100;
  });

  const playButton = document.querySelector('button');
  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

}