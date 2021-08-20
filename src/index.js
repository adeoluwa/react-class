import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function MyComponent() {
  return (
    <div>
      <h1>Hello World this is my first component</h1>
    </div>
  );
}




ReactDOM.render(<MyComponent />, document.getElementById('myDiv'));
