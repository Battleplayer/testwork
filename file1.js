(function () {

	fetch('https://api.myjson.com/bins/nfr02').then(function (res) {
		return res.json();
	}).then(alarms);

	var null_found = 0;

	function find(obj) {
		for (var key in obj) {
			if (obj[key] instanceof Array) {
				null_found += count_n(obj[key]);
			}
			else if (obj[key] === null) {
				obj[key] = 'null'
			}
			else if (obj[key] instanceof Object) {
				find(obj[key]);
			}
		}
	}

	function alarms(data) {
		data.wigdets.forEach(function (item) {
			find(item);
		});
		console.log(JSON.stringify(data, null, '\t'));
		console.log('nulls:', null_found);
	}

	function count_n(arr) {
		return arr.reduce(function (count, item) {
			return item === null ? ++count : count;
		}, 0);
	}

})
();