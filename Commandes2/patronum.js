const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var patronus = require('../patronus.js');
var competence = require('../competence.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    var niveau_sorts = competence.comp_display(message.author, 1);
    var animal = patronus.display_patronus(message.author);

    if (args.length < 2){
        if (args[0] == null){
                if ((sortileges.know(message.author, "patronum") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 12 && functions.pv_display(message.author) > 0 && niveau_sorts >= 5){
                    message.delete();
                    functions.perte_energie(message.author, 12);
                    message.channel.send(`${message.author.username} lance le sort Expecto Patronum ce qui le protège complètement et c'est ${animal} !`);
                    functions.armure(message.author, message.author, 5000);
                    setTimeout(functions.armure_res, 60000, message.author);
                    functions.etourd_on(message.author);
                    setTimeout(functions.etourd_off, 60000, message.author);
            }
        }
    }
};

module.exports.help = {
    name : "patronum"
}
