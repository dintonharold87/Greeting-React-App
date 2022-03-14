import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

/* Now we have all of our imports we need to make sure our app gets rendered out to the browser. To do that, we call the render() method from the React DOM package that we imported. */

/* ReactDOM.render() accepts two arguments:

The component that you want to render (for us, that’s APP).

And where you want to render it, i.e. the HTML element from the index.html file. */
ReactDOM.render(
    <App />, document.getElementById('root')
)