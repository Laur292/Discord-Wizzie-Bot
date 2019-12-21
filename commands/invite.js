const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let invEmbed = new Discord.RichEmbed()

  .addField('Invite Bot', '[Click Here](https://discordapp.com/api/oauth2/authorize?client_id=595873443472343042&permissions=8&scope=bot)', true)
  .setColor(`#1078c2`)
  .addField('Vote Bot', '[Click Here](https://discordbots.org/bot/595873443472343042/vote)', true)
  .addField('Support Server', '[Click Here](https://discord.gg/5kX237X)', true)
  message.channel.send(invEmbed)
}

module.exports.help = {
  name:"invite"
}
