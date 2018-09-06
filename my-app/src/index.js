import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './Game';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();

window.addEventListener('mousedown', function (e) {
    document.body.classList.add('mouse-navigation');
    document.body.classList.remove('kbd-navigation');
});
window.addEventListener('keydown', function (e) {
    if (e.keyCode === 9) {
        document.body.classList.add('kbd-navigation');
        document.body.classList.remove('mouse-navigation');
    }
});
window.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
        e.preventDefault();
    }
});
window.onerror = function (message, source, line, col, error) {
    var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';
    var errors = document.getElementById('errors');
    errors.textContent += text + '\n';
    errors.style.display = '';
};
console.error = (function (old) {
    return function error() {
        var errors = document.getElementById('errors');
        errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
        errors.style.display = '';
        old.apply(this, arguments);
    }
})(console.error);