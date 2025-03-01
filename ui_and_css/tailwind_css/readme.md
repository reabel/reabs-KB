# Tailwind CSS

An inline-HTML CSS Framework that uses class-based shorthand to style pages.

## Examples

### Basic styling example from [Tailwind](https://tailwindcss.com/docs/styling-with-utility-classes)

```html
<div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
    <img class="size-12 shrink-0" src="/img/logo.svg" alt="ChitChat Logo" /> 
    <div>
        <div class="text-xl font-medium text-black dark:text-white">
            ChitChat
        </div>
        <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
    </div>
</div>
```

The website previously links breaks down the UI into various utlities used. Specifically:
 - display, padding
 - max-width, margin
 - background-color, border-radius, box-shadow
 - width, height
 - gap
 - font-size, color, font-weight

 Each utility used translates to a relevant CSS prop, value, or style. As such, Tailwind itself needs to be installed somewhere in order for it to work.

## Links

- [Homepage](https://tailwindcss.com)
- [VS Code plugin: Tailwind Fold](https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold)
- [VS Code Plugin: Tailwind Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Relevant JS Party](https://changelog.com/jsparty/155)
- [Relevent undefined.fm](https://undefined.fm/radio/atomic-css-with-adam-wathan-creator-of-tailwind-css)
- [Syntax on Version 4](https://syntax.fm/show/877/tailwind-4)


## Projects Using Tailwind


### Internal

- [NextJS Songpicker](/Javascript/next/sandbox/song-picker/)
- [Todo - Next](/Projects/Todo/frontend/todo/)
- [Todo - General Dashboard](/Projects/Todo/frontend/nextjs-dashboard/)

### External
