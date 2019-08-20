import Page from '../page-objects/page-model';
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
  const button = await page.getSwitch('Source');
  await t
    .click(button)
  // Check if button is set to false
    .expect(button.withAttribute(/^aria-checked$/, /^false$/).exists).ok()
  // Check if dropdown is disabled
  await page.isDropDownDisabled('Source')
  // Check if the diagram is removed
  await page.isTreeDiagramEmpty()
  // expect menu to disappear

  await t.click(button)
  // Check if the button is set to true
    .expect(button.withAttribute(/^aria-checked$/, /^true$/).exists).ok()
  // Click the dropdown
    .click(button.parent(0))
  // Check if the dropdown has appeared
  await page.isDropDownEnabled('Source')
  // Check if the diagram has appeared
  await page.isTreeDiagramPopulated()
  // expect menu to appear
});

test('Clicking Dependencies Toggle', async t => {
  const button = await page.getSwitch('Dependencies');

  await t.click(button)
  // Check if button is set to true
    .expect(button.withAttribute(/^aria-checked$/, /^true$/).exists).ok()
  // Click the dropdown
    .click(button.parent(0))
  // Check if Dropdown menu appeared
  await page.isDropDownEnabled('Dependencies')

  await t
    .click(button)
  // Check if button is set to false
    .expect(button.withAttribute(/^aria-checked$/, /^false$/).exists).ok()
  // Check if Dropdown menu disappeared
  await page.isDropDownDisabled('Dependencies')
});

test('Clicking CodeCrumbs Toggle', async t => {
  const button = await page.getSwitch('CodeCrumbs');

  await t.click(button)
  // Check if button is set to true
    .expect(button.withAttribute(/^aria-checked$/, /^true$/).exists).ok()
  // Click the dropdown
    .click(button.parent(0))
  // Check if Dropdown menu appeared
  await page.isDropDownEnabled('CodeCrumbs')

  await t
    .click(button)
  // Check if button is set to false
    .expect(button.withAttribute(/^aria-checked$/, /^false$/).exists).ok()
  // Check if Dropdown menu disappeared
  await page.isDropDownDisabled('CodeCrumbs')

});

test('Clicking SideBar Toggle', async t => {
  const button = await page.getSwitch('SideBar');

  await t.click(button)
  // Check if button is set to true
    .expect(button.withAttribute(/^aria-checked$/, /^true$/).exists).ok()
    .click(button)
  // Check if button is set to false
    .expect(button.withAttribute(/^aria-checked$/, /^false$/).exists).ok()
});
