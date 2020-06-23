/* TO-DO LIST - FINISHED!!!
1. Get some audio sounds or links to sounds - DONE
2. Store the links in an array as a string - DONE
3. Make HTML drum kit - DONE
4. Adjust CSS - DONE
5. Make function to play audio - DONE
6. Make AddEventListeners for buttons - DONE
7. Make keywords to access the buttons
*/

const audioObject = {
  kick: "https://65381g.ha.azioncdn.net/4/7/2/e/guilhermeterra-sweet-child-o-mine-78fdced7.mp3",
  hiHat: "https://65381g.ha.azioncdn.net/8/9/4/4/Portal-M-lips-Official-saint-jhn-rose-imanbek-remix-0b61b325.mp3",
  snare: "https://65381g.ha.azioncdn.net/8/9/4/4/Portal-M-lips-Official-saint-jhn-rose-imanbek-remix-0b61b325.mp3",
  tom1: "http://soundbible.com/mp3/Evil Yelling-SoundBible.com-1774362373.mp3",
  tom2: "http://soundbible.com/mp3/Fart-Common-Everyday-Fart_Mike-Koenig.mp3",
  clap: "http://soundbible.com/mp3/Cat Scream-SoundBible.com-871191563.mp3",
  cymbal: "http://soundbible.com/mp3/Train Horn Low-SoundBible.com-1744689113.mp3"
};

const drumkit = document.querySelector('#drumset');

console.log(drumkit);

function playAudio(audioFile) {
  // This is how you load an audio file
  let sound = new Audio(audioFile);
  sound.play(); // I will get sme drum sounds from my studio and upload them to CodePen.  So next time we neet we can use those. Right thx!  Okay man, good luck.  I'm off to eat lunch!  Tchau!!
  // Thcau STEVE, thanks for today!! See ya!
  // Let's try again Thursday or Friday.  I'll write you on Slack, right, send me the time too  
}


drumkit.addEventListener('click', (event) => {
  let drumSound = audioObject[event.target.id];
  playAudio(drumSound);
});

drumkit.addEventListener('keydown', (event) => {
  if (event.code === "KeyA") {
    playAudio(audioObject[kick]);
  } else if (event.code === "KeyS") {
    playAudio(audioObject[1]);
  } else if (event.code === "KeyD") {
    playAudio(audioObject[2]);
  }


});

window.addEventListener("keydown", function(e) {
  console.log(e.keyCode);
});