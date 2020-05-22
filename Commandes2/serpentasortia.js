const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');

module.exports.run = async(client, message, args) => {

    var niveau_sorts = competence.comp_display(message.author, 1);

        if (args.length == 0){
            if (args[0] != null){
                if ((sortileges.know(message.author, "serpentasortia") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 7 && functions.pv_display(message.author) > 0 && niveau_sorts >= 3){
                    message.delete();
                    functions.perte_energie(message.author, 7);
                    message.channel.send(`${message.author.username} lance le sort Serpentasortia ce qui fait apparaître un serpent !`);
                }
            }
        }
};

module.exports.help = {
    name : "serpentasortia"
}