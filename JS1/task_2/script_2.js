// Спрашивать цвет/память циклически. До тех пор пока пользователь не введет валидные данные или не нажмет “Отмена“. 

var isCancel = false;
var color;
var memory;
var price;

var color = prompt('Input color: (black/gray/gold)');

if (color == null) {
  isCancel = true;
} else do {
  color = prompt('Try again! Choose another color (black/gray/gold):');
} while (color !== 'black' || color !== 'gray' || color !== 'gold');


if (color !== null){
  memory = prompt('Input memory size (64/128/256): ');
  if (memory == '64') {
    price = 529;
  } else if (memory == '128'){
    price = 579;
  } else if (memory == '256') {
    price = 629;
  } else while (memory !== '64' || memory !== '128' || memory !== '256'){
    memory = prompt('Wrong memory size! Try again. Input memory size (64/128/256): ')
  }
}

if (isCancel) {
  document.write('Bad chose exeption! Try again.')
}

document.write('<h1> Image: <img width="250" src= ' + img + '> </h1>');
document.write('<h2> Color: ' + color + '</h2>');
document.write('<h2>Memory size: ' + memory + ' Gb</h2>');
document.write('<h1>Price: ' + price + '$ </h1>');