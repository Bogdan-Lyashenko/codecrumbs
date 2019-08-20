import { Selector, t} from 'testcafe';


class Header {
  constructor(className) {
      this.container = Selector(`.${className}`)

      // Children of the header
      this.ViewSwitchesContainer = new ViewSwitchesContainer(this.container, "ViewSwitchList")
      this.TopBar = new TopBar()
  }

}

class ViewSwitchesContainer {
  constructor(parentContainer, className){
    this.container = parentContainer.find(`.${className}`)

    // Children of View Switches Container
    this.switches = {
      'Source' : this.container.find('div.big-item').withText('Source').find('button'),
      'Dependencies' : this.container.find('div.big-item').withText('Dependencies').find('button'),
      'CodeCrumbs' : this.container.find('div.big-item').withText('CodeCrumbs').find('button'),
      'SideBar' : this.container.find('div.big-item').withText('SideBar').find('button'),
    }

    this.dropDownOptions = {
      'Source' : ['close all', 'open all', 'active only', 'dim source', 'explorer'],
      'Dependencies' : ['direct only'],
      'CodeCrumbs' : ['minimize', 'details', 'code preview', 'line numbers'],
      'setup' : ['Download Store', 'Upload Store']
    }
  }
}



class TopBar{
  constructor(){

  }
}

class Body {
  constructor(className){
    this.container = Selector(`.${className}`)
    this.ExplorerBar = new ExplorerBar()
    this.Spin = new Spin()
    this.TreeDiagramsContainer = new TreeDiagramsContainer(this.container, "TreeDiagramsContainer")
    this.Sidebar = new Sidebar()
  }
}

class ExplorerBar {
  constructor(){

  }
}

class Spin {
  constructor(){

  }
}

class TreeDiagramsContainer{
  constructor(parentContainer, className){
    this.container = parentContainer.find(`.${className}`)
  }

  getFolderNode(textContent){
    return this.container.find('g.FolderNode').withText(textContent)
  }

  getFileNode(textContent){
    return this.container.find('g.FileNode').withText(textContent)
  }

  getSvgContainer(){
    return this.container.find('svg').withAttribute(/^shape-rendering$/, /^optimizeSpeed$/)
  }

}

class Sidebar{
  constructor(){

  }
}

export default class Page {

    constructor () {
      this.Header = new Header("header")
      this.Body = new Body("body")
    }

    getSwitch(switchName){
        return this.Header.ViewSwitchesContainer.switches[switchName]
    }

    async isDropDownDisabled(switchName){
      for(var element of this.Header.ViewSwitchesContainer.dropDownOptions[switchName])
        await t.expect(Selector('li').withText(element).exists).notOk()
    }

    async isDropDownEnabled(switchName){
      for(var element of this.Header.ViewSwitchesContainer.dropDownOptions[switchName])
        await t.expect(Selector('li').withText(element).exists).ok()
    }

    async isTreeDiagramEmpty(){
      await t.expect(this.Body.TreeDiagramsContainer.getSvgContainer().child().count).eql(1)
    }

    async isTreeDiagramPopulated(){
      await t.expect(this.Body.TreeDiagramsContainer.getSvgContainer().child().count).notEql(1)
    }

  }
