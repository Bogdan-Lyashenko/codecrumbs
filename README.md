# codecrumbs [active development phase, stay tuned!] [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Leave%20breadcrumbs%20in%20source%20code%20with%20codecrumbs%20tool%20&url=https://github.com/Bogdan-Lyashenko/codecrumbs&via=bliashenko&hashtags=javascript,code)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![npm version](https://badge.fury.io/js/codecrumbs.svg)](https://badge.fury.io/js/codecrumbs)

Leave "breadcrumbs" in source code via comments to find your way out from code maze.
> Still much work to do, but the basic features are already implemented and can ready fro use. Give it a try while I am finishing few more big features. Ideas and improvements are welcome. Thanks.

## [Demo](https://bogdan-lyashenko.github.io/codecrumbs/src/public/dist/standalone/index.html)
Check out [**standalone version here**](https://bogdan-lyashenko.github.io/codecrumbs/src/public/dist/standalone/index.html) with defined trail of codecrumbs.
 
[<img src="/docs/codecrumbs-ui.png" width="800">](https://bogdan-lyashenko.github.io/codecrumbs/src/public/dist/standalone/index.html)
 
# Get started
Install ```codecrumbs``` globally or in ```devDependencies```:
```yarn add codecrumbs -D```

Add command with **entry file** and **source directory** to ```scripts``` section in your ```package.json```. Change ```-e``` (entry point file), ```-d``` (directory) params to match paths inside your project.
```javascript
  // package.json
  ...
  "scripts": {
    "start:cc": "codecrumbs -e src/index.js -d src"
  }

```

Run ```yarn start:cc``` from the terminal. Go to [http://localhost:2018/#](http://localhost:2018/#) in the browser to check it out.

## Breadcrumbs
> Leave breadcrumbs by simply putting a comment in code, diagram wil be updated on fly!
 
Write ```//cc:here is breadcrumb``` to put a simple breadcrumb in the code. ```cc``` (stands for "codecrumb") is the prefix which used by the parser, and ```here is breadcrumb``` is a title of our first breadcrumb.

Also, you can create “trail of breadcrumbs” — basically, a sequence of codecrumbs which follow some data flow (e.g. user login, or form submit, etc.).
To create a codecrumb as part of a trail you write: ```//cc:signin#3;enable route``` where ```signin``` is the **trail ID**, ```#3``` is order **number of step**, ```enable route``` is a title describing the step. 
<img src="/docs/live-changes.gif" width="800">

Check out [the introduction article here](https://itnext.io/how-to-navigate-the-maze-of-javascript-code-541250447cbb) for more details.


## Learn and share your knowledge
So let’s say you put together some trail of codecrumbs describing some important flow inside the project. How you can share it with other? Simply download the json file of codecrumbs store, send it to the friend, he/she uploads it to the codecrumbs and can see same you just saw!
<img src="/docs/share-knowledge.gif" width="800">

## Support

If you like this project and believe it makes sense, please, put a :star: or tweet about it - it will show your support and motivate me :punch:. Thanks! 