const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", function() {
    bot.user.setGame(`Free Free!`);
    console.log(`${bot.user.username} sudah siap!`);
});

bot.on('guildMemberAdd', async (member) => {
	const joinchannel = member.guild.channels.find('name', 'welcomer-goodbye');
    joinchannel.send(`Welcome to the jungle 👋😹 ${member.user.tag}`);

});

bot.on("message", async message => {
	if (message.author.bot) return;
	if (message.channel.type === 'dm') return

	let prefix = config.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

if (cmd === `${prefix}say`) {
		 if(!message.member.hasPermission("ADMINISTRATOR")) return;
    let say = args.join(" ");
    if(!say) return message.reply("masukan sebuah kata atau kalimat");
          message.delete().catch(O_o=>{}); 
          message.channel.send(say);
    }
});

bot.login(process.env.TOKEN);
