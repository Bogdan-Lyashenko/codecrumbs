# codecrumbs [active development phase, stay tuned!] [![Tweet about codecrumbs](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Leave%20breadcrumbs%20in%20source%20code%20with%20codecrumbs%20tool%20&url=https://github.com/Bogdan-Lyashenko/codecrumbs&via=bliashenko&hashtags=javascript,code) [![npm version](https://badge.fury.io/js/codecrumbs.svg)](https://badge.fury.io/js/codecrumbs)

<h3 align="center">
  <a href="https://github.com/Bogdan-Lyashenko/codecrumbs#what">What</a>
  <span> · </span>
  <a href="https://github.com/Bogdan-Lyashenko/codecrumbs#demo">Demo</a>
  <span> · </span>
  <a href="https://github.com/Bogdan-Lyashenko/codecrumbs#get-started">Get started</a>
  <span> · </span>
  <a href="https://github.com/Bogdan-Lyashenko/codecrumbs#features">Features</a>
  <span> · </span>
  <a href="https://codecrumbs.io/">codecrumbs.io</a>
  <span> · </span>
  <a href="https://github.com/Bogdan-Lyashenko/codecrumbs#support">Support</a>
  <span> · </span>
  <a href="https://github.com/Bogdan-Lyashenko/codecrumbs#contribute">Contribute</a>
</h3>

## What
Leave "breadcrumbs" in source code via comments to see "clear picture" how main features of your application work. Support of multiple modules and languages: JavaScript, TypeScript, [Java, Ruby, Python] (implementation in progress). Share your knowledge with export&import feature.    

## Demo
Check out [**standalone version running here**](https://codecrumbs.io/) with defined trail of codecrumbs.
 
[<img src="/docs/codecrumbs-ui.png" width="800">](https://codecrumbs.io/)
 
## Get started
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

## Features
#### Breadcrumbs
> Leave breadcrumbs by simply putting a comment in code, diagram wil be updated on the fly!
 
Write ```//cc:here is breadcrumb``` to put a simple breadcrumb in the code. ```cc``` (stands for "codecrumb") is the prefix which used by the parser, and ```here is breadcrumb``` is a title of our first breadcrumb.

#### Trail of breadcrumbs
Also, you can create “trail of breadcrumbs” — basically, a sequence of codecrumbs which follow some data flow (e.g. user login, or form submit, etc.).
To create a codecrumb as part of a trail you write: ```//cc:signin#3;enable route``` where ```signin``` is the **trail ID**, ```#3``` is order **number of step**, ```enable route``` is a title describing the step.
 
<img src="/docs/live-changes.gif" width="800">

Check out [the introduction article here](https://itnext.io/how-to-navigate-the-maze-of-javascript-code-541250447cbb) for more details.


#### Export & import (learn and  share your knowledge)
So let’s say you put together some trail of codecrumbs describing some important flow inside the project. How you can share it with others? Simply download the json file of codecrumbs store, send it to the friend, he/she uploads it to the codecrumbs and can see same you just saw!
<img src="/docs/share-knowledge.gif" width="800">

## WIP
Next features are developing:
- **multi languages support** - support of java, ruby, python, etc.
- **eject codecrumbs** - ability to remove all "breadcrumbs" from source code in "one click"

## Support

If you like this project and believe it makes sense, please, put a :star: or tweet about it - it will show your support and motivate me :punch:. Thanks! 

## Contribute
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the [owner](https://github.com/Bogdan-Lyashenko/) of this repository before making a change. Ideas and suggestions are welcome.
To start development environment run:
```javascript
yarn && yarn start
```