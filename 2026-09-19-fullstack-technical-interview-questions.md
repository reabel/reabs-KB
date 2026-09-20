# Full Stack Technical Interview Questions

Below are 20 more technical full stack interview questions, along with sample answers written in the way an interviewee should respond.

---

## 1) How do you explain the difference between synchronous and asynchronous code in JavaScript?

Answer:

“I think of synchronous code as code that blocks execution until each step is complete, while asynchronous code allows the program to continue running while waiting on I/O, network calls, or timers. In JavaScript, async and await are the most readable way to work with Promises, and they help keep code understandable without blocking the event loop. In full stack work, this matters because backend services and frontend interfaces both need to handle concurrent requests efficiently without creating unnecessary latency or deadlocks.”

## 2) How do you design a scalable REST API?

Answer:

“I design a scalable REST API by first defining clear resource boundaries and consistent naming conventions. I keep endpoints stateless, use HTTP methods and status codes consistently, and version the API when needed to avoid breaking clients. I also focus on pagination, filtering, sorting, and efficient payload shapes so clients do not over-fetch data. On the backend, I make sure the API layers are loosely coupled, use validation, authentication, and authorization consistently, and separate business logic from transport concerns. Finally, I consider observability, rate limiting, and caching from the beginning so the API can scale under real traffic.”

## 3) What is an N+1 query problem, and how do you prevent it?

Answer:

“An N+1 query problem happens when an application makes one query to fetch a parent collection and then performs an additional query for each item in that collection, which causes a large number of database calls. I prevent it by using joins, eager loading, batching, or fetching the necessary related data in a single query. In ORMs, I also review how queries are generated and make sure I am not iterating over items and triggering lazy loads accidentally. This is especially important in full stack systems where a single endpoint can otherwise become dramatically slower as the dataset grows.”

## 4) How do you optimize a slow database query?

Answer:

“I start by identifying whether the bottleneck is the query structure, missing indexes, large result sets, or application-level issues. I look at the execution plan, identify hotspots, and check whether proper indexes exist for filters, joins, and sort operations. I also review whether the query is returning more data than the application needs, and I rewrite it to avoid unnecessary joins or repeated subqueries. If a query is read-heavy, I may introduce caching or denormalization, but I only do that when it makes sense for the data access pattern and the business requirements.”

## 5) How do you handle authentication and authorization in a full stack app?

Answer:

“I handle authentication and authorization as separate concerns. Authentication confirms who the user is, while authorization defines what that user is allowed to do. In practice, I use secure token-based patterns such as JWTs or session management depending on the application needs, and I ensure tokens are stored securely and validated properly. On the server side, I enforce authorization at the route, service, or resource level, and I validate permissions consistently rather than trusting the client. I also avoid putting sensitive authorization logic in the frontend alone because the backend must remain the source of truth.”

## 6) Explain how the JavaScript event loop works.

Answer:

“The event loop is the mechanism that allows JavaScript to perform non-blocking I/O even though it is single-threaded. The browser or Node runtime handles tasks, microtasks, and the callback queue, and the event loop decides what gets executed next. When an async operation such as a network request or timer finishes, its callback is placed in the task queue and processed when the current call stack is free. Microtasks, like Promise resolutions, run before the next macrotask, which is why Promise-based code often executes before timers or I/O callbacks. Understanding this helps me debug performance issues and write more predictable async logic.”

## 7) How do you reduce frontend bundle size and improve performance?

Answer:

“I reduce frontend bundle size by identifying the actual user path and loading only what is needed for that route or interaction. I use code splitting, lazy loading, and tree shaking where possible so the app does not download everything up front. I also optimize images, minimize blocking scripts, and avoid unnecessary library dependencies. For rendering performance, I review expensive re-renders, large component trees, and network patterns to keep the interface responsive. In a full stack role, I also pay attention to API payload size because a lightweight frontend is only part of the performance story.”

## 8) When would you use caching, and what are the trade-offs?

Answer:

“I use caching when the same data is requested repeatedly and the data is relatively stable over time, such as reference data, computed results, or expensive database queries. Common choices include in-memory caching, distributed caches like Redis, and HTTP-level caching depending on the access pattern. The trade-off is that caching introduces staleness risk and extra complexity, so I make sure the invalidation strategy is well-defined. I also monitor hit rates and TTLs so the cache improves performance without becoming a source of outdated or inconsistent data.”

## 9) How do you keep a frontend app consistent with backend contracts?

Answer:

“I keep the frontend and backend aligned by defining the contract early and validating it explicitly. That usually means API documentation, schema validation, and shared types where possible, especially in TypeScript-heavy stacks. I also use contract tests or mock data that matches the real backend response shape so the client is not built against assumptions. In practice, I find it very valuable to treat the API contract as a shared agreement between services, not just a backend concern.”

## 10) How do you secure a web application against XSS and CSRF?

