const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');

module.exports.run = async(client, message, args) => {

    var niveau_sorts = competence.comp_display(message.author, 1);
    var membre1 = '' + args[0];
    var membre2 = '' + args[1];
    var membre3 = '' + args[2];

        if (args.length > 0){
            if (args[0] != null){
                if ((sortileges.know(message.author, "bombarda") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 10 && functions.pv_display(message.author) > 0 && niveau_sorts >= 5){
                    message.delete();
                    functions.perte_energie(message.author, 10);
                    message.channel.send(`${message.author.username} lance le sort Bombarda ce qui créée une explosion !`);
                    functions.degat_id(message.author, membre1, 5);
                    functions.degat_id(message.author, membre2, 5);
                    functions.degat_id(message.author, membre3, 5);
                }
            }
        }
};

module.exports.help = {
    name : "bombarda"
}
