const div = document.createElement('div');
const link = document.createElement('div');
link.setAttribute('id', 'link');
div.setAttribute('id', 'keyboard');
document.body.append(link);
document.body.append(div);

const keyboardKeys = [['Backquote', '`'], ['Digit1', '1'], ['Digit2', '2'], ['Digit3', '3'], ['Digit4', '4'], ['Digit5', '5'], ['Digit6', '6'], ['Digit7', '7'], ['Digit8', '8'], ['Digit9', '9'], ['Digit0', '0'], ['Equal', '='], ['Backspace', 'Backspace'], ['Tab', 'Tab'], ['KeyQ', 'Q'], ['KeyW', 'W'], ['KeyE', 'E'], ['KeyR', 'R'], ['KeyT', 'T'], ['KeyY', 'Y'], ['KeyU', 'U'], ['KeyI', 'I'], ['KeyO', 'O'], ['KeyP', 'P'], ['BracketLeft', '['], ['BracketRight', ']'], ['Backslash', '&#92;'], ['CapsLock', 'Caps Lock'], ['KeyA', 'A'], ['KeyS', 'S'], ['KeyD', 'D'], ['KeyF', 'F'], ['KeyG', 'G'], ['KeyH', 'H'], ['KeyJ', 'J'], ['KeyK', 'K'], ['KeyL', 'L'], ['Semicolon', ';'], ['Quote', "'"], ['Enter', 'Enter'], ['ShiftLeft', 'Shift'], ['Backslash', '&#92;'], ['KeyZ', 'Z'], ['KeyX', 'X'], ['KeyC', 'C'], ['KeyV', 'V'], ['KeyB', 'B'], ['KeyN', 'N'], ['KeyM', 'M'], ['Comma', ','], ['Period', '.'], ['Slash', '/'], ['ArrowUp', ''], ['ShiftRight', 'Shift'], ['ControlLeft', 'Ctrl'], ['Meta', 'Win'], ['Space', ''], ['AltLeft', 'Alt'], ['ControlRight', 'Ctrl'], ['ArrowLeft', ''], ['ArrowDown', ''], ['ArrowRight', '']];
// document.addEventListener('keypress', function(event){
//     keyboard.push(event.key);
//     console.log(keyboard);
// })
function ini() {
  let out = '';
  for (let i = 0; i < keyboardKeys.length; i++) {
    if (keyboardKeys[i][0] === 'Backquote') {
      out += `<div class="k-key specials" ><div class="margin"  data="${keyboardKeys[i][0]}">${keyboardKeys[i][1]}</div></div>`;
    } else if (keyboardKeys[i][0] === 'ControlLeft') {
      out += `<div class="k-key specials ctrl" ><div class="margin"  data="${keyboardKeys[i][0]}">${keyboardKeys[i][1]}</div></div>`;
    } else if (keyboardKeys[i][0] === 'Meta') {
      out += `<div class="k-key specials meta" ><div class="margin"  data="${keyboardKeys[i][0]}">${keyboardKeys[i][1]}</div></div>`;
    } else if (keyboardKeys[i][0] === 'AltLeft') {
      out += `<div class="k-key specials alt" ><div class="margin"  data="${keyboardKeys[i][0]}">${keyboardKeys[i][1]}</div></div>`;
    } else if (keyboardKeys[i][0] === 'Space') {
      out += `<div class="k-key space" ><div class="margin"  data="${keyboardKeys[i][0]}">${keyboardKeys[i][1]}</div></div>`;
    } else if (keyboardKeys[i][0] === 'ControlRight') {
      out += `<div class="k-key specials ctrl" ><div class="margin"  data="${keyboardKeys[i][0]}">${keyboardKeys[i][1]}</div></div>`;
    } else if (keyboardKeys[i][0] === 'ArrowLeft') {
      out += `<div class="k-key specials " ><div class="margin"  data="${keyboardKeys[i][0]}">←</div></div>`;
    } else if (keyboardKeys[i][0] === 'ArrowDown') {
      out += `<div class="k-key specials " ><div class="margin"  data="${keyboardKeys[i][0]}">↓</div></div>`;
    } else if (keyboardKeys[i][0] === 'ArrowRight') {
      out += `<div class="k-key specials " ><div class="margin"  data="${keyboardKeys[i][0]}">→</div></div>`;
    } else if (keyboardKeys[i][0] === 'ArrowUp') {
      out += `<div class="k-key specials arrow" ><div class="margin"  data="${keyboardKeys[i][0]}">↑</div></div>`;
    } else if (keyboardKeys[i][0] === 'Backspace') {
      out += `<div class="k-key specials backspace" ><div class="margin"  data="${keyboardKeys[i][0]}">${keyboardKeys[i][1]}</div></div>`;
    } else if (keyboardKeys[i][0] === 'ShiftRight') {
      out += `<div class="k-key specials" ><div class="margin"  data="${keyboardKeys[i][0]}">${keyboardKeys[i][1]}</div></div>`;
    } else if (keyboardKeys[i][0] === 'Tab') {
      out += `<div class="k-key specials tab" ><div class="margin"  data="${keyboardKeys[i][0]}">${keyboardKeys[i][1]}</div></div>`;
    } else if (keyboardKeys[i][0] === 'NumpadDecimal') {
      out += `<div class="k-key specials del" ><div class="margin"  data="${keyboardKeys[i][0]}">${keyboardKeys[i][1]}</div></div>`;
    } else if (keyboardKeys[i][0] === 'CapsLock') {
      out += `<div class="k-key specials caps" ><div class="margin"  data="${keyboardKeys[i][0]}">${keyboardKeys[i][1]}</div></div>`;
    } else if (keyboardKeys[i][0] === 'Enter') {
      out += `<div class="k-key specials enter" ><div class="margin"  data="${keyboardKeys[i][0]}">${keyboardKeys[i][1]}</div></div>`;
    } else if (keyboardKeys[i][0] === 'ShiftLeft') {
      out += `<div class="k-key specials caps" ><div class="margin"  data="${keyboardKeys[i][0]}">${keyboardKeys[i][1]}</div></div>`;
    } else {
      out += `<div class="k-key" ><div class="margin" data="${keyboardKeys[i][0]}">${keyboardKeys[i][1]}</div></div>`;
    }
  }
  document.querySelector('#keyboard').innerHTML = out;
}
ini();
document.addEventListener('keypress', (event) => {
  // keyboard.push(event.key);
  // console.log(keyboard);
  document.querySelectorAll('#keyboard .margin').forEach((element) => {
    element.classList.remove('active');
  });
  document.querySelector(`#keyboard .margin[data="${event.code}"]`).classList.add('active');
});

document.addEventListener('click', () => {
  document.querySelectorAll('#keyboard .margin').forEach((element) => {
    element.classList.remove('active');
  });
  this.classList.add('active');
});
function pullLink() {
  document.querySelector('#link').innerHTML = '<a href="https://github.com/Ilka228/virtual-keyboard/pull/1">Прошу прощения, я по невнимательности засабмитил ссылку на gh-pages, вот ссылка на pull request</a>';
}
pullLink();
