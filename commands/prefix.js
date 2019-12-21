const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let prefixEmbed = new Discord.RichEmbed()

    .setTitle("**Bot prefix is: ``+``**")
    .setColor("#54e317")
    .setTimestamp()

    message.channel.send(prefixEmbed)
  }
  module.exports.help = {
    name: "prefix"
  }
