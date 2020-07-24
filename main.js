var counter = function() {
var count = 0;
return function(){
	return count++;
}
}();

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());