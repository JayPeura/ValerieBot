module.exports = {
	commands: 'sum',
	description: 'Count the sum of these numbers!',
  expectedArgs: '<num1> <num2>',
  permissionError: 'You need talking privileges to use this command.',
  minArgs: 2,
  maxArgs: 2,
  execute: (message, arguments, text) => {
    const num1 = +arguments[0]
    const num2 = +arguments[1]

    message.channel.send(`I get the sum of ${num1 + num2}`)

  },
  permissions: [],
  requiredRoles: []
};