Answer:

“I secure against XSS by escaping or encoding untrusted data in rendering layers, avoiding unsafe HTML injection, and sanitizing user-controlled content before it is displayed. For CSRF, I ensure the application validates a per-request token or uses secure cookie policies so a malicious site cannot trigger authenticated requests. I also use strict content security policies where appropriate and avoid exposing sensitive data in client-side code. The important principle is to validate input, encode output, and enforce trust boundaries consistently across the application.”

## 11) How do you debug a production issue when the app is failing in a live environment?

Answer:

“I start with triage to confirm the impact, scope, and symptoms, then I narrow it down by checking logs, metrics, traces, and recent deployments. I try to isolate whether the issue is in the frontend, API layer, database, or infrastructure. Once I identify the likely failure domain, I reproduce it in a safe environment if possible and validate the hypothesis before patching. After the fix, I monitor the affected systems carefully and document what changed so the team can prevent recurrence and improve operational readiness.”

## 12) What are the trade-offs between a monolith and microservices?

Answer:

“A monolith is simpler to build, test, and deploy initially, and it reduces operational overhead for small to medium-sized systems. Microservices offer more independent scaling, team ownership, and technology flexibility, but they add complexity in communication, deployment, data consistency, and observability. My decision depends on the product complexity, team size, and the need for independent scaling. In many cases, starting with a modular monolith or a bounded set of services gives the team more speed without prematurely introducing the costs and failures of distributed systems.”

## 13) How do you improve API performance in a full stack application?

Answer:

“I improve API performance by looking at the actual bottlenecks rather than guessing. That often means optimizing database queries, reducing payload size, adding indexes, and avoiding redundant data fetches. I also use caching strategically, especially for frequently accessed but relatively static data, and I batch requests when the client needs multiple resources. If the backend is doing expensive processing, I look for ways to move work out of the request path or make it asynchronous so the API remains responsive under load.”

## 14) How do you handle database migrations safely?

Answer:

“I handle database migrations by treating schema changes as production changes that require careful planning. I use backward-compatible patterns when possible, such as adding columns before consuming them, and I validate the migration in a staging or test environment before production rollout. I also keep the migration order controlled, make the rollback plan explicit, and monitor the application carefully during deployment. The key is to avoid breaking existing code paths while introducing new schema changes, especially when the app is serving live traffic.”

## 15) How do you implement rate limiting or request throttling?

Answer:

“I implement rate limiting at the API layer to protect the system from abuse, accidental overload, and noisy clients. The strategy depends on whether I need to limit by IP address, user, API key, or route, and I usually enforce it before expensive business logic or database work runs. I also combine rate limiting with monitoring so the team can see spikes and adjust thresholds if needed. This helps keep the system stable and ensures that one client cannot degrade performance for everyone else.”

## 16) How do you approach pagination and filtering in APIs?

Answer:

“I design pagination and filtering to keep API responses predictable and efficient. I typically use limit and offset or cursor-based pagination depending on the data set and whether consistency matters for large result sets. Filtering is then applied on the database side rather than in application code when possible so the query remains efficient. I also return metadata like total count and cursor values when needed so clients can navigate results cleanly. This helps avoid loading enormous datasets in a single response and keeps the frontend responsive.”

## 17) How do you manage secrets and configuration in production?

Answer:

“I manage secrets and configuration by keeping them out of source control and loading them from environment-specific secret stores or configuration managers. I use environment variables or secure secret vaults, restrict access by role, and rotate credentials when necessary. I also separate configuration by environment so development, staging, and production settings do not accidentally leak across boundaries. This reduces the risk of exposing credentials and makes deployments more predictable and less error-prone.”

## 18) What techniques do you use for observability and monitoring?

Answer:

“I use logging, metrics, traces, and health checks together so the system is observable from different angles. Logs help with debugging specific failures, metrics show trends and saturation, and traces help connect a user request across multiple services. I also define meaningful service-level alerts around latency, error rate, and resource usage so issues are caught before they become user-facing problems. Observability is not just about diagnosing failures; it is also about understanding how the system behaves under normal and peak load.”

## 19) How do you ensure reliability and resilience in distributed systems?

Answer:

“I design for failure by assuming downstream dependencies can break, slow down, or become unavailable. I use retries with backoff, circuit breakers, timeouts, and graceful degradation where appropriate so one service failure does not cascade into a full outage. I also pay attention to idempotency for operations that may be retried automatically, and I monitor failure rates to identify brittle dependencies. Resilience is a core engineering concern because distributed systems fail in ways that a single application usually does not.”

## 20) How do you decide what to test and what not to test?

Answer:

“I test the behaviors that matter most to the business and to the user, and I avoid testing implementation details that are likely to churn. For example, I write unit tests for business logic and validation rules, integration tests for APIs and service boundaries, and end-to-end tests for critical flows. I prioritize coverage around failure modes, edge cases, and previously broken behavior. The goal is not to maximize the number of tests, but to protect the most important behaviors while keeping the suite maintainable and fast.”

