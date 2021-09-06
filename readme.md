# Generate Next.js component

A opinionated file generator for Next.js with TypeScript and CSS Modules.

It will generate 3 or 4 files:

- index.tsx - React component
- interface.ts - Component interface
- styles.module.scss - CSS Modules file with import statement
- cms.ts [optional] - Netlify CMS

## Usage

### Add script to package.json

`"make-module": "node node_modules/@martijnnieuwenhuizen/generate-component ./components/modules $1"`

### Explanation of the command

`node node_modules/@martijnnieuwenhuizen/generate-component [path] [file name param (use PascalCase)]`

### Add Netlify CMS file

If you would like to have a Netlify CMS file with the name `cms.ts`, just add the flag `--with-netlify-cms`

#### Example

`"make-module": "node node_modules/@martijnnieuwenhuizen/generate-component ./components/modules $1" --with-netlify-cms`

### Execute

Execute the command like `yarn run make-module MyModule`.

It's important to PascalCase the module-name as is convention for Next.js/React.js

## Generated files

### Component

```tsx
import type ComponentNameInterface from "./interface";

import styles from "./styles.module.scss";

export default function ComponentName({ children }: ComponentNameInterface) {
  return (
    <div className={styles["component-name"]}>
      <h1>Hello! ComponentName</h1>
      {children}
    </div>
  );
}
```

### Interface

```ts
export default interface ComponentName {
  children: React.ReactNode;
}
```

### Style

```scss
@import "../../../styles/base.scss";

.component-name {
  @include block(large);
}
```

### CMS

```ts
export default {
  label: "Component name",
  name: "component-name",
  widget: "object",
  summary: "Component name | {{fields.title}}",
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
      required: false,
    },
    {
      label: "Component",
      name: "component",
      widget: "hidden",
      default: "component-name",
    },
  ],
};
```
