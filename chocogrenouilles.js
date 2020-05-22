const Discord = require('discord.js');

var sorciers = ["Albus Dumbledore", "Helga Poufsouffle", "Salazar Serpentard", "Godric Gryffondor", "Rowena Serdaigle", "Gilderoy Lockhart", "Norbert Dragonneau", 
"Hermione Granger", "Minerva McGonagall", "Harry Potter", "Ron Weasley", "Sirius Black", "Severus Rogue", "Filius Flitwick", "Rubeus Hagrid", "Alastor Maugrey",
"Pomona Chourave", "Tom Jedusor", "Gellert Grindelwald", "Luna Lovegood", "Neville Londubat", "Bellatrix Lestrange", "Drago Malefoy", "Ginny Weasley", "Rolanda Bibine",
"Quirinus Quirrell", "Horace Slughorn", "Cedric Diggory", "Fred Weasley", "George Weasley", "Bartemius Croupton Jr.", "Lucius Malefoy", "Peter Pettigrow", "Barty Croupton Sr.",
"Cornelius Fudge", "Dolores Ombrage", "Remus Lupin", "James Potter", "Lily Potter", "Arthur Weasley", "Molly Weasley", "Nymphadora Tonks", "Regulus Black", "Fenrir Greyback",
"Augustus Rookwood", "Antonin Dolohov"];

var chocogrenouille = []

module.exports = {

    add_sorcier: function(membre){
        var chocogren = [membre.id];
        chocogrenouille.push(chocogren);
    },

    sorcier_exist: function(liste, sorcier){
        res = false;
        var i = 1;
        var find = false;
        var n = liste.length;
        while (i < n && find == false){
            if (liste[i] == "" + sorcier){
                res = true;
                find = true;
            }
            else{
                i = i+1;
            }
        }
        return res;
    },
    
    unlock_on: function(membre, num){
        var sorcier = "" + sorciers[num];
        var i = 0;
        var find = false;
        var n = chocogrenouille.length;
        while (i < n && find == false){
            if (chocogrenouille[i][0] == membre.id){
                if (!this.sorcier_exist(chocogrenouille[i], "" + sorcier)){
                    chocogrenouille[i].push("" + sorcier);
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },


    sorcier_unlock: function(num){
        var sorcier = "" + sorciers[num];
        return sorcier;
    },

    sorcier_number: function(membre){
        var res = 0;
        var i = 0;
        var find = false;
        var n = chocogrenouille.length;
        while (i < n && find == false){
            if (chocogrenouille[i][0] == membre.id){
                res = (chocogrenouille[i].length) - 1;
                find = true;
            }
            else{
                i = i+1;
            }
        }
        return res;
    },

    push_sorcier: function(liste, k){
        var res = "";
        n = liste.length;
        while (k < n){
            var str = "- " + liste[k];
            res = res + "\n" + str;
            k = k+1;
        }
        return res;
    },

    sorciers_liste: function(membre){
        var res = "";
        var i = 0;
        var find = false;
        var n = chocogrenouille.length;
        while (i < n && find == false){
            if (chocogrenouille[i][0] == membre.id){
                res = this.push_sorcier(chocogrenouille[i], 1);
                find = true;
            }
            else{
                i = i+1;
            }
        }
        return res;
    }

}