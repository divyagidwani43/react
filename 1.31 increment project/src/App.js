import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
  const [this_value, any_here] = React.useState(0);

  function func() {
    any_here(any => any + 1);
  }

  return (
    <div>
      <p id="counter">{this_value}</p>
      <button onClick={func}>Increment</button>
    </div>
  );
}
/////////////////////////////////////////////////////////////////////////////////////////
//another way
import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
  const [any, value] = React.useState(0)
  const a = () => {
    value(any + 1)
  }

  return (
    <div>
      <p id="counter">{any}</p>
      <button onClick={a}>Increment</button>
    </div>
  );
}

