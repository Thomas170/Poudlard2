const Discord = require('discord.js');

var mages_noir = [];
//[ID, Nom]

var mangemorts = [];
//[ID, Nom]

var disciples = [];
//[ID, Nom]

module.exports = {

    mage_sup: function(member){
        var res = false;
        var find = false;
        var n = mages_noir.length;
        var i = 0;
        while (i < n && find == false){
            if (mages_noir[i][0] == member.id){
                mages_noir[i] = [];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    is_mage: function(member){
        var res = false;
        var find = false;
        var n = mages_noir.length;
        var i = 0;
        while (i < n && find == false){
            if (mages_noir[i][0] == member.id){
                res = true;
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    add_mage: function(member){
        mages_noir.push([member.id, `${member.user.username}`]);
    },

    mangemort_sup: function(member){
        var res = false;
        var find = false;
        var n = mangemorts.length;
        var i = 0;
        while (i < n && find == false){
            if (mangemorts[i][0] == member.id){
                mangemorts[i] = [];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    is_mangemort: function(member){
        var res = false;
        var find = false;
        var n = mangemorts.length;
        var i = 0;
        while (i < n && find == false){
            if (mangemorts[i][0] == member.id){
                res = true;
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    add_mangemort: function(member){
        mangemorts.push([member.id, `${member.user.username}`]);
    },

    disciple_sup: function(member){
        var res = false;
        var find = false;
        var n = disciples.length;
        var i = 0;
        while (i < n && find == false){
            if (disciples[i][0] == member.id){
                disciples[i] = [];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    is_disciple: function(member){
        var res = false;
        var find = false;
        var n = disciples.length;
        var i = 0;
        while (i < n && find == false){
            if (disciples[i][0] == member.id){
                res = true;
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    add_disciple: function(member){
        disciples.push([member.id, `${member.user.username}`]);
    },

    push_liste: function(liste){
        var res = "";
        var k = 0;
        n = liste.length;
        while (k < n){
            var str = "- " + liste[k][1];
            res = res + "\n" + str;
            k = k+1;
        }
        return res;
    },

    mage_liste: function(){
        var res = "";
        res = this.push_liste(mages_noir);
        return res;
    },

    mangemort_liste: function(){
        var res = "";
        res = this.push_liste(mangemorts);
        return res;
    },

    disciple_liste: function(){
        var res = "";
        res = this.push_liste(disciples);
        return res;
    },
}