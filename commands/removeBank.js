const Discord = require('discord.js');
const Database = require("@replit/database");
const db = new Database();

module.exports = {
	commands: 'delbank',
	description: 'Delete some bank balance',
  async execute(message, arguments, text) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
    let currency = "€";

    let addAmount = parseInt(arguments[0], 10);
    let currentBalance = await db.get(`bank_${message.author.id}`);
    message.channel.send(`Removed ${addAmount.toLocaleString()}${currency} from your bank.`);
    await db.set(`bank_${message.author.id}`, currentBalance - addAmount);
    } else {
      message.channel.send("You don't have the required rights for that.");
    }
  }
}