var contentDiv = document.getElementById('content');
// model
let textInput;
let textOutput = ' ';
let firstLetter;
let lastLetter;
let lastletterNR;
//view
show()
function show() {
    contentDiv.innerHTML = `
    <div class:"upperText">Write anything</div>
    <input type="text" oninput="textInput = this.value">
    <div id="fixedText">${textOutput}</div>
    <button onclick="fixtext()">fix tekst</button>
    <button>
    <a href src="https://joakimha.github.io/uke4/formateringtest.html">unitTest</a>
    </button>
    `
    
}
//controller
function fixtext() {
    const textstring = textInput;
    firstLetter = textstring.charAt(0);
    lastLetter = textstring.charAt(textstring.length - 1);
    lastletterNR = textstring.length - 1;
    if (firstLetter == ' ') {
      textInput = textstring.slice(1);
      //console.log(textstring);
     // fixtext()
     fixtext()
    }
    if (lastLetter == ' '){
      textInput = textstring.slice(0, -1);
      fixtext()
    }
    const Nospace = textInput
    const Fixed = Nospace.charAt(0).toUpperCase() + Nospace.slice(1);
    //console.log(Fixed);
    textOutput = Fixed;
    console.log(textOutput);
    
    // console.log(Fixed);

  //  if (textstring.charAt(0) != ) {
    //    textstring.splice(0, 1);
    // }
    show()
}
