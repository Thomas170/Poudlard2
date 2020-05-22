const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    var niveau_sorts = competence.comp_display(message.author, 1);

    var energie = functions.en_display(membre);

    if (args.length < 2 && functions.pv_display(membre) == 0){
        if (args[0] != null){
                if ((sortileges.know(message.author, "vampirio") || functions.is_admin(message.author)) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 7){
                    message.delete();
                    functions.perte_energie(message.author, 3);
                    functions.gain_energie(message.author, Number(energie));
                    functions.perte_energie(membre, Number(energie));
                    message.channel.send(`${message.author.username} lance le sort Vampirio sur ${membre.user.username} et lui aspire l'énergie qu'il lui reste !`);
            }
        }
    }
};

module.exports.help = {
    name : "vampirio"
}
