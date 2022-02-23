const Discord = require('discord.js');
const Database = require("@replit/database");
const db = new Database();

module.exports = {
	commands: 'delwallet',
	description: 'Delete some balance from wallet',
  async execute(message, arguments, text) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
    let currency = "€";

    let addAmount = parseInt(arguments[0], 10);
    let currentBalance = await db.get(`wallet_${message.author.id}`);
    message.channel.send(`Removed ${addAmount.toLocaleString()}${currency} from your wallet.`);
    await db.set(`wallet_${message.author.id}`, currentBalance - addAmount);
    } else {
      message.channel.send("You don't have the required rights for that.");
    }
  }
}