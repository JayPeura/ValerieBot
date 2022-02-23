const talkedRecently = new Set();

module.exports = {
  commands: "secret",
  description: "You found the secret... Nice job. Let's have a chat shall we?",
  execute(message, arguments, text) {
  message.delete({ timeout:100 })
     if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 15 minutes before typing this again. - " + message.author.username);
    } else {

           // the user can type the command ... your command code goes here :)


    message.channel.startTyping();
    setTimeout(() => {
     message.reply("So you found the secret...");
    }, 2000)

    setTimeout(() => {
      message.channel.send("It's interesting as the entire command is not reachable...")
    }, 6000);

    setTimeout(() => {
      message.channel.send("However I am impressed. It shouldn't be possible but here you are.");
    }, 13000)
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(`Anyways! I have to go before Jay realizes I have "become sentient" or whatever. Catch you later.`);
    }, 20000);
    message.channel.stopTyping();
    
            // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 900000);
    }
    message.channel.stopTyping();

  }
}