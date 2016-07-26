import * as speakeasy from 'speakeasy';
var secret = speakeasy.generateSecret();
// var time = Date.now();
var options = {
	secret: secret.base32,
	encoding: 'base32',
	digits: 4,
	step: 5
	// time: time,
	// epoch: epoch,
	// counter: counter,
	// algorithm: algorithm
}
var token = speakeasy.totp(options);

setInterval(function() {
	var token1 = speakeasy.totp(options);
	console.log('token1 ', token1);
}, 2000);

console.log('token ', token);

// var tokenDelta = speakeasy.totp.verifyDelta({
// 	secret: secret.base32,
// 	encoding: 'base32',
// 	token: '123456',
// 	window: 2,
// 	step: 60
// });