const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on('message',function(message){
console.log(message.member.user.tag);
    if(message.member.user.tag === "Nico ksx98#0787"){
        message.channel.send(":eyes:",{files:["test.jpg"]})
    if(message.member.user.tag === "MangousteJR#6098"){
        message.channel.send(":eyes:")
        
    }
})
//Nico ksx98#0787

bot.login(process.env.TOKEN);
