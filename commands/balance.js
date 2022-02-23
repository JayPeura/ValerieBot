const Discord = require('discord.js');
const Database = require("@replit/database");
const db = new Database();

module.exports = {
	commands: 'bal',
	description: 'Show current balance',
	async execute(message, arguments, text) {
    let currency = "€";

    let user = message.mentions.users.first() || message.author;

    let balance = await db.get(`wallet_${user.id}`)
    let bank = await db.get(`bank_${user.id}`)

    if(balance === null) balance = 0;
    if(bank === null) bank = 0;
    let moneyEmbed = new Discord.MessageEmbed().setTitle(`${user.username}'s balance`)
    .setDescription(`Wallet: ${balance}${currency}\nBank: ${bank}${currency}`)
    .setColor("RANDOM")
    .setThumbnail(user.displayAvatarURL({dynamic: true}));
    message.channel.send(moneyEmbed);
    }
	};