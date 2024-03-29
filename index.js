const Discord = require("discord.js")
require("dotenv").config()
const generateImage = require("./generateImage")
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("messageCreate", (message) => {
    if(message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.on("messageCreate", (message) => {
    if(message.content == "ily"){
        message.reply("ilyt")
    }
})

const welcomeChannelId = "914186607471525951"
client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)