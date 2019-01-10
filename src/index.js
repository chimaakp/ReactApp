import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import registerServiceWorker from './registerServiceWorker';

const bgStyle ={

}

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Bar onClick = {setCurrPage} />, document.getElementById('bar'));
// switch(currpage) {
//     case 'home':
//         ReactDOM.render(<Landing />, document.getElementById('home'));
//         break;
//     case 'stats':
//         ReactDOM.render(<Stats />, document.getElementById('home'));
//         break;
//     default:
//         ReactDOM.render(<Landing />, document.getElementById('home'));
// }
//ReactDOM.render(<Stats />, document.getElementById('home'));
registerServiceWorker();
