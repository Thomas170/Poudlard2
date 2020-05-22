const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');
var inventaire = require('../inventaire.js');

module.exports.run = async(client, message, args) => {

    var niveau_sorts = competence.comp_display(message.author, 1);
    var objet2 = inventaire.item_inv(message.author, 2);
    var objet3 = inventaire.item_inv(message.author, 3);
    var objet4 = inventaire.item_inv(message.author, 4);
    var objet5 = inventaire.item_inv(message.author, 5);
    var objet6 = inventaire.item_inv(message.author, 6);
    var objet7 = inventaire.item_inv(message.author, 7);
    var objet8 = inventaire.item_inv(message.author, 8);
    var objet9 = inventaire.item_inv(message.author, 9);
    var objet10 = inventaire.item_inv(message.author, 10);

        if (args.length == 0){
            if (args[0] != null){
                if ((sortileges.know(message.author, "failamalle") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 1 && functions.pv_display(message.author) > 0 && niveau_sorts >= 0){
                    message.delete();
                    functions.perte_energie(message.author, 1);

                    if (objet2 != "vide"){
                        inventaire.malle_add(message.author, objet2);
                        inventaire.inv_supp(2, message.author);
                    }
                    if (objet3 != "vide"){
                        inventaire.malle_add(message.author, objet3);
                        inventaire.inv_supp(3, message.author);
                    }
                    if (objet4 != "vide"){
                        inventaire.malle_add(message.author, objet4);
                        inventaire.inv_supp(4, message.author);
                    }
                    if (objet5 != "vide"){
                        inventaire.malle_add(message.author, objet5);
                        inventaire.inv_supp(5, message.author);
                    }
                    if (objet6 != "vide"){
                        inventaire.malle_add(message.author, objet6);
                        inventaire.inv_supp(6, message.author);
                    }
                    if (objet7 != "vide"){
                        inventaire.malle_add(message.author, objet7);
                        inventaire.inv_supp(7, message.author);
                    }
                    if (objet8 != "vide"){
                        inventaire.malle_add(message.author, objet8);
                        inventaire.inv_supp(8, message.author);
                    }
                    if (objet9 != "vide"){
                        inventaire.malle_add(message.author, objet9);
                        inventaire.inv_supp(9, message.author);
                    }
                    if (objet10 != "vide"){
                        inventaire.malle_add(message.author, objet10);
                        inventaire.inv_supp(10, message.author);
                    }                    

                    message.channel.send(`${message.author.username} lance le sort Failamalle ce qui range tout son inventaire dans sa malle !`);
                }
            }
        }
};

module.exports.help = {
    name : "failamalle"
}