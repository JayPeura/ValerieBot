const Discord = require('discord.js');
const Database = require("@replit/database");
const db = new Database();

module.exports = {
	commands: 'pay',
	description: 'Give someone money to their wallet',
  async execute(message, args, text) {
    if (!message.mentions.users.first()) return message.channel.send("Please mention a user.");
      let currency = "€";
      let taggedUser = message.mentions.users.first(),
      amount = parseInt(args.join(' ').replace(taggedUser, ''));

      if(isNaN(amount)) return message.channel.send(`Please give me an amount.`);
   	  let currentBalance = await db.get(`wallet_${message.author.id}`);
   	  let targetBalance = await db.get(`wallet_${taggedUser.id}`);

      if(targetBalance === null) targetBalance = 0;
      if(currentBalance === null) currentBalance = 0;

      if(amount > currentBalance) return message.channel.send("You don't have enough money!");

      await db.set(`wallet_${message.author.id}`, currentBalance - amount);
      await db.set(`wallet_${taggedUser.id}`, targetBalance + amount);
      message.channel.send(`Gave ${amount.toLocaleString()}${currency} to ${taggedUser.username}`);
    
  }
}