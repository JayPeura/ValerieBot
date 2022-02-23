const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");


module.exports = {
	commands: 'musichelp',
	description: 'Lists all music commands useable by the public.',
  execute(message, arguments, text) {
    const members = new MessageEmbed()
        .setTitle('MUSIC COMMANDS')
        .addField('**.p**', 'Include a youtube link or just search. Please use music channel.')
        .addField('**.skip**', 'Skips  the current song.')
        .addField('**.stop**', 'Stops the entire queue and leaves the voice channel.')
        .addField('**.3d, bassboost, echo, karaoke, nightcore, vaporwave**', 'Apply filters to the songs.')
        .setDescription(`If there is anything you want to be added or you have questions, poke FelineJay. 
        We welcome suggestions as we are without imagination or something...`)

       .setTimestamp()
    
    message.channel.send(members);
	},
};