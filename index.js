const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame(`Free Free!`);
    console.log(`${bot.user.username} sudah siap!`);
});

bot.login("process.env.token");
