const math = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  }
};

// Edit DOM
const editDOM = {
  appendText: function (text) {
    const element = document.createElement('p');
    element.innerHTML = text;
    document.body.appendChild(element);
  }
};

window.addEventListener('DOMContentLoaded', function () {
  editDOM.appendText('10 + 5 = ' + math.add(10, 5));
  editDOM.appendText('3 - 10 = ' + math.subtract(3, 10));
});
