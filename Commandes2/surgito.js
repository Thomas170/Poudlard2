const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    var niveau_sorts = competence.comp_display(message.author, 1);

    if (args.length < 2){

        if (args[0] != null){
                if ((sortileges.know(message.author, "surgito") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 4 && functions.pv_display(membre) > 0 && functions.pv_display(message.author) > 0 && niveau_sorts >= 5){
                    message.delete();
                    functions.perte_energie(message.author, 5);
                    message.channel.send(`${message.author.username} lance le sort Surgito sur ${membre.user.username} ce qui lui retire tous les enchantements qu'il a sur lui !`);                
            }
        }
    }
};

module.exports.help = {
    name : "surgito"
}
