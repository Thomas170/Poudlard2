const Discord = require('discord.js');

var patronus = [];
//[ID, Patronus]

module.exports = {

    add_patronus: function(member){
        var patro = [member.id, ""];
        patronus.push(patro);
    },

    change_patronus: function(member, patro){
        var find = false;
        var n = patronus.length;
        var i = 0;
        while (i < n && find == false){
            if (patronus[i][0] == member.id){
                patronus[i][1] = "" + patro;
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    display_patronus: function(member){
        var res = 0;
        var find = false;
        var n = patronus.length;
        var i = 0;
        while (i < n && find == false){
            if (patronus[i][0] == member.id){
                res = "" + patronus[i][1];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    }
};