## 21) How do you design for eventual consistency in distributed systems?

Answer:

“I design for eventual consistency when strong consistency is not necessary or practical, such as in analytics, caching layers, or user activity feeds. The key is to clearly define the consistency requirements and the acceptable delay before data becomes visible everywhere. I usually use explicit state transitions, idempotent writes, and background synchronization to reconcile differences safely. I also document the trade-offs so stakeholders understand that eventual consistency improves availability and scalability but may temporarily show stale data.”

## 22) What is the difference between a queue and a pub/sub system?

Answer:

“A queue is usually focused on delivering a message to a single consumer or a limited set of consumers in a more direct, ordered processing style. Pub/sub is designed for broadcasting messages to multiple subscribers that are interested in a topic, without necessarily coupling producers and consumers tightly. In practice, I choose a queue when I need guaranteed processing or work distribution, and I choose pub/sub when I need fan-out patterns or multiple systems reacting to the same event. The right choice depends on whether message delivery is point-to-point or many-to-many.”

## 23) How do you handle data consistency between the frontend, API, and database?

Answer:

“I handle consistency by validating at each boundary and keeping clear ownership of state transitions. The frontend should validate user input for UX, but the backend is responsible for authoritative validation and business rules. The database is the source of truth, and I ensure the API contract matches the actual stored shape of data so there are no silent mismatches. When there are multiple writes or event-driven updates, I also look at whether the system needs stronger consistency guarantees or whether an eventual consistency model is acceptable.”

## 24) How do you design resilient client-side error handling?

Answer:

“I design client-side error handling around user impact and system boundaries. I treat network failures, validation errors, timeouts, and unexpected API responses as first-class cases rather than as rare edge cases. I make sure the UI shows helpful feedback, keeps the user informed, and recovers gracefully instead of failing silently. On the technical side, I also log errors with enough context for diagnostics and avoid swallowing failures in a way that makes debugging harder later.”

## 25) What is the purpose of a reverse proxy, and when would you use one?

Answer:

“A reverse proxy sits in front of application servers and forwards requests to the appropriate backend service. It is useful for load balancing, SSL termination, traffic routing, request filtering, and caching. I often use it to simplify deployment architecture, centralize security policies, and manage traffic patterns without changing each service individually. In practice, reverse proxies are a common way to improve resilience, scale applications, and apply cross-cutting concerns consistently.”

## 26) How do you approach dependency management in a full stack application?

Answer:

“I approach dependency management by keeping the dependency graph as small and explicit as possible. I avoid unnecessary packages, review transitive dependencies, and update them deliberately based on security, compatibility, and maintenance health. I also lock versions in production builds and use automated checks so we do not introduce unexpected regressions during deployment. My focus is on balancing speed and convenience with security and long-term maintainability.”

## 27) What is idempotency, and why does it matter?

Answer:

“Idempotency means that performing the same action multiple times has the same effect as performing it once. This matters in distributed systems because retries, network timeouts, and duplicate messages happen often. If an operation is not idempotent, a client retry can create duplicate charges, duplicate writes, or inconsistent state. I address this by designing operations around unique request identifiers, transactional writes, or safe reconciliation logic so retries are safe and predictable.”

## 28) How do you choose between server-side rendering, static generation, and client-side rendering?

Answer:

“I choose the rendering model based on the user experience and the data freshness requirements. Server-side rendering is useful when content needs to be SEO-friendly or the page must be ready immediately on first load. Static generation works well for mostly fixed content that can be built ahead of time and cached. Client-side rendering is often better for highly interactive application experiences where user state changes rapidly. My decision depends on balancing performance, SEO, interactivity, and the complexity of the deployment model.”

## 29) What is a deadlock, and how do you avoid it?

Answer:

“A deadlock happens when two or more transactions are waiting on each other to release resources, which leaves the system stuck indefinitely. I avoid deadlocks by keeping locking order consistent, making transactions as short as possible, and minimizing how long locks are held. I also review the application’s access patterns and database operations to ensure they do not create circular waits. In practice, good schema design and disciplined transaction boundaries are often more effective than trying to detect deadlocks after they occur.”

## 30) How do you optimize a React or frontend app that re-renders too often?

Answer:

“I start by measuring which components are re-rendering and why, rather than assuming the problem is in a specific layer. I look for unnecessary state updates, expensive child components, and props that are being recreated frequently. I use memoization where it helps, keep state close to where it is needed, and avoid passing unstable object or function references when they are not necessary. I also profile real user flows to see whether the performance issue is caused by render churn, network latency, or expensive calculations. The goal is to reduce re-renders without making the code harder to maintain.”

---

These questions are more technical and engineering-focused, and the answers are written in a way that sounds like a strong interviewee response.
