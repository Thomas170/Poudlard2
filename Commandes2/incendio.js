const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');

module.exports.run = async(client, message, args) => {

    var niveau_sorts = competence.comp_display(message.author, 1);
    const membre = message.mentions.members.first() || message.member;

        if (args.length > 0){
            if (args[0] != null){
                if ((sortileges.know(message.author, "incendio") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 5 && functions.pv_display(message.author) > 0 && niveau_sorts >= 2){
                    message.delete();
                    functions.perte_energie(message.author, 5);
                    message.channel.send(`${message.author.username} lance le sort Incendio sur ${args[0]} ce qui fait jaillir du feu !`);
                    if (membre.id != message.author.id){
                        setTimeout(functions.degat, 5000, message.author, membre, 2);
                        setTimeout(functions.degat, 10000, message.author, membre, 2);
                        setTimeout(functions.degat, 15000, message.author, membre, 2);
                        if (functions.vie(args[0]) == 1){
                            message.channel.send(`${args[0]} est KO`);
                        }
                    }
                }
            }
        }
};

module.exports.help = {
    name : "incendio"
}