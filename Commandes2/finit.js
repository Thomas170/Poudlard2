const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    var niveau_sorts = competence.comp_display(message.author, 1);


    if (args.length < 2){
        if (args[0] == null){
                if ((sortileges.know(message.author, "finit") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 5 && functions.pv_display(message.author) > 0 && niveau_sorts >= 3){
                    message.delete();
                    functions.perte_energie(message.author, 5);
                    message.channel.send(`${message.author.username} lance le sort Finit ce qui le protège des sorts !`);
                    functions.armure(message.author, membre, 30);
                    setTimeout(functions.armure_res, 10000, membre);
            }
        }
    }
};

module.exports.help = {
    name : "finit"
}
