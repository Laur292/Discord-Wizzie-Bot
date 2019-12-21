const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpEmbed = new Discord.RichEmbed()

  .setTitle(":robot: Commands :robot:")
  .setColor("#1078c2")
  .addField("Informational Commands", "``+prefix`` - Displays the prefix bot\n``+help``   - Displays this list of commands\n``+serverinfo ``   - Displays some statistics on the server\n``+ping``   - Bot Ping\n``+about``   - Get some info about me!\n``+invite``  - Invite Wizzie Bot\n``+membercount``  - Display Online/Offline Member")
  .addField("Moderation Commands", "``+ban [@user] [reason]`` - Bans the specified member\n``+kick [@user] [reason]`` - Kicks the specified member\n``+say [message]`` - Say a message with bot")
  .addField("Fun Commands", "``+coins`` - Show you coins\n``+level`` - Show you level and xp")
  .setFooter(`More commands coming soon`, message.author.displayAvatarURL)

  message.channel.send(helpEmbed);
}

module.exports.help = {
  name:"help"
}
