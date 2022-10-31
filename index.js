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
    if (message.content === '!quote') {
        message.reply('Better to cum in the sink than to sink in the cum!')
    }
    if (message.content === '!uc') {
        message.reply('UC is the greatest resource on the earth that will grant you unlimited power')
    }
})

client.login(process.env.TOKEN)