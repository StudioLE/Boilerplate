import { Selector } from 'testcafe'

fixture `Section`
    .page `http://localhost:8378/projects/`


test('Nav', async t => {
  const nav = await Selector('header nav')
  await t.expect(nav.find('.navbar-brand').count).eql(1, 'contains 1 .navbar-brand')
  await t.expect(nav.find('a').count).eql(3, 'contains 3 anchor')
  await t.expect(nav.find('.nav-link.active').innerText).eql('Projects', 'has correct active section')
})

test('Jumbotron', async t => {
  const jumbotron = await Selector('.jumbotron')
  await t.expect(jumbotron.find('h1').count).eql(1, 'contains 1 h1')
  await t.expect(jumbotron.find('.lead').count).eql(1, 'contains 1 .lead')
  await t.expect(jumbotron.find('p').count).eql(2, 'contains 2 p')
})

test('Cards', async t => {
  const card = await Selector('.card')
  await t.expect(card.count).eql(3, 'contains 3 .card')
  await t.expect(card.nth(0).find('h5').count).eql(1, 'contains 1 h5')
})
