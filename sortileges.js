const Discord = require('discord.js');

var sorts = [["amplificatum"], ["accio"], ["lumos"], ["alohomora"], ["leviosa"], ["stupefix"], ["petrificus"], ["protego"], ["expelliarmus"], ["patronum"], ["impero"], ["avada"], ["endoloris"],
["vulnera"], ["incendio"], ["enervatum"], ["revigor"], ["collaporta"], ["destructum"], ["diffindo"], ["evanesco"], ["failamalle"], ["vera"], ["finit"], ["flambois"], ["legilimens"], ["mobilicorpus"], ["mosmordre"], ["nox"], ["oubliette"], ["recurvite"],
["reducto"], ["reparo"], ["riddikulus"], ["rictuscempra "], ["serpentasortia"], ["silencio"], ["sonorus"], ["sectumsempra"], ["horcruxio"], ["feudeymon"], ["aguamenti"], ["aparecium"], ["arresto "], ["avis"], ["bombarda"], ["confringo"], ["duro"], ["episkey"],
["everte"], ["nebulus"], ["orchideus"], ["piertotum"], ["diabolica"], ["moldum"], ["revelio"], ["surgito"], ["specialis"], ["repulso"], ["glacius"], ["lièvrétafors"], ["karnapalmus"], ["rongifors"], ["ventus"], ["volatilors"], ["inferius"], ["meteorribilis"], ["pelote"]];

module.exports = {
    add_sorcier: function(membre){
        var sort = [membre.id, 0];
        sorts[0].push(sort);
        sorts[1].push(sort);
        sorts[2].push(sort);
        sorts[3].push(sort);
        sorts[4].push(sort);
        sorts[5].push(sort);
        sorts[6].push(sort);
        sorts[7].push(sort);
        sorts[8].push(sort);
        sorts[9].push(sort);
        sorts[10].push(sort);
        sorts[11].push(sort);
        sorts[12].push(sort);
        sorts[13].push(sort);
        sorts[14].push(sort);
        sorts[15].push(sort);
    },
    
    unlock_on: function(membre, sort){
        var i = 0;
        var i_final = 0;
        var find = false;
        var n = sorts.length;
        while (i < n && find == false){
            if (sorts[i][0] == "" + sort){
                i_final = i;
                find = true;
            }
            else {
                i = i+1;
            }
        }
        var j = 1;
        var find2 = false;
        var m = sorts[i_final].length;
        while (j < m && find2 == false){
            if (sorts[i_final][j][0] == membre.id){
                sorts[i_final][j][1] = 1;
                find2 = true;
            }
            else {
                j = j+1;
            }
        }
    },

    unlock_off: function(membre, sort){
        var i = 0;
        var i_final = 0;
        var find = false;
        var n = sorts.length;
        while (i < n && find == false){
            if (sorts[i][0] == "" + sort){
                i_final = i;
                find = true;
            }
            else {
                i = i+1;
            }
        }
        var j = 1;
        var find2 = false;
        var m = sorts[i_final].length;
        while (j < m && find2 == false){
            if (sorts[i_final][j][0] == membre.id){
                sorts[i_final][j][1] = 0;
                find2 = true;
            }
            else {
                j = j+1;
            }
        }
    },

    know: function(membre, sort){
        res = false;
        var i = 0;
        var i_final = 0;
        var find = false;
        var n = sorts.length;
        while (i < n && find == false){
            if (sorts[i][0] == "" + sort){
                i_final = i;
                find = true;
            }
            else {
                i = i+1;
            }
        }
        var j = 1;
        var find2 = false;
        var m = sorts[i_final].length;
        while (j < m && find2 == false){
            if (sorts[i_final][j][0] == membre.id){
                if (sorts[i_final][j][1] == 1){
                    res = true;
                }
                find2 = true;
            }
            else {
                j = j+1;
            }
        }
        return res;
    }
}