# reabs-KB
a personal knowledgebase

## JS Apps (npm Monorepo)

The JavaScript apps and examples are managed as an **npm workspace** monorepo. A single `node_modules` at the repository root is shared across all packages.

### Setup

```bash
npm install
```

### Workspaces

| Package | Path | Description |
|---------|------|-------------|
| `kb-reader-api` | `kb-reader-api/` | Express API serving markdown files |
| `kb-reader-app` | `kb-reader-app/` | React/Vite frontend for the KB Reader |
| `electron-sandbox` | `examples/electron-sandbox/` | Electron sandbox |
| `nextjs-dashboard` | `examples/nextjs-dashboard/` | Next.js dashboard tutorial |
| `pinia-test` | `examples/pinia-test/` | Vue + Pinia example |
| `recipe` | `examples/react-recipe/` | React recipe app |
| `my-remix-app` | `examples/remix-app/` | Remix app |
| `tut` | `examples/remix-tutorial/` | Remix tutorial |
| `song-picker` | `examples/song-picker/` | Next.js song picker |
| `kit-sample` | `examples/svelte-kit-sample/` | SvelteKit sample |
| `swagger-sandbox` | `examples/swagger-sandbox/` | Swagger UI sandbox |
| `term-music` | `examples/term-music/` | Terminal music maker |
| `three-sandbox` | `examples/three-sandbox/` | Three.js sandbox |
| `todo` | `examples/todo/` | Next.js todo app |
| `quick-start` | `examples/vue-quick-start/` | Vue quick-start |
| `store-prototype` | `examples/vue-store-prototype/` | Vue store prototype |

> **Note:** `examples/expo-app` (React Native/Expo) is not included in the workspace due to Metro bundler incompatibility with npm hoisting. Install it separately with `npm install` inside that directory.

### Root Scripts

```bash
npm run api      # start the kb-reader-api server
npm run app      # start the kb-reader-app dev server
npm run build    # build kb-reader-app
npm run lint     # lint kb-reader-app
npm test         # run tests across all workspaces
```

To run a script in a specific workspace:

```bash
npm run dev --workspace=examples/svelte-kit-sample
```

## Sources

I've pooled together information in this Knowledge base from serveral web and physical sources includig Wiki and MDN articles. Below I've listed some of the more uncommon sources that I've used.

- [C# 2010 for programmers](https://archive.org/details/c2010forprogramm0000deit/page/n7/mode/2up)
