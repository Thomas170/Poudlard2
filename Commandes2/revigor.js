const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');


module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;


    if (args.length < 2){
        if (args[0] != null){
                if ((sortileges.know(message.author, "revigor") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.pv_display(message.author) > 0){
                    message.delete();
                    message.channel.send(`${message.author.username} lance le sort Revigor sur ${membre.user.username} ce qui lui rend de l'énergie !`);
                    functions.revi(message.author, membre, 5);
            }
        }
    }
};

module.exports.help = {
    name : "revigor"
}
