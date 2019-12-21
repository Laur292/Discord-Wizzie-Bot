const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let memEmbed = new Discord.RichEmbed()

    .addField("**Online Member:**", message.guild.members.filter(x=>x.presence.status === 'online').size, true )
    .setColor("#3895D3")
    .addField("**Offline Member**", message.guild.members.filter(x=>x.presence.status === 'offline').size, true )
    message.channel.send(memEmbed);

  }

  module.exports.help = {
  name:"membercount"
  }
