function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

async function getResult() {
  try {
    await luckyDraw('Tina').then((value) => console.log(value));
    await luckyDraw('Jorge').then((value) => console.log(value));
    await luckyDraw('Julien').then((value) => console.log(value));
  } catch (err) {
    console.error(err);
  }
}

getResult();
