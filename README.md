 [![npm version](https://badge.fury.io/js/codecrumbs.svg)](https://badge.fury.io/js/codecrumbs) [![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/) [<img src="https://img.shields.io/twitter/follow/bliashenko.svg?label=Stay%20Tuned&style=social">](https://twitter.com/bliashenko)

<p align="center">
    <img src="/docs/logo-sm.png" width="250"/>
</p>

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
</h3>

## Codecrumbs v2
Check out [new version of this project as standalone application](https://codecrumbs.io). Just in a few clicks you can start exploring a codebase in more efficient way, create interactive visual guides and share them with others on your own blog! 

<p align="center">
  <a href="https://codecrumbs.io" target="_blank">
   <img src="https://codecrumbs.io/external/img/common/app-ui-1.png" />
  </a>
</p>



## What
> **Have you ever got lost in a big or unknown codebase?** This tool will help you to solve that. Also, it will increase your development speed and give more knowledge about your application architecture.
>
>**How it works?** You run `codecrumbs` command for a codebase, it analyzes source code and builds its visual representation. Write down a codecrumb-comment and codebase state will be reflected by visual client in browser on the fly.
>
> Check out [my talk at React-Finland](https://www.youtube.com/watch?v=S_1-1jzLxm4) for more details.


> If you like this project, follow me on Twitter [@bliashenko](https://twitter.com/bliashenko) to hear about things I am building. 

## Demo
Check out the example of [**standalone version running here**](https://codecrumbs.io).

<img src="/docs/main-ui-3.png" width="100%"/>

## Get started
### Install and run
>Pre-condition: update/install `NodeJS` version to be >= *8.11.1*

1) Install ```codecrumbs``` globally (```yarn global add codecrumbs```)
2) Run ```codecrumbs -d project-src-dir -e project-src-dir/index.js```. Change parameters to match your project:```-d``` is *directory with source code*, ```-e``` is *entry point file* .
3) Go to [http://localhost:2018](http://localhost:2018/#) in the browser to check it out.

### Configuration
Run codecrumbs with CLI params or specify static config file `codecrumbs.config.js` (see example [here](/example-project/codecrumbs.config.js))

CLI | Config file | Description | Example
--- | --- | --- | ---
```d``` | ```projectDir``` | Relative path to project source code directory | ```-d src```
```e``` | ```entryPoint``` | Relative path to project source entry point file (must be inside ```dir```) | ```-e src/app.js```
```x``` | ```excludeDir``` | Relative path(or paths separated by ```,```) to directories for exclusion | ```-x src/doc,src/thirdparty```
```p``` | ```clientPort``` | Port for Codecrumbs client (optional, default *2018*) | ```-p 2019```
```n``` | ```projectNameAlias``` | Project name alias (optional, default same as ```-d``` value) | ```-n my-hello-world```
```C``` | - | Path to codecrumbs.config.js (optional, by default will try to find the file in PWD) | ```-C config/codecrumbs.config.js```
```D``` | ```debugModeEnabled``` | Enable debug mode for logs (optional, default is ```false```) | ```-D```

## Features
### Breadcrumbs and trails

<img src="/docs/cc-ui-3.png" width="750"/>

UI explained:
- enable "Codecrumbs" switch to have codecrumbs tree on the scheme (drop-down contains extra configuration)
- choose "current" codecrumbs trail to display (can be either trail or all other "simple" codecrumbs)
- select connection between two steps (code for two codecrumbs will be opened in "Sidebar" under "Crumbs" tab)
- set other options in dropdowns to configure behaviour of the diagram (show code blocks, details, etc.)

**How to get there?**

Leave breadcrumb in code by writing down a comment: ```//cc:[parameters;]```.

```cc``` (stands for "CodeCrumb") is a prefix which used by the parser; check example of parameters in the table below:

Example | Description | Use case
--- | --- | ---
```//cc:remember place``` | simple breadcrumb, ```remember place``` is a title of our first breadcrumb | Mark an important place to not forget where it was
```//cc:here is bug;well, seems like a bug in logic``` | simple breadcrumb, ```well, seems like a bug in logic``` is details for breadcrumb, separated by ```;``` | Add extra information, will be rendered in popups
```//cc:signin#3;enable route``` | trail of breadcrumbs,```signin``` is the **trail ID**, ```#3``` is order **number of step**, ```enable route``` is a title describing the step. | A sequence of codecrumbs, use to describe some data flow (e.g. user login, or form submit, etc.).
```//cc:signin#1;firebase sign in;+2;do call to firebase with credentials``` | trail of breadcrumbs,```+2``` is number of lines to highlight, separated by ```;``` | Use number of lines to highlight the code related to breadcrumb

> Note: current version supports single line comments only.

> Hint: you can use trail id without step number (e.g. ```//cc:groupname#;test```) just to group breadcrumbs, you always can add step numbers later when you know the correct order. 

### Multi-codebase integration
You might be interested to study connections between several codebases (sub-modules), codecrumbs supports that.
Simply start codecrumbs multiple times (once for each codebase), it all **will be synced in one picture** inside the browser tab. To control a diagram UI - select it by clicking on it.

E.g. for client-server application, go to the source directory for your server code and run `codecrumbs -e your-server-src/index.py -d your-server-src`, same for client `codecrumbs -e src-client/index.js -d src-client`.
> **Note:** codebases can be located wherever you want (**no** need to have them like mono-repo, etc.), simply run `codecrumbs` for directory you need.

<img src="/docs/multi-codebase-cc-2.png" width="100%"/>

### Multi-language support
Current version supports next programming languages:
- `C#`
- `C++`
- `Fortran`
- `Go`
- `Haskell`
- `Java`
- `JavaScript`
- `Kotlin`
- `PHP`
- `Python`
- `Ruby`
- `TypeScript`

Please file an issue to support other language you would like to have.

### Dependencies
> Note: In current version only [JavaScript, TypeScript] offer this feature

<img src="/docs/dep-ui-2.png" width="100%"/>

UI explained:

- enable "Dependencies" switch
- select connection between modules (all involved files will be opened in "Sidebar", so you can see “what is imported” and “its implementation”)

### Flowchart
> Note: In current version only JavaScript offers this feature

<img src="/docs/flow-ui.png" width="100%"/>

[js2flowchart](https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart) is used in the sidebar to draw flowchart for the selected file code.

## Support
Any support is very much appreciated! 👍 😘 ❤️
If you like this project, please, **put a :star: and tweet about it**. Thanks!

Please, consider [making financial donation](https://opencollective.com/codecrumbs), it will help further development of more cool features! We'll thank you by including your name/company logo here ☺️. Feel free to [ping me](https://www.linkedin.com/in/bohdan-liashenko-bb365854/) for discussion.

<a href="https://opencollective.com/codecrumbs/donate" target="_blank">
  <img src="https://opencollective.com/codecrumbs/donate/button@2x.png?color=blue" width=300 />
</a>

#### Sponsors
Development supported by [0+X](https://0x.se)

<a href="https://0x.se" target="_blank">
  <img src="https://avatars0.githubusercontent.com/u/16350669?s=200&v=4" width=100 />
</a>

#### Backers
<a href="https://opencollective.com/codecrumbs/backer/0/website" target="_blank"><img src="https://opencollective.com/codecrumbs/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/codecrumbs/backer/1/website" target="_blank"><img src="https://opencollective.com/codecrumbs/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/codecrumbs/sponsor/0/website" target="_blank"><img src="https://opencollective.com/codecrumbs/sponsor/0/avatar.svg"></a>

## Contribute
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the [owner](https://github.com/Bogdan-Lyashenko/) of this repository before making a change. Ideas and suggestions are welcome.
To start development environment, clone the repo & run:
```javascript
yarn && yarn start
```

## WIP
Next features are developing:
- **VS Code extension** - some neat features right inside the code editor. Checkout [the repo here](https://github.com/Bogdan-Lyashenko/vs-code-codecrumbs).
