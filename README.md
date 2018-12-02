## [ACTIVE DEVELOPMENT. STAY TUNED!]

# codecrumbs
Leave "breadcrumbs" in source code via comments to find your way out from code maze 

![](/docs/ui-scr.png)


## In a big codebase we can’t:
- generalize
- recognise patterns
- see big picture
- make assumption 

## This project will allow you to: 
- leave bread crumbs in a code maze
- cut off paths leading nowhere
- see entire maze from a “bird’s-eye” view


Your project setup:
```javascript
{
  "dependencies": {
    "codecrumbs": "1.0.0"
  },
  "scripts": {
    "start": "codecrumbs -e src/index.js -d src"
  }
}
```