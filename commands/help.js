const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");


module.exports = {
	commands: 'help',
	description: 'Lists all commands useable by the public.',
  execute(message, arguments, text) {
    const members = new MessageEmbed()
        .setTitle('GENERAL COMMANDS')
        .addField('**.help**', 'Shows this message.')
        .addField('**.musichelp**', 'Shows music help message.')
        .addField('**.currencyhelp**', 'Shows help message for currency commands')
        .addField('**.say <arguments>**', 'Make the bot say something.')
        .addField('**.ping**', 'Pong!')
        .addField('**.cute**', 'Shows your cuteness %! UwU')
        .addField('**.server**', 'Info about the current server and member count.')
        .addField('**.hug**', 'Tag the user you want to hug <3')
        .addField('**.sum**', 'She can count! ') 
        .addField('**.gif**', 'Search for a gif.')
        .addField('**.8ball <question>**', 'Ask a magic 8-ball a question. Remember to include your question!')
        .addField('**.pathetic**', 'The bot now tells you how pathetic you are.')
        .addField('**.catfact**', 'Get your random cat fact!')
        .setDescription(`If there is anything you want to be added or you have questions, poke FelineJay. 
        We welcome suggestions as we are without imagination or something...`)

       .setTimestamp()
    
    message.channel.send(members);
	},
};