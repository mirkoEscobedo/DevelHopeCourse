function caricaModulo(modulo) {
  return new Promise((resolve, reject) => {
    const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
    setTimeout(() => {
      if (tempoCaricamento < 1500) {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      } else {
        reject(`Errore durante il caricamento del modulo ${modulo}.`);
      }
    }, tempoCaricamento);
  });
}

// implementa la funzione asincrona "lanciaVeicoloSpaziale" gestendo gli eventuali errori

async function lanciaVeicoloSpaziale(a, b, c) {
  try {
    const responsA = await caricaModulo(a);
    const responsB = await caricaModulo(b);
    const responsC = await caricaModulo(c);

    console.log(responsA, responsB, responsC);
    console.log('Veicolo pronto per il lancio!');
  } catch (error) {
    console.log(
      error + ' Impossibile lanciare il veicolo a causa di errori nei moduli'
    );
  }
}

lanciaVeicoloSpaziale('a', 'b', 'c');
