# Monorepos

[Fireship video on monorepos](https://www.youtube.com/watch?v=9iU_IE6vnJ8)

## General info

- Yarn / NPM can define workspaces, nexted package files that relate to the root package file
- Can dedupe dependencies, requiring them to be only installed once regardless of how many times it's used.

## Downsides

- Monorepos get big, can lead to much longer build times

## Tools

- [Lerna](https://lerna.js.org/)
  - can publish with a single command.
- pnpm can help