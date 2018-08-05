const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'M.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"https://www.twitch.tv/must4f4_gamer")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === "M.help") {
  let embed = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
           .setThumbnail(message.author.avatarURL)
                 .setTimestamp()
    .setDescription(`
***
:white_small_square:  ( اوامر الادارة***
**
:small_orange_diamond:   البوت يكتب الي ��نت تكتبه في صورة
M.say
:small_orange_diamond:   لمسح الشات
M.clear
:small_orange_diamond:   للباند
M.ban
:small_orange_diamond:   للطرد
M.kick
:small_orange_diamond:   للارسال لاعضاء السيرفر بشكل مطور
M.bc
:small_orange_diamond:   للارسال لاعضاء السيرفر بشكل عادي
M.bcr
:small_orange_diamond:   لأعطاء شخص ميوت بالسيرفر - يلزم ان يكون بالسيرفر رتبة Muted
M.mute
:small_orange_diamond:   لفك الميوت عن شخص
M.unmute
:small_orange_diamond:   لااعطاء شخص رتبه
M.role humans [role]
:small_orange_diamond:   لااعطاء الجميع رتبه
M.role all [role]
:small_orange_diamond:   لااعطاء البوتات رتبه
M.role bots [role]
----
**
***
:white_small_square: ( الاوامر العامة***
**
:small_blue_diamond:  للابلغ عن شخص
M.report
:small_blue_diamond:  لعرض التاريخ والوقت 
M.day
:small_blue_diamond:  للارسال اقتراح للادراه
M.suggest
:small_blue_diamond:  معلومات السيرفر
M.server
:small_blue_diamond:  لعرض اسكنك في ماين كرافت بشكل مطور
M.mc3d
:small_blue_diamond:   اسكنك في ماين كرافت
M.mcskin
:small_blue_diamond:   راس اسكنك في ماين كرافت
M.skin
:small_blue_diamond:   اسئله عن ماين كرافت
M.minecraft
:small_blue_diamond:   لااستعراض الحاسبه
M.calculate
:small_blue_diamond:   احصائيات فورت نايت
M.fortnite
 ----
قريباً    
 
----------
https://discordapp.com/api/oauth2/authorize?client_id=413729304862785536&permissions=0&scope=bot


**

`)
.setColor('RANDOM')
message.author.sendEmbed(embed)
}
});

client.on('message', msg => {
      if(!msg.channel.guild) return;
    if(msg.content.startsWith (prefix  + 'help')) {
    msg.reply('**📩 شيك علي الخاص**');
  }
});


client.on('message', message => {
    if (message.content.startsWith(prefix + "deafen")) {
      if (!message.member.hasPermission('DEAFEN_MEMBERS')) return;
    { message.member.setDeaf(true);
      }
    }
      });
  client.on('message', message => {
    if (message.content.startsWith(prefix + "vmute")) {
      if (!message.member.hasPermission('MUTE_MEMBERS')) return;
    { message.member.setMute(true);
      }
    }
      });
  client.on('message', message => {
    if (message.content.startsWith(prefix + "undeafen")) {
      if (!message.member.hasPermission('DEAFEN_MEMBERS')) return;
    { message.member.setDeaf(false);
      }
    }
      });
  client.on('message', message => {
    if (message.content.startsWith(prefix + "vunmute")) {
      if (!message.member.hasPermission('MUTE_MEMBERS')) return;
    { message.member.setMute(false);
      }
    }
      });

      client.on('message', message => {
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
      if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
      message.channel.send("**^bc <message>**");
      return;
      }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .addField(' The server', `${message.guild.name}`, true)
                .addField(' who sended the messege ', `${message.author.username}!${message.author.discriminator}`, true)
                .addField(' the messege ', args)
                .setThumbnail(message.guild.iconURL)
                .setColor('RANDOM')
                m.send(`${m}`,{embed: bc});
            });
            const unknown = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle('✅| the messege is loading ')
            .addBlankField(true)
            .addField('♨| i got sended to  ', message.guild.memberCount , true)
            .addField('📝| the message ', args)
            .setColor('RANDOM')
            message.channel.sendEmbed(embed);
        }
        } else {
            return;
        }
      });
      
client.on('guildMemberRemove', member => {
    const botCount = member.guild.members.filter(m=>m.user.bot).size
    const memberCount = [member.guild.memberCount] - [botCount]
    client.channels.get('474687285804138496').setName(`⟫『 ${memberCount} عدد الاعضاء 』⟪`);
    client.channels.get('474687287247241217').setName(`⟫『 ${botCount} عدد البوتات 』⟪`);
});

client.on('message', message =>{
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = 'M.';
     
    if(cmd === `${prefix}report`){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Idk who 2 report ??");
        let reason = args.join(" ").slice(22);
        if(!reason) return message.channel.send("What is the reason ??");
    
        let reportEmbed = new Discord.RichEmbed()
        .setTitle("User just reported...")
        .setColor("#f7abab")
        .addField("- Reported User :", `${rUser} (${rUser.id})`)
        .addField("- Reported By :", `${message.author} (${message.author.id})`)
        .addField("- Reported In :", message.channel)
        .addField("- Report Time :", message.createdAt.toLocaleString(),true)
        .addField("- Reason :", reason);
    
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("You should to make `reports` channel.");
    
    
        message.delete().catch(O_o=>{});
        message.author.send(`<@${rUser.id}>, Reported Successfully!!`)
        reportschannel.send(reportEmbed);
    };
});

const child_process = require("child_process");
const adminprefix = "M.";
const devs = ['396958215377780747'];

client.on('message', message => {
if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**);
        console.log(⚠️ جاري اعادة تشغيل البوت... ⚠️);
        client.destroy();
        child_process.fork(__dirname + "/الملف.js");
        console.log(تم اعادة تشغيل البوت);
    }
  
  });

client.login(process.env.BOT_TOKEN);
