import _ from "lodash";

var a = {
	a: 1
};
var b = {
	b: 2
};
console.log("lodash.assign",_.assign(a, b));


let myIterable = {};
myIterable[Symbol.Iterator] = function*() {
	yield 1;
	yield 2;
	yield 3;
};
console.log([...myIterable]);

// let array = [1, 3, 4];
// let arr = array[Symbol.iterator]();
// console.log(arr.next().value);
// console.log(arr.next().value);
// console.log(arr.next().value);
// console.log(arr.next().value);