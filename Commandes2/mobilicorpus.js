const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');

module.exports.run = async(client, message, args) => {

    var niveau_sorts = competence.comp_display(message.author, 1);
    const membre = message.mentions.members.first() || message.member;

        if (args.length > 0){
            if (args[0] != null){
                if ((sortileges.know(message.author, "mobilicorpus") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 15 && functions.pv_display(message.author) > 0 && niveau_sorts >= 7){
                    message.delete();
                    functions.perte_energie(message.author, 7);
                    functions.etourd_off(membre);
                    message.channel.send(`${message.author.username} lance le sort Mobilicorpus sur ${membre.user.username} ce qui lui permet de faire des actions à nouveau !`);
                }
            }
        }
};

module.exports.help = {
    name : "mobilicorpus"
}