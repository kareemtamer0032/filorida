
const Discord = require('discord.js'); 

const Util = require('discord.js');

const GOOGLE_API_KEY = "AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8"

const getYoutubeID = require('get-youtube-id');

const Canvas = require("canvas");

const jimp = require("jimp");

const convert = require("hh-mm-ss");

const dateFormat = require('dateformat');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4"; 

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const moment = require('moment');

const client = new Discord.Client({disableEveryone: true});

const request = require('request');

const prefix = '#'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
	client.user.setGame(`Welcome To Florida Server .`,'https://www.twitch.tv/v5bz');
});

client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`**Welcome To Florida Server** :beers: 
    ** Have Best Time There** :beers: 
[ ${member} ]`) 
  }).catch(console.error)
  })
  
    client.on('message', message => {
var prefix = "#" // البريفكس
if(message.content.startsWith(prefix +"server")){ // الامر
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** ❎ `)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("**🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});


    client.on('message', message =>{
        let args = message.content.split(' ');
        let prefix = '#'; 
        
        if(args[0] === `${prefix}avatar`){
            let mentions = message.mentions.members.first()
            if(!mentions) {
              let sicon = message.author.avatarURL
              let embed = new Discord.RichEmbed()
              .setImage(message.author.avatarURL)
              .setColor("#f7abab") 
              .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
              message.channel.send({embed})
            } else {
              let sicon = mentions.user.avatarURL
              let embed = new Discord.RichEmbed()
              .setColor("#f7abab")
              .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
              .setImage(sicon)
              message.channel.send({embed})
            }
        };
    });
    
     client.on('message', message => {
    
if(message.content.split(' ')[0] == '#profile') {
if(!message.channel.guild) return;

let args = message.content.split(' ').slice(1).join(' ');

       let defineduser = '';
       if (!args[1]) { 
           defineduser = message.author;
       } else { // Run this if they did define someone...
           let firstMentioned = message.mentions.users.first();
           defineduser = firstMentioned;
       }

       const w = ['./id5.png','./id6.png'];
       var Canvas = require('canvas')
var jimp = require('jimp')

        const millis = new Date().getTime() - defineduser.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy');
const stats2 = ['online', 'Low', 'Medium', 'Insane'];
const days = millis / 1000 / 60 / 60 / 24;
         dateFormat(now, 'dddd, mmmm dS, yyyy');
             let time = `${dateFormat(defineduser.createdAt)}`
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
            var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
       let Image = Canvas.Image,
           canvas = new Canvas(300, 300),
           ctx = canvas.getContext('2d');
       ctx.patternQuality = 'bilinear';
       ctx.filter = 'bilinear';
       ctx.antialias = 'subpixel';
 
       fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
           if (err) return console.log(err);
           let BG = Canvas.Image;
           let ground = new Image;
           ground.src = Background;
           ctx.drawImage(ground, 0, 0, 300, 300);

})
  var mentionned = message.mentions.users.first();

   var client;
     if(mentionned){
         var client = mentionned;
     } else {
         var client = message.author;
         
     }

var men = message.mentions.users.first();
           var heg;
           if(men) {
               heg = men
           } else {
               heg = message.author
           }
               let url = defineduser.displayAvatarURL.endsWith(".webp") ? defineduser.displayAvatarURL.slice(20, 20) + ".png" : defineduser.displayAvatarURL;
               jimp.read(url, (err, ava) => {
                   if (err) return console.log(err);
                   ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                       if (err) return console.log(err);

                       let Avatar = Canvas.Image;
                       let ava = new Avatar;
                       ava.src = buf;
                       ctx.drawImage(ava, 112 , 40, 75, 75);
                       
                       
                       
                       
                       var status;
   if (defineduser.presence.status === 'online') {
       status = 'ONLINE';
ctx.fillStyle = `#2ce032`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
 
   } else if (defineduser.presence.status === 'dnd') {
       status = 'DND';
       ctx.fillStyle = `#ff0000`;
ctx.beginPath();
ctx.arc(179, 107, 8, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   } else if (defineduser.presence.status === 'idle') {
       status = 'IDLE';
       ctx.fillStyle = `#f4d32e`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   } else if (defineduser.presence.status === 'offline') {
       status = 'INVISIABLE';
       ctx.fillStyle = `#898988`;
ctx.beginPath();
ctx.arc(179, 107, 10, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();
   }
                       
                       
                                             var time2;
     if(mentionned){
         var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
     } else {
         var time2 = `${dateFormat(message.member.joinedAt)}`;
         
     }  
                          
   
                       ctx.font = 'Bold 15px Arial ';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(status, 70 , 108 );
                       
                        ctx.font = 'Bold 13px Arial';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${message.author.presence.game === null ? "No Status" : message.author.presence.game.name}`, 150.00   , 180  );

                      
                       ctx.font = 'Bold 20px Arial ';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${defineduser.username}`, 150.50 , 140);


                       ctx.font = 'Bold 15px Arial';
                       ctx.fontSize = '15px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`#${defineduser.discriminator}`, 227  , 108);

                       var time2;
     if(mentionned){
         var time2 = `${dateFormat(message.mentions.users.first.joinedAt)}`;
     } else {
         var time2 = `${dateFormat(message.member.joinedAt)}`;
         
     }

                       ctx.font = 'Bold 13px Arial ';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${moment(defineduser.createdTimestamp).fromNow()}`, 179 , 226 );
                       
                       
    
          
                       ctx.font = 'Bold 13px Arial ';
                       ctx.fontSize = '13px';
                       ctx.fillStyle = "#ffffff";
                       ctx.textAlign = "center";
                       ctx.fillText(`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}`, 179 , 253);
                       
message.channel.sendFile(canvas.toBuffer())


       })
   })




}

})

 client.on('message', async message => {
                if(message.content.includes('discord.gg')){ 
                    if(message.member.hasPermission("MANAGE_GUILD")) return;
            if(!message.channel.guild) return;
            message.delete()
              var command = message.content.split(" ")[0];
        let muterole = message.guild.roles.find(`name`, "Muted");
        if(!muterole){
          try{
            muterole = await message.guild.createRole({
              name: "Muted",
              color: "#9c9c9c",
              permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          }catch(e){
            console.log(e.stack);
          }
        }
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         message.member.addRole(muterole);
        const embed500 = new Discord.RichEmbed()
          .setTitle("ميوت بسبب نشر")
                .addField(`**لقد تم إعطائك ميوت كتابي **` , `**السبب: نشر رابط سيرفر في الديسكورد**`)
                .setColor("c91616")
                .setThumbnail(`${message.author.avatarURL}`)
                .setAuthor(message.author.username, message.author.avatarURL)
            .setFooter(`${message.guild.name} `)
         message.channel.send(embed500)
         message.author.send('**لو كان الميوت عن طريق الخطاء كلم الاداره**');
    
                  
                  
                  
                  }
    })
    
      client.on('message', message => {
        var prefix = "#";
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'move')) {
     if (message.member.hasPermission("MOVE_MEMBERS")) {
     if (message.mentions.users.size === 0) {
     return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+"move [USER]``")
    }
    if (message.member.voiceChannel != null) {
     if (message.mentions.members.first().voiceChannel != null) {
     var authorchannel = message.member.voiceChannelID;
     var usermentioned = message.mentions.members.first().id;
    var embed = new Discord.RichEmbed()
     .setTitle("Succes!")
     .setColor("#000000")
     .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
    var embed = new Discord.RichEmbed()
    .setTitle(`You are Moved in ${message.guild.name}`)
     .setColor("RANDOM")
    .setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
     message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
    message.guild.members.get(usermentioned).send(embed)
    } else {
    message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
    }
    } else {
     message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
    }
    } else {
    message.react("❌")
     }}});
     
      client.on('message',function(message) {
        if (message.author.bot) return;
      var prefix = "#";
                        if(!message.channel.guild) return;
      
                          if (message.content === prefix + "fm") {
       const embed = new Discord.RichEmbed()
      
          .setDescription(`**Members info :sparkles:
      :green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
      :heart:  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
      :yellow_heart:  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
      :diamond_shape_with_a_dot_inside:   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
      :bulb: bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
               message.channel.send({embed});
      
          }
            });  

     client.on('message', message => {
                    var prefix = "#";
                           if(message.content === prefix + "mutechannel") {
                                               if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
                       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                                  message.channel.overwritePermissions(message.guild.id, {
                                SEND_MESSAGES: false
                    
                                  }).then(() => {
                                      message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                                  });
                                    }
                    //FIRE BOT
                        if(message.content === prefix + "unmutechannel") {
                                            if(!message.channel.guild) return message.reply('** This command only for servers**');
                    
                       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                                  message.channel.overwritePermissions(message.guild.id, {
                                SEND_MESSAGES: true
                    
                                  }).then(() => {
                                      message.reply("**__تم فتح الشات__:white_check_mark:**")
                                  });
                        }
                           
                    });   

                    client.on('message', omar => {
                        var prefix = "#";
                        if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
                        if (!omar.channel.guild) return;
                        if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
                        if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
                        omar.guild.channels.forEach(m => {
                        m.delete();
                        });
                        }
                        if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
                        if (!omar.channel.guild) return;
                        if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
                        if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
                        omar.guild.roles.forEach(m => {
                        m.delete();
                        });
                        omar.reply("`تم حذف جميع الرتب بنجاح`")
                        }
                        });
                        

                        
                        
                                 client.on('message', message => {
                              if (!message.channel.guild) return;
                          if(message.content =='#count')
                          var IzRo = new Discord.RichEmbed()
                          .setThumbnail(message.author.avatarURL)
                          .setFooter(message.author.username, message.author.avatarURL)
                          .setTitle('Members Count')
                          .addBlankField(true)
                          .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
                          message.channel.send(IzRo);
                          });
                          
                             client.on('message', msg => {//msg
            if (msg.content === `${prefix}colors`) {
              msg.channel.send({file : "https://cdn.discordapp.com/attachments/501774006966419458/501774646467887105/colors.png"})
            }
          });;
         
          client.on('message', message => {
            let args = message.content.split(' ').slice(1);
            if(message.content.split(' ')[0] == `${prefix}color`){
            const embedd = new Discord.RichEmbed()
            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
            .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
            .setColor(`ff0000`)
           
            if(!isNaN(args) && args.length > 0)
           
           
            if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
           
           
            var a = message.guild.roles.find("name",`${args}`)
             if(!a)return;
            const embed = new Discord.RichEmbed()
           
            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
            .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
           
            .setColor(`${a.hexColor}`)
            message.channel.sendEmbed(embed);
            if (!args)return;
            setInterval(function(){})
               let count = 0;
               let ecount = 0;
            for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
           
            }
             message.member.addRole(message.guild.roles.find("name",`${args}`));
           
           
            }
            });
         
           
        client.on('message', message => {
          if(message.content === prefix + 'createcolors') {
                               if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**');
               if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
            message.guild.createRole({
                        name: "1",
                          color: "#FFB6C1",
                          permissions: []
           })
                 message.guild.createRole({
                        name: "2",
                          color: "#FFC0CB",
                          permissions: []
           })
                      message.guild.createRole({
                        name: "3",
                          color: "#FF69B4",
                          permissions: []
           })
                           message.guild.createRole({
                        name: "4",
                          color: "#FF1493",
                          permissions: []
           })
                           message.guild.createRole({
                        name: "5",
                          color: "#DB7093",
                          permissions: []
           })
                           message.guild.createRole({
                        name: "6",
                          color: "#C71585",
                          permissions: []
           })
                           message.guild.createRole({
                        name: "7",
                          color: "#E6E6FA",
                          permissions: []
           })
                           message.guild.createRole({
                        name: "8",
                          color: "#D8BFD8",
                          permissions: []
           })
                           message.guild.createRole({
                        name: "8",
                          color: "#DDA0DD",
                          permissions: []
           })
                           message.guild.createRole({
                        name: "9",
                          color: "#DA70D6",
                          permissions: []
           })
                           message.guild.createRole({
                        name: "10",
                          color: "#EE82EE",
                          permissions: []
           })
                           message.guild.createRole({
                        name: "11",
                          color: "#FF00FF",
                          permissions: []
           })
                           message.guild.createRole({
                        name: "12",
                          color: "#BA55D3",
                          permissions: []
           })
                           message.guild.createRole({
                        name: "13",
                          color: "#9932CC",
                          permissions: []
           })
                                message.guild.createRole({
                        name: "14",
                          color: "#9400D3",
                          permissions: []
           })
                                message.guild.createRole({
                        name: "15",
                          color: "#8A2BE2",
                          permissions: []
           })
                                     message.guild.createRole({
                        name: "16",
                          color: "#8B008B",
                          permissions: []
           })
                                          message.guild.createRole({
                        name: "17",
                          color: "#800080",
                          permissions: []
           })
                                          message.guild.createRole({
                        name: "18",
                          color: "#9370DB",
                          permissions: []
           })
                                          message.guild.createRole({
                        name: "19",
                          color: "#7B68EE",
                          permissions: []
           })
                                          message.guild.createRole({
                        name: "20",
                          color: "#6A5ACD",
                          permissions: []
           })
                                          message.guild.createRole({
                        name: "21",
                          color: "#483D8B",
                          permissions: []
           })
                                          message.guild.createRole({
                        name: "22",
                          color: "#663399",
                          permissions: []
           })
                                          message.guild.createRole({
                        name: "23",
                          color: "#4B0082",
                          permissions: []
           })
                                          message.guild.createRole({
                        name: "24",
                          color: "#FFA07A",
                          permissions: []
           })
                                          message.guild.createRole({
                        name: "25",
                          color: "#FA8072",
                          permissions: []
           })
                                          message.guild.createRole({
                        name: "26",
                          color: "#E9967A",
                          permissions: []
           })
                                          message.guild.createRole({
                        name: "27",
                          color: "#F08080",
                          permissions: []
           })
                                          message.guild.createRole({
                        name: "28",
                          color: "#CD5C5C",
                          permissions: []
           })
                                          message.guild.createRole({
                        name: "29",
                          color: "#DC143C",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "30",
                          color: "  #FF0000",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "31",
                          color: "#B22222",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "32",
                          color: "#8B0000",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "33",
                          color: "#FFA500",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "34",
                          color: "#FF8C00",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "35",
                          color: "#FF7F50",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "36",
                          color: "#FF6347",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "37",
                          color: "#FF4500",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "38",
                          color: "#FFD700",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "39",
                          color: "#FFFFE0",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "40",
                          color: "#FFFACD",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "41",
                          color: "#FAFAD2",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "42",
                          color: "  #FFEFD5",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "43",
                          color: "#FFE4B5",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "44",
                          color: "#FFDAB9",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "45",
                          color: "#EEE8AA",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "46",
                          color: "#F0E68C",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "47",
                          color: "#BDB76B",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "48",
                          color: "#ADFF2F",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "49",
                          color: "#7FFF00",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "50",
                          color: "#7CFC00",
                          permissions: []
           })
                                               message.guild.createRole({
                        name: "51",
                          color: "#00FF00",
                          permissions: []
           })  
           
                                               message.guild.createRole({
                        name: "52",
                          color: "#32CD32",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "53",
                          color: "#98FB98",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "54",
                          color: "#90EE90",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "55",
                          color: "#00FA9A",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "56",
                          color: "#00FF7F",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "57",
                          color: "#3CB371",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "58",
                          color: "#2E8B57",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "59",
                          color: "#2E8B57",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "60",
                          color: "#008000",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "61",
                          color: "#006400",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "62",
                          color: "#9ACD32",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "63",
                          color: "#6B8E23",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "64",
                          color: "#556B2F",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "65",
                          color: "#66CDAA",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "66",
                          color: "#8FBC8F",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "67",
                          color: "#20B2AA",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "68",
                          color: "#008B8B",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "69",
                          color: "#008080",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "70",
                          color: "#00FFFF",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "71",
                          color: "#E0FFFF",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "72",
                          color: "#AFEEEE",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "73",
                          color: "#7FFFD4",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "74",
                          color: "#40E0D0",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "75",
                          color: "#48D1CC",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "76",
                          color: "#00CED1",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "77",
                          color: "#5F9EA0",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "78",
                          color: "#4682B4",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "79",
                          color: "#B0C4DE",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "80",
                          color: "#ADD8E6",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "81",
                          color: "#B0E0E6",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "82",
                          color: "#87CEFA",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "83",
                          color: "#87CEEB",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "84",
                          color: "#6495ED",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "85",
                          color: "#00BFFF",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "86",
                          color: "#1E90FF",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "87",
                          color: "#4169E1",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "88",
                          color: "#0000FF",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "89",
                          color: "#0000CD",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "90",
                          color: "#00008B",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "91",
                          color: "#000080",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "92",
                          color: "#191970",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "93",
                          color: "#FFF8DC",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "94",
                          color: "#FFEBCD",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "95",
                          color: "#FFE4C4",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "96",
                          color: "#FFDEAD",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "97",
                          color: "#F5DEB3",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "98",
                          color: "#DEB887",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "99",
                          color: "#D2B48C",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "100",
                          color: "#BC8F8F",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "101",
                          color: "#F4A460",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "102",
                          color: "#DAA520",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "103",
                          color: "#B8860B",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "104",
                          color: "#CD853F",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "105",
                          color: "#D2691E",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "106",
                          color: "#808000",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "107",
                          color: "#8B4513",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "108",
                          color: "#A0522D",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "109",
                          color: "#A52A2A",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "110",
                          color: "#800000",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "111",
                          color: "#FFFFFF",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "112",
                          color: "#FFFAFA",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "113",
                          color: "#F0FFF0",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "114",
                          color: "#F5FFFA",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "115",
                          color: "#F0FFFF",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "116",
                          color: "#F0F8FF",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "117",
                          color: "#F8F8FF",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "118",
                          color: "#F5F5F5",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "119",
                          color: "#FFF5EE",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "120",
                          color: "#F5F5DC",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "121",
                          color: "#FDF5E6",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "122",
                          color: "#FFFAF0",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "123",
                          color: "#FFFFF0",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "124",
                          color: "#FAEBD7",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "125",
                          color: "#FAF0E6",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "126",
                          color: "#FFF0F5",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "127",
                          color: "#FFE4E1",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "128",
                          color: "#DCDCDC",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "129",
                          color: "#D3D3D3",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "130",
                          color: "#C0C0C0",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "131",
                          color: "#f7f7f7",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "132",
                          color: "#b2b2b2",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "133",
                          color: "#6f6c6c",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "134",
                          color: "#4d4646",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "135",
                          color: "#4c4c4c",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "136",
                          color: "#2F4F4F",
                          permissions: []
           })    
                                               message.guild.createRole({
                        name: "137",
                          color: "#040000",
                          permissions: []
           })    
         
           
                message.channel.sendMessage({embed: new Discord.RichEmbed()
           .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``Colors Has Been Created``')});
          }
         
         
   
        })
        
        client.on('message',async message => {

  if(message.content.startsWith(prefix + "setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **تم عمل الروم بنجاح**');
  message.guild.createChannel(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName(`Voice Online : [ ${message.guild.members.filter(m => m.voiceChannel).size} ]`)
    },1000);
  });
  }
});

      client.on('message', message => { 
                                        var prefix ="#";
                                               if (message.content.startsWith(prefix + "user")) {
                                         var args = message.content.split(" ").slice(1);
                                         let user = message.mentions.users.first();
                                         var men = message.mentions.users.first();
                                            var heg;
                                            if(men) {
                                                heg = men
                                            } else {
                                                heg = message.author
                                            }
                                          var mentionned = message.mentions.members.first();
                                             var h;
                                            if(mentionned) {
                                                h = mentionned
                                            } else {
                                                h = message.member
                                            }
                                                   moment.locale('ar-TN');
                                          var id = new  Discord.RichEmbed()
                                          .setAuthor(message.author.username, message.author.avatarURL) 
                                        .setColor("#707070")
                                        .addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
                                        .addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)               
                                        .setFooter(`RoadBot.`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')                                 
                                        .setThumbnail(heg.avatarURL);
                                        message.channel.send(id)
                                    }       });
                                    
                                    
                                    client.on('message', message => {
                                        if (message.content.startsWith("#bans")) {
                                            message.guild.fetchBans()
                                            .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
                                      .catch(console.error);
                                    }
                                    });
                                    
                                    client.on('message', message => {//new msg event
if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'rainbow')) {//to create the rainbow role
	  let role = message.guild.roles.find('name', 'Rainbow bot.')
    if(role) return message.channel.send(`This Step Already Completed !`)//if the role already created return with this msg
  //start of create role 
  if(!role){
    rainbow =  message.guild.createRole({
   name: "Rainbow",//the role will create name
   color: "#000000",//the default color
   permissions:[]//the permissions
 //end of create role
})

}
message.channel.send('Done The Rainbow Role Setup Has Been Completed')//if the step completed
}})

