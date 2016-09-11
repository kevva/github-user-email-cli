#!/usr/bin/env node
'use strict';
const meow = require('meow');
const githubUserEmail = require('github-user-email');

const cli = meow([
	'Example',
	'  $ github-user-email johndoe',
	'  johndoe@gmail.com'
]);

if (cli.input.length === 0) {
	console.error('User required');
	process.exit(1);
}

githubUserEmail(cli.input[0]).then(email => {
	console.log(email);
});
