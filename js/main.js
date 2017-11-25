var list = document.getElementById('js-list');
var addBtn = document.querySelector('#js-addBtn');
var removeBtn = document.querySelector('#js-removeBtn');
var resetBtn = document.querySelector('#js-resetBtn');
var removeAnyBtn = document.querySelector('#js-list');

var items = {
	collection: [],
	index: 0,
	add: function () {
		this.collection.push("Item " + (++this.index));

		render();
	},
	remove: function () {
		this.collection.shift();

		render();
	},
	reset: function () {
		this.collection.length = 0;

		render();

		this.index = 0;
	},
	removeAnyBtn: function (e) {
		var elementToRemove = e.target.textContent;

		var indexElementToRemove = this.collection.indexOf(elementToRemove);

		this.collection.splice(indexElementToRemove, 1);

		render();
	}
};

function render() {
	while (list.hasChildNodes()) {
		list.removeChild(list.lastChild);
	}

	var fragment = document.createDocumentFragment();

	for (var i = 0; i < items.collection.length; i++) {
		var newElementList = document.createElement('li');
		newElementList.innerHTML = items.collection[i];
		fragment.appendChild(newElementList);
	}

	list.appendChild(fragment);
}

addBtn.addEventListener('click', items.add.bind(items));

removeBtn.addEventListener('click', items.remove.bind(items));

removeAnyBtn.addEventListener('click', items.removeAnyBtn.bind(items));

resetBtn.addEventListener('click', items.reset.bind(items));
