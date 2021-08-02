"use strict";

// Array of colours. --------------------------------------------------------
let colourArray = [ "white", "snow", "honeydew", "mintcream", "azure", "aliceblue", "ghostwhite", "whitesmoke" , "seashell", "beige", "oldlace", "floralwhite", "ivory", "antiquewhite", "linen", "lavenderblush", "mistyrose", "cornsilk", "blanchedalmond", "bisque", "navajowhite", "wheat", "burlywood", "tan", "sandybrown", "goldenrod", "darkgoldenrod", "peru", "chocolate", "saddlebrown", "sienna", "brown", "maroon", "lightsalmon", "salmon", "darksalmon", "lightcoral", "indianred", "crimson", "firebrick", "darkred", "red", "tomato", "coral", "darkorange", "orange", "yellow", "lightyellow", "lemonchiffon", "lightgoldenrodyellow", "papayawhip", "moccasin", "peachpuff", "palegoldenrod", "khaki", "darkkhaki", "gold", "darkolivegreen", "olive", "olivedrab", "yellowgreen", "limegreen", "lime", "lawngreen", "chartreuse", "greenyellow", "springgreen", "mediumspringgreen", "lightgreen", "palegreen", "darkseagreen", "mediumaquamarine", "mediumseagreen", "seagreen", "forestgreen", "green", "darkgreen", "aqua", "cyan", "lightcyan", "paleturquoise", "aquamarine", "turquoise", "mediumturquoise", "darkturquoise", "lightseagreen", "cadetblue", "darkcyan", "teal", "lightsteelblue", "powderblue", "lightblue", "skyblue", "lightskyblue", "deepskyblue", "dodgerblue", "cornflowerblue", "steelblue", "royalblue", "blue", "mediumblue", "darkblue", "navy", "midnightblue", "pink", "lightpink", "hotpink", "deeppink", "palevioletred", "mediumvioletred", "lavender", "thistle", "plum", "violet", "orchid", "fuchsia", "magenta", "mediumorchid", "mediumpurple", "blueviolet", "darkviolet", "darkorchid", "darkmagenta", "purple", "indigo", "darkslateblue", "slateblue", "mediumslateblue", "gainsboro", "lightgray", "silver", "darkgray", "gray", "dimgray", "lightslategray", "slategray", "darkslategray", "black" ];

// Gobal variables. ------------------------------------------
let scrollBoxTop = document.getElementById("scrConTop");
let scrollBoxBottom = document.getElementById("scrConBottom");

let colourBoxTop = document.getElementById("colConTop");
colourBoxTop.style.backgroundColor = "black";
let colourBoxTopText = document.getElementById("colTextTop")
colourBoxTopText.textContent = "Colour: black";
let colourBoxBottom = document.getElementById("colConBottom");
colourBoxBottom.style.backgroundColor = "white";
let colourBoxBottomText = document.getElementById("colTextBottom")
colourBoxBottomText.textContent = "Colour: white";

let resetButtonTop = document.getElementById("resetTop");
let resetButtonBottom = document.getElementById("resetBottom");
// ///////////////////////////////////////////////////////////////

// Iterates through the "colourArray".
// Creates the scroll divs, paragaphs and inner paragraph text.
// Adds a click event listener to each div.
// Adds each div to the scroll container.
function createTopScrollList(array, scrollBox){
  for (let i = array.length-1; i >= 0; i--){
    let div = document.createElement('div');
    div.classList.add("scrollItemDiv");
    div.style.backgroundColor = array[i];

    div.addEventListener("click", getColourTop);

    let paragraph = document.createElement('p');
    paragraph.classList.add("scrollItemPara");
    let paragraphText = document.createTextNode(array[i]);

    paragraph.appendChild(paragraphText);
    div.appendChild(paragraph);
    scrollBox.appendChild(div);
  }
}
createTopScrollList(colourArray, scrollBoxTop);
// -------------------------------------------------------
function createBottomScrollList(array, scrollBox){
  for (let i = 0; i < array.length; i++){
    let div = document.createElement('div');
    div.classList.add("scrollItemDiv");
    div.style.backgroundColor = array[i];

    div.addEventListener("click", getColourBottom);

    let paragraph = document.createElement('p');
    paragraph.classList.add("scrollItemPara");
    let paragraphText = document.createTextNode(array[i]);

    paragraph.appendChild(paragraphText);
    div.appendChild(paragraph);
    scrollBox.appendChild(div);
  }
}
createBottomScrollList(colourArray, scrollBoxBottom);

// Adds colour to the colour boxes and updates the inner text.-------------
function getColourTop(e){
  let divClicked = e.target.textContent;
  colourBoxTop.style.backgroundColor = divClicked;
  colourBoxTopText.textContent = `Colour: ${divClicked}`;
}

function getColourBottom(e){
  let divClicked = e.target.textContent;
  colourBoxBottom.style.backgroundColor = divClicked;
  colourBoxBottomText.textContent = `Colour: ${divClicked}`;
}

// Resets the top / bottom areas. --------------------------------------
resetButtonTop.addEventListener("click", reset);
resetButtonBottom.addEventListener("click", reset);

function reset(e){
  let section = e.target.value;

  if (section == "top"){
    colourBoxTop.style.backgroundColor = "black";
    colourBoxTopText.textContent = "Colour: black";
    scrollBoxTop.scrollTop = 0;
  } else if (section == "bottom"){
    colourBoxBottom.style.backgroundColor = "white";
    colourBoxBottomText.textContent = "Colour: white";
    scrollBoxBottom.scrollTop = 0;
  }
}
