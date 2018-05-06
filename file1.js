(function () {


	fetch('https://api.myjson.com/bins/11nzl6').then(function (res) {
		return res.json();
	}).then(alarms);

	var null_found = 0;

	function find(obj) {
		for (var key in obj) {
			if (obj[key] instanceof Array) {
				null_found += 1;
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

})();
