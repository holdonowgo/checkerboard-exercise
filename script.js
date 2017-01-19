// Your JS goes here
var body = document.querySelector('body');
// var divRed = document.createElement('div');
// var divBlack = document.createElement('div');

// div.setAttribute('style', 'padding:11.1%');, 'width:11.1%, background-color:red, float:left');
// Object.assign(divRed.style, {padding:"11.1%", width:'11.1', backgroundColor:"red", float:"left"});
// Object.assign(divBlack.style, {padding:"11.1%", width:'11.1', backgroundColor:"black", float:"left"});
// var gridDiv = document.createElement('div');
// Object.assign(gridDiv.style, {
for(let i = 0; i < 63; i++) {
  if(i % 2 === 0) {
    let divBlack = document.createElement('div');
    Object.assign(divBlack.style, {paddingBottom:"11.1%", width:'11.1%', backgroundColor:"black", display:'block', float:"left"});
    body.appendChild(divBlack);
  } else {
    let divRed = document.createElement('div');
    Object.assign(divRed.style, {paddingBottom:"11.1%", width:'11.1%', backgroundColor:"red", display:'block', float:"left"});
    body.appendChild(divRed);
  }
}
