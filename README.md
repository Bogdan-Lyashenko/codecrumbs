# codecrumbs [![Tweet about codecrumbs](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Leave%20breadcrumbs%20in%20source%20code%20with%20codecrumbs%20tool%20&url=https://github.com/Bogdan-Lyashenko/codecrumbs&via=bliashenko&hashtags=javascript,code) [![npm version](https://badge.fury.io/js/codecrumbs.svg)](https://badge.fury.io/js/codecrumbs)

<h3 align="center">
  <a href="#what">What</a>
  <span> · </span>
  <a href="#demo">Demo</a>
  <span> · </span>
  <a href="#get-started">Get started</a>
  <span> · </span>
  <a href="#features">Features</a>
  <span> · </span>
  <a href="#case-studies">Case studies</a>
  <span> · </span>
  <a href="#support">Support</a>
  <span> · </span>
  <a href="#contribute">Contribute</a>
</h3>

## What
> **Have you ever got lost in a big or unknown codebase?** This tool will help you to solve that, as well as increase your development speed and quality of application architecture you build. 
>
>**How it works?** You run `codecrumbs` command for a codebase, it analyzes source code and build its visual representation. Put a codecrumb-comment and codebase state will be reflected by visual client in browser on the fly. 
>
>-[@bliashenko](https://twitter.com/bliashenko)    

## Demo
Check out [**standalone version running here**](https://codecrumbs.io/) with defined trail of codecrumbs.
 
[<img src="/docs/codecrumbs-ui.png" width="800"/>](https://codecrumbs.io/)
 
## Get started
#### Install and run
>Pre-condition: update/install `NodeJS` version to be >= *8.11.1*  
 
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
#### CLI
-- TBD --

## Features
#### Breadcrumbs
Write ```//cc:here is breadcrumb``` to put a simple breadcrumb in the code. ```cc``` (stands for "codecrumb") is the prefix which used by the parser, and ```here is breadcrumb``` is a title of our first breadcrumb.
> Note: current version supports single line comments only. 

#### Trail of breadcrumbs
Also, you can create “trail of breadcrumbs” — basically, a sequence of codecrumbs which follow some data flow (e.g. user login, or form submit, etc.).
To create a codecrumb as part of a trail you write: ```//cc:signin#3;enable route``` where ```signin``` is the **trail ID**, ```#3``` is order **number of step**, ```enable route``` is a title describing the step.
 
<img src="/docs/live-changes.gif" width="800"/>

#### Multi-codebase integration
You might be interested to study connections between several codebases (sub-modules), codecrumbs supports that.
Simply start codecrumbs multiple times (once for each codebase), it all **will be synced in one picture** inside the browser tab.

E.g. for server-client application, go to the source directory for your server code and run `codecrumbs -e your-server-src/index.py -d your-server-src`, same for client `codecrumbs -e src-client/index.js -d src-client`. **Note:** codebases can be located wherever you want, simply run `codecrumbs` for directory you need.  

<img src="/docs/multi-l-c.png" width="100%"/>

#### Multi-language support
Current version supports next programming languages: `javascript`, `typescript`, `python`, `php`, `java`, `c++` (and others which use `//` as a comment :)). Please file an issue to support other language you would like to have.
> Note: In current version only JavaScript uses AST parser to process the code, hence it offers more features (e.g. Dependencies tree) 

#### Export & import (learn and  share your knowledge)
So let’s say you put together some trail of codecrumbs describing some important flow inside the project. How you can share it with others? Simply download the json file of codecrumbs store, send it to the friend, he/she uploads it to the codecrumbs and can see same you just saw!
<img src="/docs/upload-feature-2.gif" width="100%"/>

## Case studies
The tool (codecrumbs) allows us to learn, document and explain a codebase much faster. The ultimate goal is to have many case studies hosting at [https://codecrumbs.io](https://codecrumbs.io/). **The library of projects "explained with codecrumbs", the place for collaborative learning**. More features around that coming soon, stay tuned. 

## Support
Any support is very much appreciated! 👍 😘 ❤️ 

**Sponsors**: contact me if you want to become a sponsor ☺️

**Friends**: if you like this project, please, put a :star: or tweet about it. Thanks! 

## Contribute
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the [owner](https://github.com/Bogdan-Lyashenko/) of this repository before making a change. Ideas and suggestions are welcome.
To start development environment, clone the repo & run:
```javascript
yarn && yarn start
```

## WIP
Next features are developing:
- **eject codecrumbs** - ability to remove all "breadcrumbs" from source code in "one click"
- **VS Code extension** - some neat features right inside the code editor. Checkout [the repo here](https://github.com/Bogdan-Lyashenko/vs-code-codecrumbs). 
