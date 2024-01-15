import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var rootDomElement = document.getElementById('root');

var root = ReactDOM.createRoot(rootDomElement);

// none JSX component 
function FooterText() {
    return React.createElement('p', {}, 'All rights reserved &copy;');
}

function Footer() {
    return React.createElement('div', { className: 'site-footer' }, React.createElement(FooterText));
}

var headerJSX = React.createElement(
    'div',
    null,
    React.createElement(
        'header',
        { className: 'site-header' },
        React.createElement(
            'h1',
            null,
            'Hello from JSX!'
        ),
        React.createElement(
            'h2',
            null,
            'The best syntax ever!'
        ),
        React.createElement(
            'p',
            null,
            'something else here'
        )
    ),
    React.createElement(Footer, null)
);

root.render(headerJSX);