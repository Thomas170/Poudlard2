const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');

module.exports.run = async(client, message, args) => {

    var niveau_sorts = competence.comp_display(message.author, 1);
    const membre = message.mentions.members.first() || message.member;

        if (args.length > 0){
            if (args[0] != null){
                if ((sortileges.know(message.author, "endoloris") || functions.is_admin(message.author)) && functions.lancer(message.author) && functions.en_display(message.author) >= 7 && functions.pv_display(message.author) > 0 && niveau_sorts >= 3){
                    message.delete();
                    functions.perte_energie(message.author, 7);
                    message.channel.send(`${message.author.username} lance le sort Endoloris sur ${membre.use.username} ce qui le fait extrêmement souffrir !`);
                    setTimeout(functions.degat, 5000, message.author, membre, 3);
                    setTimeout(functions.degat, 10000, message.author, membre, 3);
                    setTimeout(functions.degat, 15000, message.author, membre, 3);
                    setTimeout(functions.degat, 20000, message.author, membre, 3);
                    setTimeout(functions.degat, 25000, message.author, membre, 3);
                    setTimeout(functions.degat, 30000, message.author, membre, 3);
                    setTimeout(functions.degat, 35000, message.author, membre, 3);
                    setTimeout(functions.degat, 40000, message.author, membre, 3);
                    setTimeout(functions.degat, 45000, message.author, membre, 3);
                    setTimeout(functions.degat, 50000, message.author, membre, 3);
                    if (functions.vie(membre) == 1){
                        message.channel.send(`${args[0]} est KO`);
                    }
                }
            }
        }
};

module.exports.help = {
    name : "endoloris"
}