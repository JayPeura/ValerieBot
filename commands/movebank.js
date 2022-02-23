const Discord = require('discord.js');
const Database = require("@replit/database");
const db = new Database();

module.exports = {
	commands: 'movebank',
	description: 'Move currency to your bank',
  async execute(message, arguments, text) {
      let currency = "€";

      let amount = parseInt(arguments[0], 10);
      let bankBalance = await db.get(`bank_${message.author.id}`);
   	  let currentBalance = await db.get(`wallet_${message.author.id}`);
      if(bankBalance === null) targetBalance = 0;
      if(currentBalance === null) currentBalance = 0;

      if(amount > currentBalance) return message.channel.send("You don't have enough money!");
    
      await db.set(`wallet_${message.author.id}`, currentBalance - amount);
      await db.set(`bank_${message.author.id}`, bankBalance + amount);
  
      message.channel.send(`Moved ${amount.toLocaleString()}${currency} to your bank.`);
  }
}