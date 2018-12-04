const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame(`Free Free!`);
    console.log(`${bot.user.username} sudah siap!`);
});

bot.on('guildMemberAdd', async (member) => {
	const joinchannel = member.guild.channels.find('name', 'welcomer-goodbye');
    joinchannel.send(`Welcome to the jungle 👋😹 ${member.user}`);

});

bot.login(process.env.TOKEN);
