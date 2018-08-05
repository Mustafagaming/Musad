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


    client.on('message', message => {
        if (message.author.bot) return;
       if (message.content.startsWith("رابط")) {
           message.channel.createInvite({
           thing: true,
           maxUses: 1,
           maxAge: 3600,
       }).then(invite =>
         message.author.sendMessage(invite.url)
       )
       const embed = new Discord.RichEmbed()
           .setColor("RANDOM")
             .setDescription(" تم أرسال الرابط برسالة خاصة ")
              .setAuthor(client.user.username, client.user.avatarURL)
                    .setAuthor(client.user.username, client.user.avatarURL)
                   .setFooter('طلب بواسطة: ' + message.author.tag)
   
         message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
                 const Embed11 = new Discord.RichEmbed()
           .setColor("RANDOM")
           
       .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
         message.author.sendEmbed(Embed11)
       });
      
client.login(process.env.BOT_TOKEN);
