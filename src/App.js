import React from 'react';
class App extends React.Component {
  render() {
    return (
    <div>
      <form>
        <h2>Please Log in</h2>
        <label> 
          email: <input type='email' name='email' required={true}/>
          password: <input type='password' name='password' required={true} />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
    )
  }
}

export default App;

