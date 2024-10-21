function UncontrolledLogin() {
  function onLogin(event) {
    event.preventDefault();
    const data = {
      username: event.target.form.elements.namedItem('username').value,
      password: event.target.form.elements.namedItem('password').value,
      remember: event.target.form.elements.namedItem('remember').checked,
    };
    console.log(data);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const username = event.target.elements.namedItem('username').value;
    const password = event.target.elements.namedItem('password').value;
    const remember = event.target.elements.namedItem('remember').checked;
    const data = {
      username,
      password,
      remember,
    };
    console.log(data);
  }
  function loginWithFormData(event) {
    event.preventDefault();
    const formData = new FormData(event.target.form);

    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      remember: formData.get('remember') === 'on' ? true : false,
    };

    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username"></input>
      <input type="password" name="password"></input>
      <input type="checkbox" name="remember" />
      <button type="submit" onClick={onLogin}>
        login
      </button>
      <button type="button" onClick={loginWithFormData}>
        loginWithFormData
      </button>
    </form>
  );
}

export default UncontrolledLogin;
