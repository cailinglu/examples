const math = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  }
};

const editDOM = {
  appendText: function (text) {
    const element = document.createElement('p');
    element.innerHTML = text;
    document.body.appendChild(element);
  }
};

export function appendMathText () {
  window.addEventListener('DOMContentLoaded', function () {
    // UNCOMMENT to see coverage percentages change
    // editDOM.appendText('10 + 5 = ' + math.add(10, 5));
    editDOM.appendText('3 - 10 = ' + math.subtract(3, 10));
  });
}
