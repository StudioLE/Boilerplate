import { Selector } from 'testcafe'

fixture `Single`
    .page `http://localhost:8378/projects/lorem-ipsum/`


test('Nav', async t => {
  const nav = await Selector('header nav')
  await t.expect(nav.find('.navbar-brand').count).eql(1, 'contains 1 .navbar-brand')
  await t.expect(nav.find('a').count).eql(3, 'contains 3 anchor')
})

test('main', async t => {
  const main = await Selector('main')
  await t.expect(main.find('h1').count).eql(1, 'contains 1 h1')
  await t.expect(main.find('p').count).eql(2, 'contains 2 p')
})
