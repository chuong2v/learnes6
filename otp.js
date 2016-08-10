import * as speakeasy from 'speakeasy';
// import secret from './otpkey.js';
var secret = speakeasy.generateSecret();
var options = {
	secret: secret.base32,
	encoding: 'base32',
	digits: 4,
	step:10
		// time: time,
		// epoch: epoch,
		// counter: counter,
		// algorithm: algorithm
}

// var token = speakeasy.totp(options);

// setInterval(function() {
// 	var token1 = speakeasy.totp(options);
// 	console.log('token1 ', token1);
// }, 2000);

// console.log('token ', token);

var generateOTP = function() {
	return speakeasy.totp(options);
}

var verifyOTP = function(code) {
	return speakeasy.totp.verify({
		secret: secret.base32,
		encoding: 'base32',
		token: code,
		step: 10,
		digits: 4
	})
}

module.exports = {
	verifyOTP,
	generateOTP
}

// var tokenDelta = speakeasy.totp.verifyDelta({
// 	secret: secret.base32,
// 	encoding: 'base32',
// 	token: '123456',
// 	window: 2,
// 	step: 60
// });