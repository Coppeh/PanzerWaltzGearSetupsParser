/*
import * as views from './views.js';
import { Model } from './model.js';
*/


// Not working. Probably the EventListener
function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
        return;
    }
    console.log(file);
    var reader = new FileReader();

    reader.onload = function(e) {
      var contents = e.target.result;
      displayContents(contents);
    };

    reader.readAsText(file);
}
  
function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.textContent = contents;
}

document.getElementById('file-input').addEventListener('load', readSingleFile, false);

// window.onload = function() {
//     console.log("onLoad");
//     showLoading();
// }
/*
function showLoading() { //Simple feedback to let users know the page is loading
    var text = "Please wait.";
    document.getElementById("target1").innerHTML = text;
}

window.onhashchange = function() {
    console.log("hashChanged");
    redraw();
}

function redraw() { //Updates the page
    console.log("redrawing");
    showLoading();

    let hash = split_hash(window.location.hash);

    if (hash.path === "") { //Home Page

    }
}
*/