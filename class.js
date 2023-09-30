class Player {
  score = 0;

  hitdemage(demage) {
    this.score += demage;
  }
  pause() {
    console.log("your paused the game");
  }
  exit() {
    console.log("your exited the game");
  }
  heal(demage) {
    this.score -= demage;
  }
}

const player = new Player();
for (let i = 0; i < 20; i++) {
  player.hitdemage(i);
  player.heal(4);
  console.log(player.score);
  if (player.score > 100) {
    console.log("you win and your demage is " + player.score);
    break;
  }
}

// console.log(player.score);
