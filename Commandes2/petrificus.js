const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;

    var niveau_sorts = competence.comp_display(message.author, 1);

    if (args.length < 2){
        if (args[0] != null){
                if ((sortileges.know(message.author, "petrificus") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 10 && functions.pv_display(message.author) > 0 && niveau_sorts >= 4){
                    message.delete();
                    functions.perte_energie(message.author, 10);
                    message.channel.send(`${message.author.username} lance le sort Petrificus sur ${membre.user.username} ce qui l'empêche de faire n'importe quelle action !`);
                    functions.etourd_on(membre);
                    setTimeout(functions.etourd_off, 60000, membre);
            }
        }
    }
};

module.exports.help = {
    name : "petrificus"
}
