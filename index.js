const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "w!";

client.on("message", message => {

if (message.content.startsWith(prefix + "dm")) {
if (!message.member.hasPermission("ADMINISTRATOR"))  return;
let args = message.content.split(" ").slice(1);
var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` **MESSAGE SENT** `); 
 message.delete(); 
};     
});


client.on('ready',()=>{
    console.log('A WEEB JOINED THE CHAT.');
    let statuses = [
        " Lilgovo ",
        " Join Lilgovo's server - https://discord.gg/2wwqqPQ",
        " Subscribe to lilgovo https://youtube.com/lilgovo " // U can add another
        
    ]
    setInterval(function(){
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            client.user.setActivity(status, {type:"WATCHING"})
    
        }, 3000) //Seconds to Random



});

client.login("NzUyMTUzMTkyNDQzNDEyNjAw.X1TfPw.-U1L5XEz2SD0K5ZeJW6R8P8sQEs");