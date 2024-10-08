export function AlertClock({callback}:{callback: () => void}) :React.ReactElement {
    
    return <button onClick={callback}>What time is it?</button>
}

export function alertOnClick() :void {
        alert('time: ' + new Date().toLocaleTimeString());
    }