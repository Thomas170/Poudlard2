const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    var niveau_sorts = competence.comp_display(message.author, 1);

    if (args.length < 2){

        if (args[0] == null){
                if ((sortileges.know(message.author, "piertotum") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 10 && functions.pv_display(message.author) > 0 && niveau_sorts >= 6){
                    message.delete();
                    functions.perte_energie(message.author, 10);
                    message.channel.send(`${message.author.username} lance le sort Piertotum Locomotor sur la statue ce qui lui donne la vie !`);
                }
        }
    }
};

module.exports.help = {
    name : "piertotum"
}