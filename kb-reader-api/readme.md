# KB Reader API

the KBR API accomplishes two things:

1. Provides a general structure of existing markdown files within the Knowledge Base.
2. When queried with a path, retrieve and return the relevant markdown file.

## Monorepo

This package is part of the **reabs-kb** monorepo. Install all dependencies from the repository root:

```bash
npm install
```

Run the API server from the root:

```bash
npm run api
```

Or from within this directory:

```bash
npm start
```

## Routes

`/structure`

- Returns a JSON File containing the current structure w/ metadata of existing markdown files

`/markdown/{pageref}`

- If page exists then markdown text is returned, otherwise an error will be thrown.
