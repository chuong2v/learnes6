import * as speakeasy from 'speakeasy';
var secret = speakeasy.generateSecret();
module.exports = secret;

var myFunction = function(a, b) {
	return a + b;
}