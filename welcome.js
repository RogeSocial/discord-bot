module.exports = client => {
    const channelID = '1036677908426670080';
    client.on('guildMemberAdd', member => {
        console.log(member);

        const message = `Welcome to the server, <@${member.id}> !`;

        const channel = member.guild.channels.cache.get(channelID);

        channel.send(message);
    })
}