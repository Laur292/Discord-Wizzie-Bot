const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;


  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .setTitle(`:money_with_wings: ${uCoins} coins !`)
  .setTimestamp()

  message.channel.send(coinEmbed).then(msg => {msg.delete(500000)});

}

module.exports.help = {
  name: "coins"
}
