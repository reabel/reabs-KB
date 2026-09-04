window.quizQuestionBanks = window.quizQuestionBanks || {};
window.quizQuestionBanks["system-design"] = [
  ["What is horizontal scaling?", ["Buying a faster single server", "Adding more service instances", "Increasing database column count", "Reducing request timeouts"], 1, "Horizontal scaling increases capacity by adding machines or instances."],
  ["Why is a cache commonly placed in front of a database?", ["To permanently replace it", "To reduce latency and repeated reads", "To make writes synchronous", "To remove all invalidation"], 1, "Caches serve frequent reads quickly and reduce database load."],
  ["Which property describes a service continuing to operate during partial failures?", ["Availability", "Consistency", "Portability", "Compression"], 0, "Availability is the ability to continue serving requests despite failures."],
  ["What does an idempotent API operation allow?", ["Only one client connection", "Repeated requests with the same intended effect", "Unlimited response sizes", "A random result each time"], 1, "Idempotency makes retries safer because duplicate requests do not compound the outcome."],
  ["What is a message queue useful for?", ["Tightly coupling services", "Decoupling producers from asynchronous consumers", "Replacing authentication", "Rendering CSS"], 1, "Queues buffer work and let producers and consumers operate independently."],
];