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

function myFunction()
{
  for(let i = 0; i < 62; i++) {
    let div = document.createElement('div');
    Object.assign(div.style, {paddingBottom:"11.1%", width:'11.1%', backgroundColor:getRandomColor(), display:'block', float:"left"});
    body.appendChild(div);
  }

  setInterval(function()
  {
    let divs = body.children;
    for(div of divs) {
      Object.assign(
        div.style,
        {paddingBottom:"11.1%", width:'11.1%', backgroundColor:getRandomColor(), display:'block', float:"left"}
      );
    }
  }, 2000);
}

myFunction();
