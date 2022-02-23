const Discord = require('discord.js');

module.exports = {
	commands: 'pathetic',
	description: 'The bot will tell you how pathetic you are.',
	execute(message, arguments, text) {
		let replies = ["A little pathetic.", "Kinda pathetic.", "You are not ready for the answer...", "Extremely pathetic. Shame.", "Not pathetic at all <3", "Would not dream of calling you pathetic!", "I have some bad news for you.", "Quite pathetic.", "There are no words to describe just how pathetic you are."];
		message.channel.send(replies[Math.floor(Math.random() * replies.length)])
	},
};