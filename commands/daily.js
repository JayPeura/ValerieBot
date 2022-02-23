const Discord = require('discord.js');
const Database = require("@replit/database");
const db = new Database();

module.exports = {
	commands: 'daily',
	description: 'Add daily moneys',
	async execute(message, arguments, text) {
    let currency = "€";
    
    const check = await db.get(`dailyCheck_${message.author.id}`);
    const timeout = 86400000;
    if(check !== null && timeout - (Date.now() - check) > 0) {
      const ms = require("pretty-ms");
      const timeLeft = ms(timeout - (Date.now() - check))
      message.channel.send(`You have already claimed your daily prize! Come back after ${timeLeft}`)
    } else {
      let reward = 150;
      let currentBalance = await db.get(`wallet_${message.author.id}`)
      message.channel.send(`Nice! You claimed ${reward.toLocaleString()}${currency} as your daily reward! Come back tomorrow for more rewards!`);
      await db.set(`wallet_${message.author.id}`, currentBalance + reward)
      await db.set(`dailyCheck_${message.author.id}`, Date.now())
    }
  }
};