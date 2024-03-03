import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Faisal from './Faisal';
const variable = " Practicing React"
const elem = React.createElement(
  'a',
  {href : "https://www.google.com/", target : "_Blank"},
  "click me",
  variable
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <>
  {elem}
  <Faisal/>
  </>
)

