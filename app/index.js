import * as math from './mathematics';
import * as editDOM from './editDOM';

window.addEventListener('DOMContentLoaded', () => {
  editDOM.appendText('10 + 5 = ' + math.add(10, 5));
  editDOM.appendText('3 - 10 = ' + math.subtract(3, 10));
});
