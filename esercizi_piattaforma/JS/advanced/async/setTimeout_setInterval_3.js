function mostraPromemoria() {
  console.log('Promemoria: È ora di fare una pausa!');
}

setTimeout(() => {
  console.log(`Il promemoria è in fase di inpostazione`);
}, 4000);
setTimeout(mostraPromemoria, 5000);
