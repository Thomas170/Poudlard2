const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');

module.exports.run = async(client, message, args) => {

    var niveau_sorts = competence.comp_display(message.author, 1);
    const membre = message.mentions.members.first() || message.member;

        if (args.length > 0){
            if (args[0] != null){
                if ((sortileges.know(message.author, "stupefix") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 7 && functions.pv_display(message.author) > 0 && niveau_sorts >= 3){
                    message.delete();
                    functions.perte_energie(message.author, 7);
                    message.channel.send(`${message.author.username} lance le sort Stupéfix sur ${membre.use.username} ce qui lui inflige des dégâts !`);
                    functions.degat(message.author, membre, 10);
                    if (functions.vie(membre) == 1){
                        message.channel.send(`${args[0]} est KO`);
                    }
                }
            }
        }
};

module.exports.help = {
    name : "stupefix"
}
