const Discord = require('discord.js');
var GphApiClient = require('giphy-js-sdk-core')
const giphy = GphApiClient(process.env.GIPHYTOKEN);



const searchForGif = (gifName) => {
    return giphy.search('gifs', {"q": gifName, "limit": 1})
           .then((response) => {
             let gif = response.data[0].url;
             return gif;
           })
           .catch((err) => {
             return err;
           })
  }


module.exports = {
	commands: 'gif',
	description: 'Search for a gif.',
  execute(message, arguments, text) {
		let searchPromise = searchForGif(arguments);
        if(!arguments[0]) {
            message.reply("You need to give me a keyword!");
            return;
        }
        else(!arguments[1])
            searchPromise.then((gif) => {
            message.channel.send(gif);
        }) 
	}
}