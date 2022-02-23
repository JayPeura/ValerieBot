const Discord = require('discord.js');

module.exports = {
	commands: 'purge',
	description: 'Purges the given amount of messages.',
	execute(message, arguments, text) {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            const deleteCount = parseInt(arguments[0], 10);
            const deleteMessage = `Deleted ${deleteCount} messages.`;

            if (!deleteCount || deleteCount > 100 || deleteCount < 2) return message.channel.send("Please give me a number of messages to be deleted. (Max. 100 || Min. 2)");

            message.channel.bulkDelete(deleteCount)
            .catch(err => console.log(`Cannot delete messages because of ${err}`))
            .then(message.reply(deleteMessage));
            
        }
        else {
            message.reply('You do not have the permission to do that.')
        }
	},
};