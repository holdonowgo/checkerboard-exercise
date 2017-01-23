// Your JS goes here
var body = document.querySelector('body');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function myFunction() {
  for(let i = 0; i < 63; i++) {
    if(i % 2 === 0) {
      let divBlack = document.createElement('div');
      Object.assign(divBlack.style, {paddingBottom:"11.1%", width:'11.1%', backgroundColor:getRandomColor(), display:'block', float:"left"});
      body.appendChild(divBlack);
    } else {
      let divRed = document.createElement('div');
      Object.assign(divRed.style, {paddingBottom:"11.1%", width:'11.1%', backgroundColor:getRandomColor(), display:'block', float:"left"});
      body.appendChild(divRed);
    }
  }
}

myFunction();
