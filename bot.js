const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Akram");


client.on("ready", () => {
let channel =     client.channels.get("559409061167366155")
setInterval(function() {
channel.send(`Akram Akram Akram`);
}, 2500)
})

client.login(process.env.BOT_TOKEN);
