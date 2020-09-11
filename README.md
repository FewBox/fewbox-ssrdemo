# fewbox-ssrdemo
```shell
# Dev
yarn dev
# Run
yarn build
yarn start
# Export Static
yarn export
```
## Pages
> pages/ #Normal

> pages/posts/[id].js #Dynamic

## Two forms of Pre-rendering
- Static Generation (**Recommended**): The HTML is generated at build time and will be reused on each request.
- Server-side Rendering: The HTML is generated on each request.

## Static Generation with data
- getStaticProps
- getStaticPaths
