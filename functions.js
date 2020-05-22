const Discord = require('discord.js');

var functions_max = require('./functions_max.js');

var stat = [];
//[ID, PV, Armure, Lancer, EN, Maison, Argent]

var compagnon = [];
//[ID, LE Type, Nom, un type]

var admin = [];
//[ID]

var maison = [["Poufsouffle", 0], ["Gryffondor", 0], ["Serpentard", 0], ["Serdaigle", 0]];

module.exports = {

    sorcier_exist: function(member){
        var res = false;
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == member.id){
                res = true;
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    admin_sup: function(member){
        var res = false;
        var find = false;
        var n = admin.length;
        var i = 0;
        while (i < n && find == false){
            if (admin[i] == member.id){
                admin[i] = '';
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    add_member: function(member){
        var statistiques = [member.id, 30, 0, 1, 20, "Aucune", 0];
        stat.push(statistiques);
    },

    is_admin: function(member){
        var res = false;
        var find = false;
        var n = admin.length;
        var i = 0;
        while (i < n && find == false){
            if (admin[i] == member.id){
                res = true;
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    add_admin: function(member){
        admin.push(member.id);
    },

    change_house: function(member, house){
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == member.id){
                stat[i][5] = "" + house;
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    add_compagnon: function(member){
        var compa = [member.id, "", "", ""];
        compagnon.push(compa);
    },

    changename_compagnon: function(member, name){
        var find = false;
        var n = compagnon.length;
        var i = 0;
        while (i < n && find == false){
            if (compagnon[i][0] == member.id){
                compagnon[i][2] = "" + name;
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    change_thetype_compagnon: function(member, thetype){
        var find = false;
        var n = compagnon.length;
        var i = 0;
        while (i < n && find == false){
            if (compagnon[i][0] == member.id){
                compagnon[i][1] = "" + thetype;
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    change_atype_compagnon: function(member, atype){
        var find = false;
        var n = compagnon.length;
        var i = 0;
        while (i < n && find == false){
            if (compagnon[i][0] == member.id){
                compagnon[i][3] = "" + atype;
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    degat: function (lanceur, dest, nbr0) {
        var nbr = nbr0 + functions_max.deg_bonus(lanceur);
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                if (stat[i][2] > 0){
                    if ((stat[i][2] - nbr) < 0){
                        stat[i][2] = 0; 
                        nbr = nbr - stat[i][2];
                        if ((stat[i][1] - nbr) < 0){
                            stat[i][1] = 0; 
                        }
                        else {
                            stat[i][1] = stat[i][1] - nbr;
                        }
                    }
                    else {
                        stat[i][2] = stat[i][2] - nbr;
                    }
                }
                else {
                    if ((stat[i][1] - nbr) < 0){
                        stat[i][1] = 0; 
                    }
                    else {
                        stat[i][1] = stat[i][1] - nbr;
                    }
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    degat_id: function (lanceur, dest, nbr0) {
        var nbr = nbr0 + functions_max.deg_bonus(lanceur);
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == '' + dest){
                if (stat[i][2] > 0){
                    if ((stat[i][2] - nbr) < 0){
                        stat[i][2] = 0; 
                        nbr = nbr - stat[i][2];
                        if ((stat[i][1] - nbr) < 0){
                            stat[i][1] = 0; 
                        }
                        else {
                            stat[i][1] = stat[i][1] - nbr;
                        }
                    }
                    else {
                        stat[i][2] = stat[i][2] - nbr;
                    }
                }
                else {
                    if ((stat[i][1] - nbr) < 0){
                        stat[i][1] = 0; 
                    }
                    else {
                        stat[i][1] = stat[i][1] - nbr;
                    }
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    degat_norm: function (dest, nbr) {
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                if (stat[i][2] > 0){
                    if ((stat[i][2] - nbr) < 0){
                        stat[i][2] = 0; 
                        nbr = nbr - stat[i][2];
                        if ((stat[i][1] - nbr) < 0){
                            stat[i][1] = 0; 
                        }
                        else {
                            stat[i][1] = stat[i][1] - nbr;
                        }
                    }
                    else {
                        stat[i][2] = stat[i][2] - nbr;
                    }
                }
                else {
                    if ((stat[i][1] - nbr) < 0){
                        stat[i][1] = 0; 
                    }
                    else {
                        stat[i][1] = stat[i][1] - nbr;
                    }
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    entierAleatoire: function(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;   
    },

    add_point: function (dest, nbr){
        var house = "";
        if(dest.roles.cache.some(r => r.name === "Poufsouffle")){
            house = "Poufsouffle"
        }
        if(dest.roles.cache.some(r => r.name === "Gryffondor")){
            house = "Gryffondor"
        }
        if(dest.roles.cache.some(r => r.name === "Serpentard")){
            house = "Serpentard"
        }
        if(dest.roles.cache.some(r => r.name === "Serdaigle")){
            house = "Serdaigle"
        }
        var find = false;
        var m = maison.length;
        var j = 0;
        while (j < m && find == false){
            if (maison[j][0] == house){
                maison[j][1] = maison[j][1] + nbr;
                find = true;
            }
            else {
                j = j+1;
            }
        }
    },

    takeoff_point: function (dest, nbr){
        var house = "";
        if(dest.roles.cache.some(r => r.name === "Poufsouffle")){
            house = "Poufsouffle"
        }
        if(dest.roles.cache.some(r => r.name === "Gryffondor")){
            house = "Gryffondor"
        }
        if(dest.roles.cache.some(r => r.name === "Serpentard")){
            house = "Serpentard"
        }
        if(dest.roles.cache.some(r => r.name === "Serdaigle")){
            house = "Serdaigle"
        }
        var find = false;
        var m = maison.length;
        var j = 0;
        while (j < m && find == false){
            if (maison[j][0] == house && maison[j][1] - nbr >= 0){
                maison[j][1] = maison[j][1] - nbr;
                find = true;
            }
            else {
                j = j+1;
            }
        }
    },

    maison_display: function (dest){
        var house = ""
        if(dest.roles.cache.some(r => r.name === "Poufsouffle")){
            house = "Poufsouffle"
        }
        if(dest.roles.cache.some(r => r.name === "Gryffondor")){
            house = "Gryffondor"
        }
        if(dest.roles.cache.some(r => r.name === "Serpentard")){
            house = "Serpentard"
        }
        if(dest.roles.cache.some(r => r.name === "Serdaigle")){
            house = "Serdaigle"
        }
        return house;
    },

    maison_points: function (house){
        var res = 0
        var find = false;
        var n = maison.length;
        var i = 0;
        while (i < n && find == false){
            if (maison[i][0] == house){
                res = maison[i][1];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    argent_display: function (dest){
        var res = 0
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                res = stat[i][6];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    pv_display: function (dest){
        var res = 20
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                res = stat[i][1];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    en_display: function (dest){
        var res = 20
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                res = stat[i][4];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    en_cycle: function (){
        var n = stat.length;
        var i = 0;
        while (i < n){
            if ((stat[i][4] + 3) > 20){
                stat[i][4] = 20;
            }
            else {
                stat[i][4] = stat[i][4] + 3;
            }
            i = i+1;
        }
    }, 

    argent_cycle: function (){
        var n = stat.length;
        var i = 0;
        while (i < n){
            stat[i][6] = stat[i][6] + 10;
            i = i+1;
        }
    }, 

    gain_argent: function (dest, nbr) {
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                stat[i][6] = stat[i][6] + nbr;
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    perte_argent: function (dest, nbr) {
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                if ((stat[i][6] - nbr) < 0){
                    stat[i][6] = 0;
                }
                else {
                    stat[i][6] = stat[i][6] - nbr;
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    gain_energie: function (dest, nbr) {
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                if ((stat[i][4] + nbr) > functions_max.en_max(dest)){
                    stat[i][4] = functions_max.en_max(dest);
                }
                else {
                    stat[i][4] = stat[i][4] + nbr;
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    perte_energie: function (dest, nbr) {
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                if ((stat[i][4] - nbr) < 0){
                    stat[i][4] = 0;
                }
                else {
                    stat[i][4] = stat[i][4] - nbr;
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    armure_display: function (dest){
        var res = 0
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                res = stat[i][2];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    heal: function (lanceur, dest, nbr0) {
        var nbr = nbr0 + functions_max.deg_bonus(lanceur);
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                if ((stat[i][1] + nbr) > functions_max.pv_max(dest)){
                    stat[i][1] = functions_max.pv_max(dest);
                }
                else {
                    stat[i][1] = stat[i][1] + nbr;
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    heal_norm: function (dest, nbr) {
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                if ((stat[i][1] + nbr) > functions_max.pv_max(dest)){
                    stat[i][1] = functions_max.pv_max(dest);
                }
                else {
                    stat[i][1] = stat[i][1] + nbr;
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    revi: function (lanceur, dest, nbr0) {
        nbr = nbr0 + functions_max.deg_bonus(lanceur);
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                if ((stat[i][4] + nbr) > functions_max.en_max(dest)){
                    stat[i][4] = functions_max.en_max(dest);
                }
                else {
                    stat[i][4] = stat[i][4] + nbr;
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    armure: function (lanceur, dest, nbr0) {
        var nbr = nbr0 + functions_max.deg_bonus(lanceur);
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                stat[i][2] = stat[i][2] + nbr;
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    armure_res: function (dest) {
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                stat[i][2] = 0;
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    vie: function (dest) {
        var res = 0;
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                if (stat[i][1] == 0){
                    res = 1;
                }
                if (stat[i][1] == functions_max.pv_max(dest)){
                    res = 2;
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    lancer: function (dest) {
        var res = true;
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                if (stat[i][3] == 0){
                    res = false;
                }
                if (stat[i][3] == 1){
                    res = true;
                }
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },  

    etourd_on: function (dest) {
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                stat[i][3] = 0;
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },  

    etourd_off: function (dest) {
        var find = false;
        var n = stat.length;
        var i = 0;
        while (i < n && find == false){
            if (stat[i][0] == dest.id){
                stat[i][3] = 1;
                find = true;
            }
            else {
                i = i+1;
            }
        }
    },

    name_animal: function (dest){
        var res = "";
        var find = false;
        var n = compagnon.length;
        var i = 0;
        while (i < n && find == false){
            if (compagnon[i][0] == dest.id){
                res = `${compagnon[i][2]}`;
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    }, 
    
    thetype_animal: function (dest){
        var res = "";
        var find = false;
        var n = compagnon.length;
        var i = 0;
        while (i < n && find == false){
            if (compagnon[i][0] == dest.id){
                res = `${compagnon[i][1]}`;
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    atype_animal: function (dest){
        var res = "";
        var find = false;
        var n = compagnon.length;
        var i = 0;
        while (i < n && find == false){
            if (compagnon[i][0] == dest.id){
                res = `${compagnon[i][3]}`;
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    }
};