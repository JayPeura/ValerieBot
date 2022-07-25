const Discord = require("discord.js");
module.exports = {
  commands: "say",
  description: "Make the bot say stuff",
  execute(message) {
  message.channel.startTyping();

  message.delete({ timeout:500 })
  setTimeout(() => {
    if (message.author.bot) return;
    const sayMessage = message.content.slice(5).trim();
    message.channel.send(sayMessage);
     }, 1000)
     message.channel.stopTyping();
  }
}