module.exports = {
	commands: 'd20',
	description: 'Roll the dice, D20 style',
	execute(message) {
    const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const roll = randomInt(1, 20);
    message.reply(roll);
  }
};