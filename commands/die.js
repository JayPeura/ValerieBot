module.exports = {
	commands: 'die',
	description: 'Kill the bot process',
  execute(message) {
    if(message.author.id === "889281211875332147") {
      process.exit();
    } else {
      message.channel.send("Nevermind, not for you.");
    }
  }
}