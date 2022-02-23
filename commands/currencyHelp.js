const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");


module.exports = {
	commands: 'currencyhelp',
	description: 'Lists all currency commands useable.',
  execute(message, arguments, text) {
    const members = new MessageEmbed()
        .setTitle('CURRENCY COMMANDS')
        .addField('**.currencyhelp**', 'Shows this message.')
        .addField('**.bal (<target>)**', 'Shows your bank and wallet balance. Target is optional!!')
        .addField('**.addbal <amount>**', 'Add balance to your wallet **(ADMIN ONLY)**')
        .addField('**.bank <amount>**', 'Add balance to your bank **(ADMIN ONLY)**')
        .addField('**.movebank <amount>**', 'Move currency  from your wallet to your bank')
        .addField('**.movewallet <amount>**', 'Move currency from your bank to your wallet')
        .addField('**.delbank <amount>**', 'Delete currency from bank')
        .addField('**.delwallet <amount>**', 'Delete currency from your wallet') 
        .addField('**.pay <amount> <target>**', 'Move money to your friend! Remember to mention them and the amount!')
        .setDescription(`If there is anything you want to be added or you have questions, poke FelineJay. 
        We welcome suggestions as we are without imagination or something...`)

       .setTimestamp()
    
    message.channel.send(members);
	},
};