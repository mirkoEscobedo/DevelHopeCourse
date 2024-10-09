export function AlertClock(props) {
  return <button onClick={props.callback}>What time is it?</button>;
}

export function alertOnClick() {
  alert('time: ' + new Date().toLocaleTimeString());
}
