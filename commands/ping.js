const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let pingEmbed = new Discord.RichEmbed()

  .setTitle(`:ping_pong: Pong`)
  .setDescription(`**Bot ping is ${Math.round(bot.ping)}ms**`)
  .setColor(`#1078c2`)
  .setFooter("Bot ping", message.author.displayAvatarURL)
  .setTimestamp()

  message.channel.send(pingEmbed)

}
  module.exports.help = {
    name: "ping"
  }
