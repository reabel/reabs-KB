# React

## News and updates

### Feb 24

[Fireship on react updates](https://www.youtube.com/watch?v=4k6Xgjqkad4&ab_channel=Fireship)

[React blog on compiler, actions](https://react.dev/blog/2024/02/15/react-labs-what-we-have-been-working-on-february-2024)

- should review memo, state
- react is runtime-based, other frameworks already have compilers
- useMemo may go away in the future
- forwardRef
  - will be prop in future
  - currently creates a "Higher-order component" when you need to send a domnode to a parent
- PHP Lambos?
- useFormState with actions
- "use" hook
  - makes useContext obselete  
  - suspense boundry, error boundry

## Client Side Routing

### w/ [react-router](https://reactrouter.com/en/main/start/overview)

https://reactrouter.com/en/main/start/overview

- [Some General Discussion from reddit](https://www.reddit.com/r/reactjs/comments/18ofzzi/does_react_router_scale_or_better_use_nextjsremix/)

## Quiz Results

### Question 1

> What is the correct command to create a new React project?

npx create-react-app myReactApp

> *note: CRA is deprecated and should be dropped in favour of vite*

### Question 2

> What does myReactApp refer to in the following command?

`npx create-react-app myReactApp`

The name you want to use for the new app

### Question 3

> What command is used to start the React local development server?

npm start

### Question 4

> What is the default local host port that a React development server uses?

3000

### Question 5

> To develop and run React code, Node.js is required.

True

### Question 6

> What type of element will be rendered from the following code?

```javascript
function Car() {
  return <h1>Ford Mustang</h1>;
}

const root = createRoot(document.getElementById('root'));
root.render(<Car />);

```

h1

### Question 7

> What is the children prop?

A property that lets you nest components in other components

### Question 8

> Which keyword creates a constant in JavaScript?

const

### Question 9

> A copy of the 'real' DOM that is kept in memory is called what?

Virtual DOM

### Question 10

> React component names must begin with an uppercase letter.

True

> *is this enforced strictly though?*

### Question 11

> Which operator can be used to conditionally render a React component?

&&

### Question 12

> When rendering a list using the JavaScript map() method, what is required for each element rendered?

key

### Question 13

> What tool does React use to compile JSX?

Babel

### Question 14

> How can you optimize performance for a function component that always renders the same way?

Wrap it in the React.memo higher-order component.

### Question 15

> What props will be available to the following component?
`<Car {...props} />`

all of them

### Question 16

> What is a common use case for ref?

To directly access a DOM node

### Question 17

> How can you combine the following arrays using the spread operator?

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
```

const combined = [...array1, ...array2];

### Question 18

> React can only render elements in the root document element.

False

### Question 19

> What is the correct syntax to import a Component from React?

import { Component } from 'react'

### Question 20

> Find the bug in this code:

```react
function car({make, model}) {
  return <h1>{make} {model}</h1>;
};
```

The first letter of the function must be capitalized

### Question 21

> React separates the user interface into components. How are components combinded to create a user interface?

By nesting components

### Question 22

> Although React Hooks generally replace class components, there are no plans to remove classes from React.

True

### Question 23

> Which of the following is NOT a rule for React Hooks?

Hooks can be called in Class or Function components

### Question 24

> What is the output of the following code?

```javascript
const make = 'Ford';
const model = 'Mustang';
const car = { make, model };
console.log(car);
```

`{make: 'Ford', model: 'Mustang'}`

### Question 25

> Why should you avoid copying the values of props into a component's state?

Because that would create two instances of the same state that could become out of sync  
