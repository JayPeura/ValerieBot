const Discord = require('discord.js');

module.exports = {
	commands: 'cute',
	description: 'Tells you how cute you are.',
  execute(message, arguments, text) {

/**
 * Create a text progress bar
 * @param {Number} value - The value to fill the bar
 * @param {Number} maxValue - The max value of the bar
 * @param {Number} size - The bar size (in letters)
 * @return {String} - The bar
 */

        var value = Math.floor(Math.random() * 101)
        var maxValue = "100";
        var size = "10";
        

        global.progressBar = (value, maxValue, size) => {
          const percentage = value / maxValue; // Calculate the percentage of the bar
          const progress = Math.round((size * percentage)); // Calculate the number of square characters to fill the progress side.
          const emptyProgress = size - progress; // Calculate the number of dash characters to fill the empty progress side.

          const progressText = '▰'.repeat(progress); // Just repeats this depending on percentage.
          const emptyProgressText = '▱'.repeat(emptyProgress); // Just repeats this depending on percentage.
          const percentageText = Math.round(percentage * 100) + '%'; // Displaying the percentage of the bar

          const bar = '' + progressText + emptyProgressText + ' ' + percentageText + ' cute'; // Create the progress bar
          return bar;

    }

    var progressbar = progressBar(value, maxValue, size);
    const embed = new Discord.MessageEmbed()
    .setTitle("Cuteness Meter")
    .setDescription(progressbar)
    .setTimestamp()
    .setColor("#ffc0cb")
    message.channel.send(embed);
  },
};