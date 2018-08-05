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
رابط سيرفر البوت
 
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
    if (message.content.startsWith("ترحيب 1")) {
                                    var mentionned = message.mentions.users.first();
                var mentionavatar;
                  if(mentionned){
                      var mentionavatar = mentionned;
                  } else {
                      var mentionavatar = message.author;
                      
                  }
                  let bot;
                  if(message.author.bot) {
                      bot = 'Bot'
                  } else {
                      bot = 'User'
                  }
     var EsTeKnAN = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(`${mentionavatar.avatarURL}`)
     .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
     .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
     .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
      message.channel.sendEmbed(EsTeKnAN);
     }
   });
    
    
   client.on('message', message => {
    if (message.content.startsWith("ترحيب 2")) {
                                    var mentionned = message.mentions.users.first();
                var mentionavatar;
                  if(mentionned){
                      var mentionavatar = mentionned;
                  } else {
                      var mentionavatar = message.author;
                      
                  }
                  let bot;
                  if(message.author.bot) {
                      bot = 'Bot'
                  } else {
                      bot = 'User'
                  }
     var EsTeKnAN = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(`${mentionavatar.avatarURL}`)
     .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
     .setDescription('***هلا باللي ملك قلبي هلا باللي فداه الروح هلا باللي شغل فكري هلا باللي هواه البوح.***')
     .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
      message.channel.sendEmbed(EsTeKnAN);
     }
   });
    
    
   client.on('message', message => {
    if (message.content.startsWith("ترحيب 3")) {
                                    var mentionned = message.mentions.users.first();
                var mentionavatar;
                  if(mentionned){
                      var mentionavatar = mentionned;
                  } else {
                      var mentionavatar = message.author;
                      
                  }
                  let bot;
                  if(message.author.bot) {
                      bot = 'Bot'
                  } else {
                      bot = 'User'
                  }
     var EsTeKnAN = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(`${mentionavatar.avatarURL}`)
     .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
     .setDescription('***مرحباً بك عدد ما خطته الأقلام من حروف وبعدد ما أزهر بالأرض زهور مرحباً ممزوجة بعطر الورد ورائحة البخور***')
     .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
      message.channel.sendEmbed(EsTeKnAN);
     }
   });
    
    
   client.on('message', message => {
    if (message.content.startsWith("ترحيب 4")) {
                                    var mentionned = message.mentions.users.first();
                var mentionavatar;
                  if(mentionned){
                      var mentionavatar = mentionned;
                  } else {
                      var mentionavatar = message.author;
                      
                  }
                  let bot;
                  if(message.author.bot) {
                      bot = 'Bot'
                  } else {
                      bot = 'User'
                  }
     var EsTeKnAN = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(`${mentionavatar.avatarURL}`)
     .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
     .setDescription('***مرحبا باللي يجينا هلت الفرحة علينا نشدت الأشواق فينا مرحباً بكم مرحباً.***')
     .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
      message.channel.sendEmbed(EsTeKnAN);
     }
   });
    
    
   client.on('message', message => {
    if (message.content.startsWith("ترحيب 5")) {
                                    var mentionned = message.mentions.users.first();
                var mentionavatar;
                  if(mentionned){
                      var mentionavatar = mentionned;
                  } else {
                      var mentionavatar = message.author;
                      
                  }
                  let bot;
                  if(message.author.bot) {
                      bot = 'Bot'
                  } else {
                      bot = 'User'
                  }
     var EsTeKnAN = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(`${mentionavatar.avatarURL}`)
     .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
     .setDescription('***لو علمت الدار بمن زارها فرحت وأستبشرت ثم باست موضع القدمين وأنشدت بلسان الحال قائلة أهلاً وسهلاً بأهل الجود والكرم.***')
     .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
      message.channel.sendEmbed(EsTeKnAN);
     }
   });
    
    
   client.on('message', message => {
    if (message.content.startsWith("ترحيب 6")) {
                                    var mentionned = message.mentions.users.first();
                var mentionavatar;
                  if(mentionned){
                      var mentionavatar = mentionned;
                  } else {
                      var mentionavatar = message.author;
                      
                  }
                  let bot;
                  if(message.author.bot) {
                      bot = 'Bot'
                  } else {
                      bot = 'User'
                  }
     var EsTeKnAN = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(`${mentionavatar.avatarURL}`)
     .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
     .setDescription('***مرحبا بك كثر النجوم الساطعة وكثر الورود الفائحة التي تفوح بأزكى العطور وكثر ما تكتب الأقلام من الحروف والعبارات. ***')
     .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
      message.channel.sendEmbed(EsTeKnAN);
     }
   });
    
    
   client.on('message', message => {
    if (message.content.startsWith("ترحيب 7")) {
                                    var mentionned = message.mentions.users.first();
                var mentionavatar;
                  if(mentionned){
                      var mentionavatar = mentionned;
                  } else {
                      var mentionavatar = message.author;
                      
                  }
                  let bot;
                  if(message.author.bot) {
                      bot = 'Bot'
                  } else {
                      bot = 'User'
                  }
     var EsTeKnAN = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(`${mentionavatar.avatarURL}`)
     .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
     .setDescription('***حي الله هذه الوجوه رؤيتها تزيد الأفراح، نسماتها تداوي الجروح، وعبيرها فواح، تنثره الرياح، على القمم في الليل في الصباح***')
     .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
      message.channel.sendEmbed(EsTeKnAN);
     }
   });
    
    
   client.on('message', message => {
    if (message.content.startsWith("ترحيب 8")) {
                                    var mentionned = message.mentions.users.first();
                var mentionavatar;
                  if(mentionned){
                      var mentionavatar = mentionned;
                  } else {
                      var mentionavatar = message.author;
                      
                  }
                  let bot;
                  if(message.author.bot) {
                      bot = 'Bot'
                  } else {
                      bot = 'User'
                  }
     var EsTeKnAN = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(`${mentionavatar.avatarURL}`)
     .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
     .setDescription('***مرحبا بكل الضيوف يوم نادى غير عادي مرحبا فوق الألوف ***')
     .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
      message.channel.sendEmbed(EsTeKnAN);
     }
   });
    
    
   client.on('message', message => {
    if (message.content.startsWith("ترحيب 9")) {
                                    var mentionned = message.mentions.users.first();
                var mentionavatar;
                  if(mentionned){
                      var mentionavatar = mentionned;
                  } else {
                      var mentionavatar = message.author;
                      
                  }
                  let bot;
                  if(message.author.bot) {
                      bot = 'Bot'
                  } else {
                      bot = 'User'
                  }
     var EsTeKnAN = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(`${mentionavatar.avatarURL}`)
     .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
     .setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
     .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
      message.channel.sendEmbed(EsTeKnAN);
     }
   });
    
    
   client.on('message', message => {
    if (message.content.startsWith("ترحيب 10")) {
                                    var mentionned = message.mentions.users.first();
                var mentionavatar;
                  if(mentionned){
                      var mentionavatar = mentionned;
                  } else {
                      var mentionavatar = message.author;
                      
                  }
                  let bot;
                  if(message.author.bot) {
                      bot = 'Bot'
                  } else {
                      bot = 'User'
                  }
     var EsTeKnAN = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setThumbnail(`${mentionavatar.avatarURL}`)
     .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
     .setDescription('***كل شيء يرحب بك كل شيء يتبسم ويتوهج فرحاً بقدومك كل شيء ينمق عبارات الترحيب ويصوغ كلمات الحب لوجودك كل شيء ينتظر مشارك��تك وقلمك الرائع وأبداعاتك كل شيء يردد حياك الله.***')
     .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
      message.channel.sendEmbed(EsTeKnAN);
     }
   });

client.login(process.env.BOT_TOKEN);
