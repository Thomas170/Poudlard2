const Discord = require('discord.js');

var functions = require('../functions.js');
var sortileges = require('../sortileges.js');
var competence = require('../competence.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    var niveau_sorts = competence.comp_display(message.author, 1);

    if (args.length < 2){

        if (args[0] == "Potion_de_soin"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Poudre_rouge + Sangsues`);
            }
        }
        if (args[0] == "Potion_d'energie"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Poudre_bleue + Tentacules_de_Murlap`);
            }
        }
        if (args[0] == "Potion_de_mort"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Asphodèle + Racine_de_valériane + Mucus_de_Veracrasse`);
            }
        }
        if (args[0] == "Potion_de_poison"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Peau_de_serpent + Asphodèle`);
            }
        }
        if (args[0] == "Philtre_de_confusion"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Achillée + Livèche`);
            }
        }
        if (args[0] == "Polynectar"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Sangsues + Peau_de_serpent + Chrysopes_cuites`);
            }
        }
        if (args[0] == "Felix_Felicis"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Oeuf_de_Serpencendre + Tentacules_de_Murlap + Pourdre_de_Ruta`);
            }
        }
        if (args[0] == "Amortentia"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Oeuf_de_Serpencendre + Poudre_rouge + Poudre_bleue`);
            }
        }
        if (args[0] == "Potion_de_l'oeil_vif"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Crochet_de_serpent + Aconit`);
            }
        }
        if (args[0] == "Potion_anti_furoncles"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Crochet_de_serpent + Limaces_à_cornes`);
            }
        }
        if (args[0] == "Potion_d'amnésie"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Racine_de_valériane + Armoise`);
            }
        }
        if (args[0] == "Elixir_d'euphorie"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Menthe_poivrée + Armoise`);
            }
        }
        if (args[0] == "Potion_d'aiguise_méninges"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Mandragore + Achillée`);
            }
        }
        if (args[0] == "Philtre_de_paix"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Mandragore + Poudre_bleue + Racine_de_valériane`);
            }
        }
        if (args[0] == "Veritaserum"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Mucus_de_veracrasse + Armoise + Aconit`);
            }
        }
        if (args[0] == "Elixir_éternel"){
            if ((sortileges.know(message.author, "specialis") || functions.is_admin(message.author) || message.member.roles.cache.some(r => r.name === "Professeur")) && functions.lancer(message.author) && functions.en_display(message.author) >= 3 && functions.pv_display(message.author) > 0 && niveau_sorts >= 1){
                message.delete();
                functions.perte_energie(message.author, 3);
                message.channel.send(`${message.author.username} lance le sort Specialis Revelio sur ${args[0]} et révèle sa recette qui est : Menthe_poivrée + Poudre_rouge + Limaces_à_cornes`);
            }
        }
    }
};

module.exports.help = {
    name : "specialis"
}
