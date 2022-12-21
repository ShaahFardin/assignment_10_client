import React from 'react';


const FAQ = () => {

    return (
      <div>
        <h1 style={{ marginTop: "150px", marginBottom: "50px" }}>
          Frequently asked Interview question about React
        </h1>
        <div>
          <h3>1. What is React?</h3>
          <p>
            It is an open source project released in 2013 by Meta, for building
            user interfaces (UI). It is based on declarative programming
            principles, and using components as main entities.
          </p>
        </div>
        <h3>2. What is JSX?</h3>
        <p>
          This is an extension for React, which changes syntax to create React
          elements, which contains both JavaScript code and elements markup for
          HTML at the same time.
        </p>
        <h3>3. Why can't browsers read JSX?</h3>
        <p>
          Because this is a specific form of code which is not fully clear
          JavaScript or HTML and browsers don't have engines to read it. To make
          this code understandable for browsers it must be converted with
          special tools like Babel.
        </p>
        <h3>4. What is Redux?</h3>
        <p>
          It is an open-source JavaScript library which is often used with React
          and other libraries. It improves basic state management and keeps them
          in storage, which allows to easily check and debug UI elements'
          behavior.
        </p>
        <h3>5. How is React different from Angular?</h3>
        <p>
          React is the JavaScript library, while Angular is the framework which
          has a more complex structure. Angular has a lot of instruments for all
          steps of front-end development and uses TypeScript as the main
          language. React can be used only for UI components development and
          primarily use JSX in code.
        </p>
        <h3>6. What are props in React?</h3>
        <p>
          In React props are the arguments which we send to React components.
          The most similar thing like this is the function arguments in clear
          JavaScript. Their main characteristic is immutable - once set they
          can't be changed. Also they can be used both in functional and in
          class components.
        </p>
        <h3>7. What is a state in React?</h3>
        <p>
          It is part of a component which contains data or information about it.
          It can be changed dynamically and every change will cause component
          re-render. States can store properties but are available to use only
          in class components.
        </p>
        <h3>8. What is an event in React?</h3>
        <p>
          React has its own alternatives for DOM events. They mean and do the
          same as the original but their syntax uses the camel case instead
          lower case in DOM. One important difference is that in React we pass
          as an event handler a function instead of a string in DOM.
        </p>
        <h3>9. How to write comments in React?</h3>
        <p>
          As in JavaScript React supports one-line comments with slashes (//)
          before string. Also it support multi-line comments which starts from
          slash plus star sign (/*) and star plus sign (*/) combination at the
          end.
        </p>
        <h3>10. What's the difference between Real DOM and Virtual DOM?</h3>
        <p>
          Real DOM is the object of a document with all content and
          dependencies. In React for each Real DOM is available Virtual DOM,
          which realizes its light-weight copy as it doesn't take a part in
          drawing documents. So it's faster to call and edit Virtual DOM then
          edit Real DOM while viewing it on the screen.
        </p>
      </div>
    );
};

export default FAQ;