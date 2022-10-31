const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')
const welcome = require('./welcome.js')

const client = new Client({
    intents : [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
})

client.on('ready', () => {
    console.log('The bot is ready');

    welcome(client);
    
})

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.reply('pong')
    }
})

client.login(process.env.TOKEN)