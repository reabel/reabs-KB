# General Javascript Notes

## Frameworks without their own space

[Inertia](https://inertiajs.com/)

## File based routing

https://blog.logrocket.com/using-node-file-router-file-based-routing-node-js/

## [CommonJS](https://en.wikipedia.org/wiki/CommonJS) vs [ES Modules](https://nodejs.org/api/esm.html)

- Browsers don't support CommonJS, so code must be transpiled.
- CommonJS uses `require()` and `module.exports` whereas ES modules use `import` and `export` statements for similar functionality
- CommonJS was initially named ServerJS and was started in 2009

## [The event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Event_loop)

JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

An oldie but a goodie:
![Youtube video on event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

### Heap

### Queue

### Call Stack

https://stackoverflow.com/questions/39459236/understanding-event-queue-and-call-stack-in-javascript