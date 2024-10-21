import { useEffect, useRef } from 'react';

const FocusableInput = () => {
  const mountedRef = useRef(false);

  const inputRef = useRef(null);
  useEffect(() => {
    if (!mountedRef.current) {
        mountedRef.current = true;
        console.log('mounted first')
    }
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <input type="text" ref={inputRef}></input>
    </>
  );
};
export default FocusableInput;
