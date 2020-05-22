const Discord = require('discord.js');

var comp = [];
//[ID, Sortilège, Potion, Physique, Nature, Connaissance, Commerce, Vol]

module.exports = {

    add_comp: function(member){
        var competence = [member.id, 0, 0, 0, 0, 0, 0, 0];
        comp.push(competence);
    },

    comp_display: function (dest, compet){
        var res = 0;
        var find = false;
        var n = comp.length;
        var i = 0;
        while (i < n && find == false){
            if (comp[i][0] == dest.id){
                res = comp[i][compet];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    comp_sup: function (dest, place){
        var find = false;
        var n = comp.length;
        var i = 0;
        while (i < n && find == false){
            if (comp[i][0] == dest.id){
                if (comp[i][place] + 1 < 8){
                    comp[i][place] = comp[i][place] + 1;
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    comp_inf: function (dest, place){
        var find = false;
        var n = comp.length;
        var i = 0;
        while (i < n && find == false){
            if (comp[i][0] == dest.id){
                if (comp[i][place] - 1 >= 0){
                    comp[i][place] = comp[i][place] - 1;
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    }
};