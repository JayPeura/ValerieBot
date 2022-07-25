const Discord = require('discord.js');

module.exports = {
	commands: 'cute',
	description: 'Tells you how cute you are.',
  execute(message) {

        let value = Math.floor(Math.random() * 101)
        let maxValue = "100";
        let size = "10";
        

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

    let progressbar = progressBar(value, maxValue, size);
    const embed = new Discord.MessageEmbed()
    .setTitle("Cuteness Meter")
    .setDescription(progressbar)
    .setTimestamp()
    .setColor("#ffc0cb")
    message.channel.send(embed);
  },
};