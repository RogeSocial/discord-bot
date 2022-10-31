const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents : [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})

client.on('ready', () => {
    console.log('The bot is ready');
})

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.reply('pong')
    }
})

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('channelID').send("Welcome")
})

client.login(process.env.TOKEN)