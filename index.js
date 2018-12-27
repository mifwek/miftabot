const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

const size    = config.colors;
const rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg 

  rainbow[i] = '#'+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? '0'+hex : hex;
}

let place = 0;
const servers = config.servers;

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {    
    bot.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
    .catch(console.error);
    
    if(config.logging){
      console.log(`[ColorChanger] Changed color to ${rainbow[place]} in server: ${servers[index]}`);
    }
    if(place == (size - 1)){
      place = 0;
    }else{
      place++;
    }
  }
}

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.username}!`);
  if(config.speed < 2000){console.log("The minimum speed is 2000"); process.exit(1);}
  setInterval(changeColor, config.speed);
});

bot.on("ready", function() {
    bot.user.setGame(`bersama 爪ꀤ千匕丹`);
    console.log(`${bot.user.username} sudah siap!`);
});

bot.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "USER");
    member.addRole(role).catch(console.error);
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
    },
if (cmd === `${prefix}invite`) {
    let invite = new Discord.RichEmbed()
            .setTitle("***pelangi V_1.0***")
            .setThumbnail(results[0].thumbnails.high.url)
            .addField("Invite Link", "https://discordapp.com/api/oauth2/authorize?client_id=477323524973920266&permissions=8&scope=bot")
            .setDescription("Pemasangan Lebih Lanjut Hubungi, @〔ɪɴᴄ〕爪ꀤ千匕丹 \n Terima Kasih!")
            .setColor(RANDOM)
            .setTimestamp()
   message.channel.send(invite);
},
});

bot.login(process.env.TOKEN);
