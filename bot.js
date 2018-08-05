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

      client.on('message', message => {
        var prefix = "M.";
               if(message.content === prefix + "mutechannel") {
                                   if(!message.channel.guild) return message.reply('** This command only for servers**');
        
           if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                      message.channel.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: false
        
                      }).then(() => {
                          message.reply("**__تم تقفيل الشات__ ✅ **")
                      });
                        }
        //FIRE BOT
            if(message.content === prefix + "unmutechannel") {
                                if(!message.channel.guild) return message.reply('** This command only for servers**');
        
           if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                      message.channel.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: true
        
                      }).then(() => {
                          message.reply("**__تم فتح الشات__✅**")
                      });
            }
               
        });

        client.on("message", message => {
            var prefix = "M."
            if (!message.content.startsWith(prefix)) return;
              let command = message.content.split(" ")[0];
              command = command.slice(prefix.length);
                if(command === "skin") {
                        const args = message.content.split(" ").slice(1).join(" ")
                if (!args) return message.channel.send("** Type your skin name **");
                const image = new Discord.Attachment(`https://visage.surgeplay.com/full/256/${args}`, "skin.png");
            message.channel.send(image)
                }
            });

            client.on('guildCreate', guild => {
                var embed = new Discord.RichEmbed()
                .setColor(0x5500ff)
                .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
                    guild.owner.send(embed)
              });
        
              client.on("message", message => { //clear
                var args = message.content.substring(prefix.length).split(" ");
                if (message.content.startsWith(prefix + "clear")) {
                    if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
            var msg;
            msg = parseInt();
          
          message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
          message.channel.sendMessage("", {embed: {
            title: "``تــم مسح الشات ``",
            color: 0x5016f3, 
            footer: {
              
            }
          }}).then(msg => {msg.delete(3000)});
                              }
    
         
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
    }

       client.on('message', message => {
        var prefix = "M.";
              if(message.content === prefix + "hchannel") {
              if(!message.channel.guild) return;
              if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
                     message.channel.overwritePermissions(message.guild.id, {
                     READ_MESSAGES: false
         })
                      message.channel.send('Channel Hided Successfully ! ✅  ')
         }
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

      
client.login(process.env.BOT_TOKEN);
