let tempoRimanente = 10;

function contoAllaRovescia() {
  const id = setInterval(() => {
    tempoRimanente--;
    console.log(`Conto alla rovescia in corso... ${tempoRimanente}`);
  }, 1000);

  setTimeout(() => {
    clearInterval(id);
  }, 10000);
}

contoAllaRovescia();
