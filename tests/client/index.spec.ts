import * as chai from 'chai';
const assert = chai.assert;

describe('Home page', function () {
  it('has some text', function () {
    const paragraphs = document.getElementsByTagName('p');
    assert.isAbove(paragraphs.length, 0, 'text is on the page');
  });
});
