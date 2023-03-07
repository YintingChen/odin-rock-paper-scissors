function r_p_s_game() {
  alert("There are together 5 rounds!");
  let playerResult = undefined;
  let computerResult = undefined;

  for (let i_1 = 0; i_1 < 5; i_1++) {
    playerResult = prompt(`What's your result: 
rock, paper, or scissor?`);
    playerResult_lowerCase = playerResult.toLowerCase();

    computerResult = getComputerResult(3);

    if (playerResult_lowerCase === "rock") {
      if (computerResult === 0) {
        alert("You are the same! Rock(You) to Rock(AI)!");
      } else if (computerResult === 1) {
        alert("You are Loser! Rock(You) to Paper(AI)!");
      } else if (computerResult === 2) {
        alert("You are Winner! Rock(You) to Scissor(AI)!");
      } else {
        alert("Something wrong happens to the AI");
        i--;
        continue;
      }
    } else if (playerResult_lowerCase === "paper") {
      if (computerResult === 0) {
        alert("You are Winner! Paper(You) to Rock(AI)!");
      } else if (computerResult === 1) {
        alert("You are the same! Paper(You) to Paper(AI)!");
      } else if (computerResult === 2) {
        alert("You are Loser! Paper(You) to Scissor(AI)!");
      } else {
        alert("Something wrong happens to the AI");
        i_1--;
        continue;
      }
    } else if (playerResult_lowerCase === "scissor") {
      if (computerResult === 0) {
        alert("You are Loser! Scissor(You) to Rock(AI)!");
      } else if (computerResult === 1) {
        alert("You are Winner! Scissor(You) to Paper(AI)!");
      } else if (computerResult === 2) {
        alert("You are the same! Scissor(You) to Scissor(AI)!");
      } else {
        alert("Something wrong happens to the AI");
        i_1--;
        continue;
      }
    } else {
      5 - i_1 >= 2
        ? alert(`No, no, no.
You must give rock, paper, or scissor.
This round is uncounted. You still have ${5 - i_1} rounds`)
        : alert(`No, no, no.
You must give rock, paper, or scissor.
This round is uncounted. You still have ${5 - i_1} round`);
      i_1--;
    }
  }
}

function getComputerResult(choicesNumber) {
  return Math.floor(Math.random() * choicesNumber);
}
