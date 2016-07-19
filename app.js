import _ from "lodash";

var a = {
	a: 1
};
var b = {
	b: 2
};
console.log("lodash.assign", _.assign(a, b));


let myIterable = {};
myIterable[Symbol.Iterator] = function*() {
	yield 1;
	yield 2;
	yield 3;
};
var iterator = myIterable[Symbol.Iterator]();
console.log('iterator.next().value ', iterator.next().value);
console.log('iterator.next().value ', iterator.next().value);
console.log('iterator.next().value ', iterator.next().value);
console.log('iterator.next().value ', iterator.next().value);
console.log('iterator.next().value ', iterator.next().value);

let array = [1, 2, 3];
// let arr = array[Symbol.iterator]();
let arr = array.values();
console.log(arr.next());
console.log(arr.next());
console.log(arr.next());
console.log(arr.next());
console.log(arr.next());