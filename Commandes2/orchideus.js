const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');
var inventaire = require('../inventaire.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    var niveau_sorts = competence.comp_display(message.author, 1);

    if (args.length < 2){

        if (args[0] == null){
                if ((sortileges.know(message.author, "orchideus") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 2 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                    message.delete();
                    functions.perte_energie(message.author, 2);
                    inventaire.inv_add(message.author, "Fleurs");
                    message.channel.send(`${message.author.username} lance le sort Orchideus et ce qui fait apparaître des fleurs !`);
                }
        }
    }
};

module.exports.help = {
    name : "orchideus"
}

