const Discord = require('discord.js');

var creature = function(name, pv, deg){
    this.name = name;
    this.pv = pv;
    this.deg = deg;
}

var creature_liste = [];

module.exports = {
    create_crea: function (name, pv){
        var element = ["" + name, pv];   
        creature_liste.push(element);
    },

    supp_crea: function (name){
        var find = false;
        var n = creature_liste.length;
        var i = 0;
        while (i < n && find == false){
            if (creature_liste[i][0] == "" + name){
                creature_liste[i] = '';
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    creature_pv: function (name){
        var res = 0;
        var find = false;
        var n = creature_liste.length;
        var i = 0;
        while (i < n && find == false){
            if (creature_liste[i][0] == "" + name){
                res = creature_liste[i][1];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    creature_deg: function(crea, nbr){
        var find = false;
        var n = creature_liste.length;
        var i = 0;
        while (i < n && find == false){
            if (creature_liste[i][0] == "" + crea){
                if ((creature_liste[i][1] - nbr) < 0){
                    creature_liste[i][1] = 0;
                }
                else {
                    creature_liste[i][1] = creature_liste[i][1] - nbr;
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    creature_heal: function(crea, nbr){
        var find = false;
        var n = creature_liste.length;
        var i = 0;
        while (i < n && find == false){
            if (creature_liste[i][0] == "" + crea){
                creature_liste[i][1] = creature_liste[i][1] + nbr;
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },
}