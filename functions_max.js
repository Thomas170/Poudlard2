const Discord = require('discord.js');

var competence = require('./competence.js');

//niv, pv, en, deg
var maxs = [[1, 30, 20, 0], [2, 35, 22, 1], [3, 40, 24, 2], [4, 45, 26, 3], [5, 50, 28, 4], [6, 55, 30, 5], [7, 60, 32, 6], [8, 65, 35, 8], [9, 70, 37, 10], [10, 75, 40, 12],
            [11, 80, 42, 14], [12, 90, 45, 16], [13, 100, 47, 18], [14, 110, 50, 20], [15, 120, 52, 22], [16, 140, 55, 24], [17, 160, 57, 26], [18, 180, 60, 28], [19, 200, 65, 30], [20, 250, 70, 35]];

var nivs = [];
//[ID, Niveau]

module.exports = {

    nivs_add: function(member){
        var niveau = [member.id, 1];
        nivs.push(niveau);
    },

    pv_max: function (dest){
        var phys_bonus = (competence.comp_display(dest, 3))*3;
        var res = phys_bonus;
        var niveau = 0;
        var find = false;
        var n = nivs.length;
        var i = 0;
        while (i < n && find == false){
            if (nivs[i][0] == dest.id){
                niveau = nivs[i][1];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        res = res + maxs[niveau-1][1];
        return res;
    },

    en_max: function (dest){
        var res = 0;
        var niveau = 0;
        var find = false;
        var n = nivs.length;
        var i = 0;
        while (i < n && find == false){
            if (nivs[i][0] == dest.id){
                niveau = nivs[i][1];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        res = maxs[niveau-1][2];
        return res;
    },

    deg_bonus: function (dest){
        var sort_bonus = (competence.comp_display(dest, 1))*3;
        var res = sort_bonus;
        var niveau = 0;
        var find = false;
        var n = nivs.length;
        var i = 0;
        while (i < n && find == false){
            if (nivs[i][0] == dest.id){
                niveau = nivs[i][1];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        res = res + maxs[niveau-1][3];
        return res;
    },

    niv_display: function (dest){
        var res = 0;
        var find = false;
        var n = nivs.length;
        var i = 0;
        while (i < n && find == false){
            if (nivs[i][0] == dest.id){
                res = nivs[i][1];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    niv_sup: function (dest){
        var find = false;
        var n = nivs.length;
        var i = 0;
        while (i < n && find == false){
            if (nivs[i][0] == dest.id){
                if (nivs[i][1] + 1 < 21){
                    nivs[i][1] = nivs[i][1] + 1;
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    niv_inf: function (dest){
        var find = false;
        var n = nivs.length;
        var i = 0;
        while (i < n && find == false){
            if (nivs[i][0] == dest.id){
                if (nivs[i][1] - 1 > 0){
                    nivs[i][1] = nivs[i][1] - 1;
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    }
};