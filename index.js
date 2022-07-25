const Discord = require('discord.js');
const client = new Discord.Client();
client.setMaxListeners(25);
client.commands = new Discord.Collection();
const DisTube = require('distube');
const distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const mySecret = process.env['TOKEN']
const keepAlive = require("./server");
const prefix = ".";

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.commands, command);
}

client.on('ready', () => {
    console.log("Logged in as " + client.user.tag + "!")
    console.log('--------')
    console.log('Ready to act!')
    client.user.setActivity("with your feelings.");
    client.channels.cache.get('902108740122185788').send("Back online.")
  .then(msg => {
    msg.delete({ timeout: 5000 })
  })
  .catch();
})

client.login(mySecret);


// command handler
client.on("message", message => {
  if(!message.content.startsWith(prefix) || message.author.id === "902104659437707314") return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if(!client.commands.has(commandName)) return;
  const command = client.commands.get(commandName);
  try{
    command.execute(message, args);
  } catch(error) {
    console.log(error);
    message.reply(`There was an error: ` + error);
  }
})

// ====================== //
// *=*=* MUSIC  BOT *=*=* //
// ====================== //
client.on("message", (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift();

    if (command == "p") {
        if(!message.member.voice.channel) return message.channel.send("You are not in a voice channel.")
        if(!args[0]) return message.channel.send("You must state something for me to play.");
        distube.play(message, args.join(" "));
    }

    if (["repeat", "loop"].includes(command)) {
        distube.setRepeatMode(message, parseInt(args[0]));
    }

    if (command == "stop") {
        if(!message.member.voice.channel) return message.channel.send("You are not in a voice channel.")
        distube.stop(message);
        message.channel.send("Stopped the music!");
    }

    if (command == "skip")
        distube.skip(message);

    if (command == "queue") {
        let queue = distube.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }

    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
        let filter = distube.setFilter(message, command);
        message.channel.send("Current queue filter: " + (filter || "Off"));
    }
});


const status = (queue) => `Volume: \`${queue.volume}%\` | Filter: \`${queue.filter || "Off"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;

distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user.tag}\n${status(queue)}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user.tag}`
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user.tag}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
    ))
    // DisTubeOptions.searchSongs = true
    .on("searchResult", (message, result) => {
        let i = 0;
        message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
    })
    // DisTubeOptions.searchSongs = true
    .on("searchCancel", (message) => message.channel.send(`Searching canceled`))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("An error encountered: " + e);
    });

keepAlive()
