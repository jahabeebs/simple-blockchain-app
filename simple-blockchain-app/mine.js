const Block = require('./models/Block');
const db = require('./db');
let targetDifficulty;
const TARGET_DIFFICULTY_EASY = BigInt("0x0000" + "F".repeat(60));
const TARGET_DIFFICULTY_MEDIUM = BigInt("0x00000" + "F".repeat(59));
const TARGET_DIFFICULTY_HARD = BigInt("0x0000000" + "F".repeat(57));

function startMining(difficulty) {
  mine(difficulty);
}

function mine(difficulty) {
  const block = new Block();
  if (difficulty == "Hard") {
    targetDifficulty = TARGET_DIFFICULTY_HARD;
  } else if (difficulty == "Medium") {
    targetDifficulty = TARGET_DIFFICULTY_MEDIUM;
  } else {
    targetDifficulty = TARGET_DIFFICULTY_EASY;
  }

  while(BigInt('0x' + block.hash()) >= targetDifficulty) {
    block.nonce++;
  }

  db.blockchain.addBlock(block);

  console.log(`Mined block #${db.blockchain.blockHeight()} with a hash of ${block.hash()} at nonce ${block.nonce}`);

  setTimeout(mine);
}

module.exports = {
  startMining
};
