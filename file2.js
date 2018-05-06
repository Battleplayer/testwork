var ins = $('#in');
var node= document.getElementsByTagName('div')[0];
ins.keyup(function (e) {
	var words = new RegExp('red|green|blue');
	if (words.test(ins.html())) {
		ins.html(ins.html().replace(/red/, '<span class="red">red</span>'));
		ins.html(ins.html().replace(/blue/, '<span class="blue">blue</span>'));
		ins.html(ins.html().replace(/green/, '<span class="green">green</span>'));
		ins.html(ins.html().replace(/blue red/, '<span class="orange">blue red</span>'));

		// placeCaretAtEnd(ins);
		placeCaretAtEnd(node);
	}
});


function placeCaretAtEnd(el) {
	var range,selection;
	if(document.createRange)
	{
		el.focus();
		range = document.createRange();
		range.selectNodeContents(el);
		range.collapse(false);
		selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
	}
}