import * as chai from 'chai';
const assert = chai.assert;
import { appendMathText } from '../../src/client/main';

describe('Home page', function() {
  it('has some text', function() {
    // set up DOMContentLoaded event listener
    appendMathText();

    // trigger DOMContentLoaded event
    const DOMContentLoadedEvent = document.createEvent('Event');
    DOMContentLoadedEvent.initEvent('DOMContentLoaded', true, true);
    window.document.dispatchEvent(DOMContentLoadedEvent);

    const paragraphs = document.getElementsByTagName('p');
    assert.isAbove(paragraphs.length, 0, 'text is on the page');
  });
});
