## [ACTIVE DEVELOPMENT. STAY TUNED!]

# codecrumbs
Leave "breadcrumbs" in source code via comments to find your way out from code maze.
See *demo* of result [here](https://bogdan-lyashenko.github.io/codecrumbs/src/public/dist/standalone/index.html)

![](/docs/ui-scr.png)

## To run for your project:
```yarn add codecrumbs```
then inside your project setup do something like (change -e, -d params for your paths):
```javascript
{
  "dependencies": {
    "codecrumbs": "1.0.3-alpha"
  },
  "scripts": {
    "start": "codecrumbs -e src/index.js -d src"
  }
}
```

## In a big codebase we can’t:
- generalize
- recognise patterns
- see big picture
- make assumption 

## This project will allow you to: 
- leave bread crumbs in a code maze
- cut off paths leading nowhere
- see entire maze from a “bird’s-eye” view
