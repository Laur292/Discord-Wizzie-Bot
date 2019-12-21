const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username, true)
    .addField("Created By", "DeeP Wizzie", true)
    .addField("Library", "discord.js", true)
    .addField("Prefix", "+", true)
    .addField("Created On", "03/09/2019", true)
    .addField('Vote Bot', '[Click Here](https://discordbots.org/bot/595873443472343042/vote)', true)
    .setTimestamp();

    message.channel.send(botembed);
}

module.exports.help = {
  name:"about"
}
