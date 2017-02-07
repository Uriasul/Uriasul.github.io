var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Automotive.jpg') {
      myImage.setAttribute ('src','images/automotive2.jpg');
    } else {
      myImage.setAttribute ('src','images/Automotive.jpg');
    }
}

function setUserName() {
    var myName = prompt('Enter ypur f.cking name!');
    localStorage.setItem('name , myName');
    myHeading.textContent = 'Automotive , ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Automotive , ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');