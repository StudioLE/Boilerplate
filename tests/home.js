import { Selector } from 'testcafe'

fixture `Home`
    .page `http://localhost:8378`


test('Nav', async t => {
  const nav = await Selector('header nav')
  await t.expect(nav.find('.navbar-brand').count).eql(1, 'contains 1 .navbar-brand')
  await t.expect(nav.find('a').count).eql(3, 'contains 3 anchor')
})

test('Jumbotron', async t => {
  const jumbotron = await Selector('.jumbotron')
  await t.expect(jumbotron.find('h1').count).eql(1, 'contains 1 h1')
  await t.expect(jumbotron.find('.lead').count).eql(1, 'contains 1 .lead')
  await t.expect(jumbotron.find('p').count).eql(2, 'contains 2 p')
})
