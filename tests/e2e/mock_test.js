import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://${process.env.PLAYGROUND_URL}`;


test('Sidebar Button Test', async t => {
  await t
      .click('#mount-node > div > header > div.ViewSwitchList > div:nth-child(2) > div:nth-child(1) > div > div > button');
});

test('Dependency Button Test', async t => {
  await t
      .click('#mount-node > div > header > div.ViewSwitchList > div:nth-child(1) > div:nth-child(2) > div > div > button');
});

