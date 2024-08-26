function caricaModulo(modulo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Il modulo ${modulo} è stato caricato.`);
    }, 2000);
  });
}

// ipmlementa la funzione asincrona "lanciaVeicoloSpaziale"

async function lanciaVeicoloSpaziale(a, b, c) {
  try {
    const responsA = await caricaModulo(a);
    const responsB = await caricaModulo(b);
    const responsC = await caricaModulo(c);

    console.log(responsA, responsB, responsC);
  } catch (error) {
    console.log(error);
  }
}

async function finalLaunch(func, a, b, c) {
  try {
    await func(a, b, c);
    console.log('Veicolo pronto per il lancio!');
  } catch (error) {
    console.log(error);
  }
}

finalLaunch(lanciaVeicoloSpaziale, 'a', 'b', 'c');
