const Discord = require('discord.js');


module.exports = {
	commands: 'hug',
	description: 'Hug between two people <3',
	execute(message, arguments, text) {
    const taggedUser = message.mentions.users.first();

    message.channel.send(`${message.author} hugged ${taggedUser.username}.`); 
	}
};