client.on('ready', () => {//new ready event
  setInterval(function(){
      client.guilds.forEach(g => {
                  var role = g.roles.find('name', 'Rainbow');//rainbow role name
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 5000);//the rainbow time
})


var word;
 
client.on("message", async function(msg) {
    if (msg.author.bot) return undefined;
    if (msg.channel.type !== "text") return undefined;
    else {
        var args = msg.content.toLowerCase().split(" ");
        if (args[0].slice(prefix.length) === "clear") {//The code created by @L#7574
            if (isNaN(args[1]) && args[1]) return msg.channel.send("Use numbers man ,_,");
            if (!msg.guild.member(client.user)) return msg.channel.send('Missing manage messages permission!');
            if (!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You're missing manage messages permission!");
            else {//The code created by @L#7574
                if (args[1] || !args[1]) {
                    await msg.channel.fetchMessages().then(async msgs => {
                        var word;
                        if (msgs.size-1 >= 1) word = "messages";
                        if (msgs.size-1 <= 1) word = "message";
                        if(msgs.size-1 <= 0) return msg.channel.send(`There are no messages to clear!`);
                        if (!args[1]) {
                            if (msgs.size-1 < 100) {
                                await msg.channel.bulkDelete(msgs.size);
                                await msg.channel.send(`I've deleted ${msgs.size-=1} ${word}..`);
                            }
                            else if (msgs.size-1 >= 100) {
                                await msg.delete();
                                await msg.channel.bulkDelete(msgs.size);
                                await msg.channel.send(`I've deleted ${msgs.size-=1} ${word}..`);
                            }
                        }
                        else if (args[1] && args[1] < 100) {
                            if (msgs.size-1 < 100 && args[1] < 100 && args[1] > 0) {
                                await msg.channel.bulkDelete(parseInt(args[1])+1);
                                await msg.channel.send(`I've deleted ${parseInt(args[1]).toFixed()} ${word}..`);
                            }
                            else if (msgs.size-1 >= 100 && args[1] == 100) {
                                await msg.delete();
                                await msg.channel.bulkDelete(msgs.size);
                                await msg.channel.send(`I've deleted ${msgs.size-=1} ${word}`);
                            }
                            else {
                                return msg.channel.send(`Invalid numbers..`);
                            }
                        }
                    });
                }
            }
        }
    }
});//The code created by @L#7574



client.on("message", message => {

    if (message.content.startsWith(".bbc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });
 
 //كود البرودكاست
 
 client.on("message", message => {

    if (message.content.startsWith(".bc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete();
  };
  });
  

client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    if (message.content.toLowerCase().startsWith(prefix + `help`)) {
      const embed = new Discord.RichEmbed()
      .setTitle(`:mailbox_with_mail: Help`)
      .setColor(0xCF40FA)
      .setDescription(`مرحباٌ! I'm ${client.user.username}, هذا البوت خاص للتذاكر لمساعره فريق العمل و هذه هي الاوامر:`)
      .addField(`Tickets`, `[${prefix}new]() > لفتح تذكره جديده و منشنه اعضاء دعم السرفر \n[${prefix}close]() > لغلق التذكره التي تم فتحها من قبل الدعم`)
      .addField(`Other`, `[${prefix}help]() > لرؤيه قائمه الاوامر \n[${prefix}ping]() > لمعرفه البينق الخاص للبوت \n[${prefix}about]() > لمعرفه كل شي عن البوت`)
      message.channel.send({ embed: embed });
    }
  
    if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
      message.channel.send(`Hoold on!`).then(m => {
      m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
      });
  }
  
  if (message.content.toLowerCase().startsWith(prefix + `new`)) {
      const reason = message.content.split(" ").slice(1).join(" ");
      if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`هذا السيرفر ليس لديه \`Support Team\` صنع رتبة, لذلك لن يتم فتح التذكرة.\nاذا كنت تمتلك administrator, إنشاء اسم بهذا الاسم بالضبط وإعطائه للمستخدمين الذين يمكنهم مشاهدة التذاكر.`);
      if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`انت بالفعل لديك تذكره مفتوحه.`);
      message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
          let role = message.guild.roles.find("name", "Support Team");
          let role2 = message.guild.roles.find("name", "@everyone");
          c.overwritePermissions(role, {
              SEND_MESSAGES: true,
              READ_MESSAGES: true
          });
          c.overwritePermissions(role2, {
              SEND_MESSAGES: false,
              READ_MESSAGES: false
          });
          c.overwritePermissions(message.author, {
              SEND_MESSAGES: true,
              READ_MESSAGES: true
          });
          let mrx = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setAuthor(message.author.tag,message.author.avatarURL)
          .setDescription(`:white_check_mark: تم إنشاء تذكرتك, #${c.name}.`)
          .setTimestamp()
          message.channel.sendEmbed(mrx);
          const embed = new Discord.RichEmbed()
          .setColor(0xCF40FA)
          .addField(`مرحباً ${message.author.username}!`, `من فضلك وضح لماذا قمت بفتح التذكره مع بعض التفاصيل. مسؤلي السرفر سوف يكونوا موجودين في اسرع وقت للمساعده.`)
          .setTimestamp();
          c.send({ embed: embed });
      }).catch(console.error);
  }
  if (message.content.toLowerCase().startsWith(prefix + `close`)) {
      if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`لا يمكنك استخدام أمر الإغلاق خارج قناة التذاكر.`);
  
      message.channel.send(`هل أنت متاكد؟ بمجرد تأكيد, لا يمكنك عكس هذا العمل!!\nللتأكيد ، اكتب \`-confirm\`. سوف ينتهي المهلة خلال 10 ثوانٍ ويتم إلغاؤها.`)
      .then((m) => {
        message.channel.awaitMessages(response => response.content === '-confirm', {
          max: 1,
          time: 10000,
          errors: ['time'],
        })
        .then((collected) => {
            message.channel.delete();
          })
          .catch(() => {
            m.edit('انتهى إغلاق التذاكر ، لم يتم إغلاق التذكرة.').then(m2 => {
                m2.delete();
            }, 3000);
          });
      });
  }
  
  });
  
  client.on('message', message => {
      if (message.content.startsWith(prefix + 'about')) {
      if (message.author.bot) return
      if (!message.guild) return message.reply('**:x: This Command Only In Server**')
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(':mailbox_with_mail: about')
      .setDescription(`I am ${client.user.username}, and I will try my best to help everyone! If I am in a discord server, people can use me to create tickets in order`)
      .setFooter(`${client.user.username}`)
      message.author.sendEmbed(embed)
      }
  });
  
  
  client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**:link:.تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 100**`)


    }
});



client.on('message', message => {
    if(message.content.startsWith(prefix + 'mvall')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
    if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


     }
       });
       
         client.on("message", msg => {
      if(msg.content === '.' + "id") {
          const embed = new Discord.RichEmbed();
      embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
              .addField("🆔| الاي دي :", `${msg.author.id}`, true)
              .setColor("RANDOM")
              .setFooter(msg.author.username , msg.author.avatarURL)
              .setThumbnail(`${msg.author.avatarURL}`)
              .setTimestamp()
              .setURL(`${msg.author.avatarURL}`)
              .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
              .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
              .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
              .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
              .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
          msg.channel.send({embed: embed})
      }
    });
    
    client.on('message' , message => {
  if (message.author.dark) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
      /*let banlog = client.channels.find("name", "ban-log");
  if(!banlog) return message.reply("I've detected that this server doesn't have a ban-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الباند**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني ابند شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);
  message.channel.sendMessage("**لقد تم اعطاء الباند الي شخص بنجاح** ✅");
}
});

  client.on('message', message => {
        var prefix = "#"
      if (message.author.darky) return;
      if (!message.content.startsWith(prefix)) return;
    
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
    
      let args = message.content.split(" ").slice(1);
    
      if (command == "kick") {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
             
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
      if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
      if(!reason) return message.reply ("**اكتب سبب الطرد**");
      if (!message.guild.member(user)
      .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
    
      message.guild.member(user).kick();
       message.channel.sendMessage("**لقد تم اعطاء كيك الي شخص بنجاح** ✅");
    
    
      })
    }
    });
    
    
        client.login(process.env.BOT_TOKEN);
