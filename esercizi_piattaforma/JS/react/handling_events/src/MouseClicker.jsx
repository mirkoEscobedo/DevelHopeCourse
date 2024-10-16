import stonks from './assets/5827_STONKS.png';
function MouseClicker() {
  const eventHandlerOne = (event) => {
    console.log(event.target.name);
    event.stopPropagation;
  };

  function eventHandlerTwo(event) {
    console.log(event.currentTarget.src);
  }
  return (
    <>
      <button name="one" onClick={eventHandlerOne}>
        submit
      </button>
      <button name="two" onClick={eventHandlerOne}>
        <img src={stonks} onClick={eventHandlerTwo} />
      </button>
    </>
  );
}
export default MouseClicker;
