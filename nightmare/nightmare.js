'use strict';

const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://duckduckgo.com')
  .type('#search_form_input_homepage', 'john cokos github')
  .click('#search_button_homepage')
  .wait('#r1-0 a.result__a')
  .click('a.result__a')
  .wait('.pinned-repo-item-content')
  .evaluate(() => document.querySelector('.d-block').href)
  .end()
  .then(results => console.log(results))
  .catch(error => {
    console.error('Search failed:', error)
  })
