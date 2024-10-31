// Your code here.
function range(start, end, step) {
	let set = [];
	step = typeof step !== "undefined" ? step : 1
    if (step < 0) {
		do {
			set.push(start);
			start = start + step;
		}   while (start >= end);
	} else {
		do {
			set.push(start);
			start = start + step;
		}   while (start <= end);
	}
	return set;
}

function sum(array) {
	let add = 0;
	for (let i = 0; i < array.length; i++) {
		add = add + array[i];
	}
	return add;
}

console.log(range(1, 10));

console.log(range(5, 2, -1));

console.log(sum(range(1, 100)));
