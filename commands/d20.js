module.exports = {
	commands: 'd20',
	description: 'Roll the dice, D20 style',
	execute(message, arguments, text) {
    const roll = Math.floor(Math.random() * 21)

    message.reply(roll);
  }
};