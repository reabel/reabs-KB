window.quizQuestionBanks = window.quizQuestionBanks || {};
window.quizQuestionBanks.interview = [
  ["What is the time complexity of binary search on sorted data?", ["O(1)", "O(log n)", "O(n)", "O(n log n)"], 1, "Binary search halves the remaining search space each step."],
  ["Which principle favors depending on abstractions rather than concrete classes?", ["Single responsibility", "Open/closed", "Dependency inversion", "Interface segregation"], 2, "Dependency inversion directs high-level code to abstractions."],
  ["What makes a code review comment most useful?", ["It focuses on the author", "It is specific and actionable", "It always demands a rewrite", "It avoids explaining risk"], 1, "Specific, actionable comments make the needed change and its reason clear."],
  ["What is the first practical step when debugging a production issue?", ["Immediately rewrite the module", "Reproduce or characterize the failure", "Delete recent logs", "Scale every service"], 1, "A reliable reproduction or clear characterization narrows the problem before changes."],
  ["Why is an automated test suite valuable during refactoring?", ["It guarantees ideal architecture", "It provides regression feedback", "It removes the need for review", "It makes code execute faster"], 1, "Tests provide evidence that behavior remains intact as internals change."],
];