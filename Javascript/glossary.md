# Javascript Glossary

## Type Coercion

[MDN](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)

`Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion (aka typecasting) is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit.`

## Implicit vs explicit in Javascript

- Explicit is more clearly defined, whereas implicit would be more vague

## Lexical Environment

A reference to all the variables and entities declared around a function.

## [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

The Combination of the function and it's environment

```JS
function createAdder(a) {
    function f(b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createAdder(3);
console.log(f(4)); // 7
```

## [IIFE(Immediately Invoked Function Expression)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

IIFEs run as soon as they're defined.

At one point some people called them [Self-Executing Anonymous Functions](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife).

From Ben's Blog: "Because variables and functions defined within a function may only be accessed inside, but not outside, that context, invoking a functino provides a very easy way to create privacy." that said, scoping was changed with the introduction of `const` and `let` in ES6, which allows for Function and Block scoping.

## Keywords and statements

- Statements will often begin with a keyword such as `for`, `while`, `break`, `import`.
