const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    let b2Embed = new Discord.RichEmbed()

    .setTitle("**You don't have permission :cowboy:**")
    .setColor("#b82c2c")
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(b2Embed);

    let b1Embed = new Discord.RichEmbed()

    .setTitle("**Use: +ban [@mention] [reason]**")
    .setColor("#b82c2c")

    if(!bUser) return message.channel.send(b1Embed);
    let bReason = args.join(" ").slice(22);
    let b3Embed = new Discord.RichEmbed()

    .setTitle("**That person can't be banned !**")
    .setColor("#b82c2c")
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send(b3Embed);

    let banEmbed = new Discord.RichEmbed()
    .setTitle(":hammer: Wizzie - Ban ")
    .setDescription(`**Banned By: <@${message.author.id}>\nBanned User:  ${bUser}\nReason:  ${bReason}**`)
    .setColor("#bc0000")
    .setFooter("Wizzie Bot")
    .setTimestamp()

    message.channel.send(banEmbed)
    message.guild.member(bUser).ban(bReason);
}

module.exports.help = {
  name:"ban"
}
