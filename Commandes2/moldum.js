const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');

module.exports.run = async(client, message, args) => {

    var niveau_sorts = competence.comp_display(message.author, 1);

        if (args.length > 0){
            if (args[0] != null){
                if ((sortileges.know(message.author, "moldum") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                    message.delete();
                    var argu = message.content.split ("") .slice (8);
                    var msge = argu.join ('');
                    functions.perte_energie(message.author, 3);
                    message.channel.send(`${message.author.username} lance le sort Repello Moldum sur ${msge} ce qui lui fait se rappeler de quelque chose qui lui donne envie de partir !`);
                }
            }
        }
};

module.exports.help = {
    name : "moldum"
}