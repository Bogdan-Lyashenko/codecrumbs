import {
  Selector,
  t
} from 'testcafe';


class Header {
  constructor(className) {
    this.container = Selector(`.${className}`)

    // Children of the header
    this.ViewSwitchesContainer = new ViewSwitchesContainer(this.container, "ViewSwitchList")
    this.TopBar = new TopBar()
  }

}

class ViewSwitchesContainer {
  constructor(parentContainer, className) {
    this.container = parentContainer.find(`.${className}`)

    // Children of View Switches Container
    this.switches = {
      'Source': this.container.find('div.big-item').withText('Source').find('button'),
      'Dependencies': this.container.find('div.big-item').withText('Dependencies').find('button'),
      'CodeCrumbs': this.container.find('div.big-item').withText('CodeCrumbs').find('button'),
      'SideBar': this.container.find('div.big-item').withText('SideBar').find('button'),
    }

    this.dropDownOptions = {
      'Source': ['close all', 'open all', 'active only', 'dim source', 'explorer'],
      'Dependencies': ['direct only'],
      'CodeCrumbs': ['minimize', 'details', 'code preview', 'line numbers'],
      'setup': ['Download Store', 'Upload Store']
    }
  }
}

class TopBar {
  constructor() {

  }
}

class Body {
  constructor(className) {
    this.container = Selector(`.${className}`)
    this.ExplorerBar = new ExplorerBar()
    this.Spin = new Spin()
    this.TreeDiagramsContainer = new TreeDiagramsContainer(this.container, "TreeDiagramsContainer")
    this.Sidebar = new Sidebar()
  }
}

class ExplorerBar {
  constructor() {

  }
}

class Spin {
  constructor() {

  }
}



class TreeDiagramsContainer {
  constructor(parentContainer, className) {
    this.container = parentContainer.find(`.${className}`)
  }

  getFolderNode(textContent) {
    return this.container.find('.NodeText-folder-name').withText(textContent)
  }

  getFileNode(textContent) {
    return this.container.find('g.FileNode > text').withText(textContent)
  }

  getSvgContainer() {
    return this.container.find('svg').withAttribute(/^shape-rendering$/, /^optimizeSpeed$/)
  }

  getFolderNodeCount() {
    return this.container.find('g.FolderNode').count
  }

  getFileNodeCount() {
    return this.container.find('g.FileNode').count
  }

}

class Sidebar {
  constructor() {

  }
}

export default class Page {

  constructor() {
    this.Header = new Header("header")
    this.Body = new Body("body")
  }

  getSwitch(switchName) {
    return this.Header.ViewSwitchesContainer.switches[switchName]
  }

  getParent(selector) {
    return selector.parent(0)
  }

  async isSwitchChecked(Switch) {
    await t.expect(Switch.withAttribute(/^aria-checked$/, /^true$/).exists).ok()
  }

  async isSwitchUnchecked(Switch) {
    await t.expect(Switch.withAttribute(/^aria-checked$/, /^false$/).exists).ok();
  }

  async isDropDownDisabled(switchName) {
    for (var element of this.Header.ViewSwitchesContainer.dropDownOptions[switchName])
      await t.expect(Selector('li').withText(element).exists).notOk()
  }

  async isDropDownEnabled(switchName) {
    for (var element of this.Header.ViewSwitchesContainer.dropDownOptions[switchName])
      await t.expect(Selector('li').withText(element).exists).ok()
  }

  async isTreeDiagramEmpty() {
    await t.expect(this.Body.TreeDiagramsContainer.getSvgContainer().child().count).eql(1)
  }

  async isTreeDiagramPopulated() {
    await t.expect(this.Body.TreeDiagramsContainer.getSvgContainer().child().count).notEql(1)
  }

  async getDropDownSelector(text) {
    return await Selector('li').withText(text)
  }

  // Function to check if all the Tree Diagram nodes have been closed
  async isClosedAll() {
    await t.expect(this.Body.TreeDiagramsContainer.getFolderNodeCount()).eql(1)
      .expect(this.Body.TreeDiagramsContainer.getFileNodeCount()).eql(0)
  }

  // Function to check if all the tree Diagram nodes have been opened
  async isOpenedAll() {
    // expect 24 folders
    await t.expect(this.Body.TreeDiagramsContainer.getFolderNodeCount()).eql(24)
      // expect 57 files
      .expect(this.Body.TreeDiagramsContainer.getFileNodeCount()).eql(57)
  }

  // Function to check if the folders in folderList are present in the TreeDiagram
  async areFoldersPresent(folderList) {
    await t.expect(this.Body.TreeDiagramsContainer.getFolderNodeCount()).eql(folderList.length)
    for (var element of folderList) {
      await t.expect(this.Body.TreeDiagramsContainer.getFolderNode(element).exists).ok()
    }
  }
  // Function to check if the files in filesList are present in the TreeDiagram
  async areFilesPresent(filesList) {
    await t.expect(this.Body.TreeDiagramsContainer.getFileNodeCount()).eql(filesList.length)
    for (var element of filesList) {
      await t.expect(this.Body.TreeDiagramsContainer.getFileNode(element).exists).ok()
    }
  }

  // Function to return the selector to the fileNode
  getFileNode(name) {
    return this.Body.TreeDiagramsContainer.getFileNode(name)
  }

  // Function to return the selector to the folderNode
  getFolderNode(name) {
    return this.Body.TreeDiagramsContainer.getFolderNode(name)
  }
}
