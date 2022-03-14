import React, { Component } from "react";
import "./style.css"

/* class based component
For class-based components, we need to extend React’s Component class. We can do that by typing the extends keyword after our class declaration, and then extending the React.Component class in there.

To make this look a little neater, we can import the Component class as part of our React import at the top of the file. We’ll add it as a named import like this:

import React, { Component } from 'react';

By doing that, we can replace the React.Component part with just Component.

Finally, we want to add a default export for this component which is just App. We’ll add this right after our class declaration.


For class-based components, we need to extend React’s Component class. We can do that by typing the extends keyword after our class declaration, and then extending the React.Component class in there.

To make this look a little neater, we can import the Component class as part of our React import at the top of the file. We’ll add it as a named import like this:

import React, { Component } from 'react';

By doing that, we can replace the React.Component part with just Component.

Finally, we want to add a default export for this component which is just App. We’ll add this right after our class declaration.*/
class App extends Component {
  /* Adding state to our app

Within a class-based component, just like a regular JavaScript class, you’ll want to initialize any state values in the constructor.

constructor(props) {
  super(props);

  this.state = {
    displayName: ''
  };
} */
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      displayName: "",
    };
  }

  handleChange = (evt) => {
    this.setState({
      name: evt.target.value,
    });
  };

  handleClick = (evt) => {
    this.setState({
      displayName: this.state.name,
    });
  };

  render() {
    return (
      <>
        <h1>Welcome to the app</h1>
        <p>
          Hi there, {this.state.displayName || "we haven't been introduced"}
        </p>
        <p>Enter your name below so we can get better acquainted</p>
        <input value={this.state.name} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Update name</button>
      </>
    );
  }
}


export default App;

/* 
The error message states ‘Adjacent JSX elements must be wrapped in an enclosing tag. Did you want to use a JSX fragment?’

You can see we’ve got two adjacent, top-level elements in our return statement. To fix this, we need to wrap these elements in a containing element. We can wrap them in a div and click save.

When the app reloads we’ll see our message and paragraph and, more importantly, no error.

Adding a div element is fine for our example here, but you might have situations where you don’t want additional markup output to the browser, and wrapping everything in a div or some other element won’t be sufficient.

For these cases you can use the React.Fragment syntax. We can replace our containing div element with either the React.Fragment syntax or its shorthand:

 both of these statements are equal
<React.Fragment>
 <h1>Welcome to the app</h1>
 <p>This is a paragraph</p>
</React.Fragment>

<>
 <h1>Welcome to the app</h1>
 <p>This is a paragraph</p>
</> 

However, the shorthand version looks a lot neater and cleaner. We’ll be using this version wherever it’s needed.
*/

/* 
Adding a dynamic message

Time to expand our app. In the first paragraph, we're going to return our user's name once they’ve typed it in. To do that we need to modify our paragraph tag to include some executable code.

<p>Hi there, {this.state.displayName}</p>

If you did this in HTML, you’d just get a paragraph with the text, ‘Hi there, {this.state.displayName}’, but because we’re using JSX, anything between the curly braces will be interpreted as executable JavaScript by React and evaluated as such.

You’ll also notice a call to a class property called state. Each component has access to its state and its local storage. You can store values in a state as well as retrieving them, which is what we’re doing here.

So our line, {this.state.displayName} is really saying ‘get me the displayName value out of this component’s state’. */