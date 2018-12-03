const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame(`Free Free!`);
    console.log(`${bot.user.username} sudah siap!`);
});

bot.on("message", async (message) => {
	if (message.content.startsWith("halo")) {
		message.channel.send("halo juga");
	}
});

bot.login(process.env.TOKEN);
