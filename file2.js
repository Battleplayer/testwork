var ins = $('#in');
var node = document.getElementsByTagName('div')[0];
ins.keyup(function (e) {
		ins.html(ins.html().replace(/але/g, '<span class="red">але</span>'));
		ins.html(ins.html().replace(/або/g, '<span class="blue">або</span>'));

		ins.html(ins.html().replace(/(.+?)\b(але або)\b /gm, '<span class="green">але або</span>'));
		ins.html(ins.html().replace(/\s\bабо\b\sале\b/gm, '<span class="brown">або але</span>'));

		placeCaretAtEnd(node);
	
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