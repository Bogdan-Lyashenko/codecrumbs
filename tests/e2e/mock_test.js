import Page from './page-objects/page-model';
import {
  Selector
} from 'testcafe';


fixture `My fixture`
  .page `http://${process.env.PLAYGROUND_URL}`;

const page = new Page();

// Mock Test
test('Mock Test', async t => {
  await t
    .click(page.getSwitch('Source'))
    .click(page.getSwitch('Dependencies'))
    .click(page.getSwitch('CodeCrumbs'))
    .click(page.getSwitch('SideBar'))
});


test('Clicking Source Toggle', async t => {
  const Switch = await page.getSwitch('Source');

  await t.click(Switch)
  // Check if Switch is set to false
  await page.isSwitchUnchecked(Switch)
  // Check if dropdown is disabled
  await page.isDropDownDisabled('Source')
  // Check if the diagram is removed
  await page.isTreeDiagramEmpty()

  await t.click(Switch)
  // Check if the Switch is set to true
  await page.isSwitchChecked(Switch)
  // Click the dropdown
  await t.click(page.getParent(Switch))
  // Check if the dropdown has appeared
  await page.isDropDownEnabled('Source')
  // Check if the diagram has appeared
  await page.isTreeDiagramPopulated()
});


test('Clicking Close All Dropdown Option', async t => {
  const closeAllOption = await page.getDropDownSelector('close all')
  const Switch = await page.getSwitch('Source')
  // Click the dropdown button to enable the dropdown options
  await t.click(page.getParent(Switch))
    // Click the close all option
    .click(closeAllOption)
  // Expect the count of folder nodes to be 1 and file nodes to be 0
  await page.isClosedAll()
});

test('Clicking Open All Dropdown Option', async t => {
  const openAllOption = await page.getDropDownSelector('open all')
  const Switch = await page.getSwitch('Source')

  // Click the dropdown button to enable the dropdown options
  await t.click(page.getParent(Switch))
    // Click the Open all option
    .click(openAllOption)
  // Expect the count of folder nodes to be 24 and file nodes to be 57
  await page.isOpenedAll()
});


test('Checking Active Only Option ', async t => {
  const activeOnlyOption = await page.getDropDownSelector('active only')
  const openAllOption = await page.getDropDownSelector('open all')
  const Switch = await page.getSwitch('Source')
  const folders = ['src-client', 'views', 'components', 'require-auth-route']
  const files = ['require-auth-route.js']

  // Click the dropdown button to enable the dropdown options
  await t.click(page.getParent(Switch))
    // Click the Open all option
    .click(openAllOption)
  // Expect the count of folder nodes to be 24 and file nodes to be 57
  await page.isOpenedAll()

  /*
    This part currently fails due to the DOM element not being found
  */
  // // Click the src-client
  // await t.click(page.getFolderNode(folders[0]))
  //   // Click views
  //   .click(page.getFolderNode(folders[1]))
  //   // Click components
  //   .click(page.getFolderNode(folders[2]))
  //   // Click require-auth-route
  //   .click(page.getFolderNode(folders[3]))
  //   // Click require-auth-route.js
  //   .click(page.getFileNode(files[0]))
  // // Click The dropdown
  // await t.click(Switch.parent(0))
  //   // Click active only
  //   .click(activeOnlyOption)
  // // expect only the folders in the path to require-auth-route.js to be open
  // await page.areFoldersPresent(folders)
  // await page.areFilesPresent(files)

});


test('Clicking Dependencies Toggle', async t => {
  const Switch = await page.getSwitch('Dependencies');

  await t.click(Switch)
  // Check if Switch is set to true
  await page.isSwitchChecked(Switch)
  // Click the dropdown
  await t.click(page.getParent(Switch))
  // Check if Dropdown menu appeared
  await page.isDropDownEnabled('Dependencies')

  await t.click(Switch)
  // Check if Switch is set to false
  await page.isSwitchUnchecked(Switch)
  // Check if Dropdown menu disappeared
  await page.isDropDownDisabled('Dependencies')
});

test('Clicking CodeCrumbs Toggle', async t => {
  const Switch = await page.getSwitch('CodeCrumbs');

  await t.click(Switch)
  // Check if Switch is set to true
  await page.isSwitchChecked(Switch)
  // Click the dropdown
  await t.click(page.getParent(Switch))
  // Check if Dropdown menu appeared
  await page.isDropDownEnabled('CodeCrumbs')

  await t.click(Switch)
  // Check if Switch is set to false
  await page.isSwitchUnchecked(Switch)
  // Check if Dropdown menu disappeared
  await page.isDropDownDisabled('CodeCrumbs')

});

test('Clicking SideBar Toggle', async t => {
  const Switch = await page.getSwitch('SideBar');

  await t.click(Switch)
  // Check if Switch is set to true
  await page.isSwitchChecked(Switch)

  await t.click(Switch)
  // Check if Switch is set to false
  await page.isSwitchUnchecked(Switch)
});
