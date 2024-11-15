let health = 100;
let happiness = 100;
let cleanliness = 100;
let hunger = 100;

function updateStats() {
 
  document.getElementById('health-circle').style.height = `${health}%`;
  document.getElementById('happiness-circle').style.height = `${happiness}%`;
  document.getElementById('cleanliness-circle').style.height = `${cleanliness}%`;
  document.getElementById('hunger-circle').style.height = `${hunger}%`;
}

function performAction(action) {
  const abraxos = document.getElementById("backgroundVideo");

  let videoSrc;
  let duration;

  switch (action) {
    case "comer":
      videoSrc = "videos/comendofrango.mp4";
      duration = 4000;
      hunger = Math.min(hunger + 20, 100);
      health = Math.min(health + 5, 100);
      break;
    case "brincar":
      videoSrc = "videos/jogandobola.mp4";
      duration = 4000;
      happiness = Math.min(happiness + 20, 100);
      hunger = Math.max(hunger - 10, 0);
      break;
    case "banho":
      videoSrc = "videos/tomandobanho.mp4";
      duration = 4000;
      cleanliness = Math.min(cleanliness + 20, 100);
      health = Math.min(health + 5, 100);
      break;
    case "tchau":
      videoSrc = "videos/saida.mp4";
      duration = 5000;
      break;
  }

  abraxos.src = videoSrc;
  abraxos.play();
  updateStats();

  setTimeout(() => {
    abraxos.src = "videos/bateasa.mp4";
    abraxos.play();
  }, duration);
}

setInterval(() => {
  hunger = Math.max(hunger - 1, 0);
  happiness = Math.max(happiness - 1, 0);
  cleanliness = Math.max(cleanliness - 1, 0);
  health = Math.max(health - (hunger < 20 || cleanliness < 20 ? 1 : 0), 0);
  updateStats();
}, 3000);
