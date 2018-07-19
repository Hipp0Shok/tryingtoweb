var myImage = document.querySelector('img')
myImage.onclick = function(){
	var myScr = myImage.getAttribute('src')
	if(myScr == 'images/icon.png'){
		myImage.setAttribute('src', 'images/petr.jpg')
	}else {
		myImage.setAttribute('src', 'images/icon.png')
	}
}
var myButton = document.querySelector('button')
var myHeading = document.querySelector('h1')
function setUserName(){
	var myName = prompt('Please enter your name:');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Глеб - это хлеб, ' + myName;
}
if(!localStorage.getItem('name')){
	setUserName;
}else{
	var storedName = localStorage.getItem('name');
	myHeading.innerHTML ='Глеб - это хлеб, ' + storedName;
}
myButton.onclick = function(){
	setUserName()
}