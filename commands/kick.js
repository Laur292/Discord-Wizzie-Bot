const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    let k2Embed = new Discord.RichEmbed()

    .setTitle("**You don't have permission :cowboy:**")
    .setColor("#b82c2c")
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(k2Embed);

    let k1Embed = new Discord.RichEmbed()

    .setTitle("**Use: +ban [@mention] [reason]**")
    .setColor("#b82c2c")

    if(!kUser) return message.channel.send(k1Embed);
    let kReason = args.join(" ").slice(22);
    let k3Embed = new Discord.RichEmbed()

    .setTitle("**That person can't be banned !**")
    .setColor("#b82c2c")
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send(k3Embed);

    let kEmbed = new Discord.RichEmbed()
    .setTitle(":hammer: Wizzie - Kick ")
    .setDescription(`**Kicked By: <@${message.author.id}>\nKicked User:  ${kUser}\nReason:  ${kReason}**`)
    .setColor("#bc0000")
    .setFooter("Wizzie Bot ")
    .setTimestamp()

    message.channel.send(kEmbed)
    message.guild.member(kUser).kick(kReason);
}

module.exports.help = {
  name:"kick"
}
