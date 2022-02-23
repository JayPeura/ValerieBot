const Discord = require('discord.js');
const { type } = require('os');


module.exports = {
	commands: 'ping',
	description: 'Basic ping command.',
	execute(message, arguments, text) {
    const timeTaken = Date.now() - message.createdTimestamp;
		message.channel.send(`Pong! That took ${timeTaken}ms.`);
	},
};