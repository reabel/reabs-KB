window.quizQuestionBanks = window.quizQuestionBanks || {};
window.quizQuestionBanks.javascript = [
  ["Which declaration has block scope and cannot be reassigned?", ["var", "let", "const", "function"], 2, "const is block-scoped and its binding cannot be reassigned."],
  ["What does a closure preserve?", ["Only a function's name", "Access to its outer lexical scope", "A copy of every global", "A browser event"], 1, "A closure lets a function retain access to variables in its enclosing scope."],
  ["What is the result of typeof null?", ["null", "object", "undefined", "boolean"], 1, "This is a long-standing JavaScript language quirk: typeof null is object."],
  ["Which array method returns a new array after transforming every item?", ["forEach", "find", "map", "some"], 2, "map returns a new array with each source item transformed."],
  ["What is a promise's final state after a successful asynchronous operation?", ["pending", "fulfilled", "rejected", "paused"], 1, "A promise moves from pending to fulfilled or rejected."],
];