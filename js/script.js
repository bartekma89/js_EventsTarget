var list = document.getElementById('js-list');
var addBtn = document.querySelector('#js-addBtn');
var removeBtn = document.querySelector('#js-removeBtn');
var resetBtn = document.querySelector('#js-resetBtn');

var collection = [];

addBtn.addEventListener('click', function () {
	
	
	var listLength = document.getElementsByTagName('li').length;
	var newElementList = document.createElement('li');
	var currentNumberItem = null;

	if (listLength >= 1) {
		currentNumberItem = document.getElementsByTagName('li')[document.getElementsByTagName('li').length - 1].textContent.replace('Item ', '');
	}
	if (listLength >= 1 && listLength != currentNumberItem) {
		addElement(Number(currentNumberItem));
	} else {
		addElement(listLength);
	}

	function addElement(numberItem) {
		newElementList.innerHTML = "Item " + (++numberItem);
		list.appendChild(newElementList);
	};

}, false);

removeBtn.addEventListener('click', function () {
	var listLength = document.getElementsByTagName('li').length;
	if (listLength === 0) {
		removeBtn.removeEventListener('click', removeElement);
	} else {
		removeElement();
	}

	function removeElement() {
		var elementToRemove = document.getElementsByTagName('li')[0];
		elementToRemove.parentNode.removeChild(elementToRemove);
	}

}, false);

resetBtn.addEventListener('click', function () {
	var listLength = document.getElementsByTagName('li').length;
	var elementToRemove = document.querySelectorAll('li');

	if (listLength === 0) {
		resetBtn.removeEventListener('click', resetElements);
	} else {
		resetElements();
	}

	function resetElements() {
		for (var elementNumber = 0; elementNumber < listLength; elementNumber++) {
			elementToRemove[elementNumber].parentNode.removeChild(elementToRemove[elementNumber]);
		}
	}

}, false);