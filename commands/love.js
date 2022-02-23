const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
	commands: 'love',
	description: 'Love between two people <3',
	execute(message, arguments, text) {
		const taggedUser = message.mentions.users.first();
		message.channel.send(`You and ${taggedUser.username} have ${Math.floor(Math.random() * 101)}% love between you!`);
	}
};