import React from 'react';

function Header() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <h1>Peoples Choice cliks {count} times</h1>
        <button onClick={() => setCount(count + 1)}>
          Click me!
        </button>
      </div>
    )
}

export default Header;
    