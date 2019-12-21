const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let sayEmbed = new Discord.RichEmbed()

  .setTitle("**You don't have permission !**")
  .setColor("#432cb8")
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(sayEmbed);
  let botmessage = args.join(" ");
  message.delete().catch();
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say"
}
