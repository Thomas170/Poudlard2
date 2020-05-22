const Discord = require('discord.js');

var inventaire = [];
//[ID, case1, case2, case3, case4, case5, case6, case7, case8, case9, case10]

var malles = [];
//[ID, case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, case11, case12, case13, case14, case15, case16, case17, case18, case19, case20]

var items = ["Balai_Nimbus", "Balai_Friselune", "Balai_Flèche_d'Argent", "Balai_Etoile_Filante", "Balai_Eclair_de_Feu", "Balai_Comète", //Balais
            "Pomme", "Pain", "Poulet", "Bière", "Chocogrenouille", "Bézoard", //Nourriture
            "Masque_de_mangemort", "Cape_de_mage_noir", "Bague", "Diadème", "Pendentif", "Couronne", "Médaillon", "Bracelet", "Capuche", "Fleurs", //Equipement
            "Potion_de_soin", "Potion_d'energie", "Potion_de_mort", "Potion_de_poison", "Philtre_de_confusion", "Polynectar", "Felix_Felicis", "Amortentia", "Potion_d'aiguise_méninges", //Potions
            "Potion_de_l'oeil_vif", "Potion_anti_furoncles", "Potion_d'amnésie", "Philtre_de_paix", "Elixir_d'euphorie", "Veritaserum", "Elixir_éternel", //Potions
            "Poudre_rouge", "Sangsues", "Poudre_bleue", "Tentacules_de_Murlap", "Asphodèle", "Racine_de_valériane", "Mucus_de_Veracrasse", "Peau_de_serpent", "Achillée", "Livèche", //Ingrédients
            "Chrysopes_cuites", "Oeuf_de_Serpencendre", "Poudre_de_Ruta", "Aconit", "Crochet_de_serpent", "Limaces_à_cornes", "Armoise", "Mandragore", "Menthe_poivrée", //Ingrédients
        ];

module.exports = {

    add_inventaire: function(member){
        var inv = [member.id, `Baguette de ${member.user.username}`, "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide"];
        inventaire.push(inv);
    },

    add_malle: function(member){
        var malle = [member.id, "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide"];
        malles.push(malle);
    },

    add_item: function(item){
        var objet = "" + item;
        items.push(objet);
    },

    inv_display: function(dest, place){
        res = "";
        var find = false;
        var n = inventaire.length;
        var i = 0;
        while (i < n && find == false){
            if (inventaire[i][0] == dest.id){
                res = inventaire[i][place];
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    push_malle: function(liste, k){
        var res = "";
        n = liste.length;
        while (k < n){
            var str = "- " + liste[k];
            res = res + "\n" + str;
            k = k+1;
        }
        return res;
    },

    malle_liste: function(membre){
        var res = "";
        var i = 0;
        var find = false;
        var n = malles.length;
        while (i < n && find == false){
            if (malles[i][0] == membre.id){
                res = this.push_malle(malles[i], 1);
                find = true;
            }
            else{
                i = i+1;
            }
        }
        return res;
    },

    item_inv: function(dest, i){
        var position = this.position_inv(dest);
        var res = inventaire[position][i];
        return res;
    },

    item_malle: function(dest, i){
        var position = this.position_malle(dest);
        var res = malles[position][i];
        return res;
    },

    exist: function(objet){
        var item = "" + objet;
        var res = false;
        var find = false;
        var n = items.length;
        var i = 0;
        while (i < n && find == false){
            if (items[i] == item){
                res = true;
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    inv_vide: function(pos){
        var res = 0;
        var find = false;
        var n = inventaire[pos].length;
        var i = 1;
        while (i < n && find == false){
            if (inventaire[pos][i] == "vide"){
                res = i;
                find = true;
            }
            else{
                i = i+1;
            }
        }
        return res;
    },

    inv_supp: function(placement, dest){
        var find = false;
        var n = inventaire[0].length;
        var place = Number(placement);
        var i = 0;
        while (i < n && find == false){
            if (inventaire[i][0] == dest.id){
                inventaire[i][place] = "vide";
                find = true;
            }
            else{
                i = i+1;
            }
        }
    },

    malle_vide: function(pos){
        var res = 0;
        var find = false;
        var n = malles[pos].length;
        var i = 1;
        while (i < n && find == false){
            if (malles[pos][i] == "vide"){
                res = i;
                find = true;
            }
            else{
                i = i+1;
            }
        }
        return res;
    },

    malle_supp: function(placement, dest){
        var find = false;
        var n = malles[0].length;
        var place = Number(placement);
        var i = 0;
        while (i < n && find == false){
            if (malles[i][0] == dest.id){
                malles[i][place] = "vide";
                find = true;
            }
            else{
                i = i+1;
            }
        }
    },

    position_inv: function(dest){
        var res = 0;
        var find = false;
        var n = inventaire.length;
        var i = 0;
        while (i < n && find ==  false){
            if (inventaire[i][0] == dest.id){
                res = i;
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    position_malle: function(dest){
        var res = 0;
        var find = false;
        var n = malles.length;
        var i = 0;
        while (i < n && find ==  false){
            if (malles[i][0] == dest.id){
                res = i;
                find = true;
            }
            else {
                i = i+1;
            }
        }
        return res;
    },

    inv_add: function(dest, objet){
        var item = "" + objet;
        var pos = 0;
        var find = false;
        var n = inventaire.length;
        var i = 0;
        if (this.exist(item)){
            while (i < n && find == false){
                if (inventaire[i][0] == dest.id){
                    if (this.inv_vide(i) != 0){
                        pos = this.inv_vide(i);
                        inventaire[i][pos] = item
                    }
                    find = true;
                }
                else {
                    i = i+1;
                }
            }
        }
    },

    malle_add: function(dest, objet){
        var item = "" + objet;
        var pos = 0;
        var find = false;
        var n = malles.length;
        var i = 0;
        if (this.exist(item)){
            while (i < n && find == false){
                if (malles[i][0] == dest.id){
                    if (this.malle_vide(i) != 0){
                        pos = this.malle_vide(i);
                        malles[i][pos] = item
                    }
                    find = true;
                }
                else {
                    i = i+1;
                }
            }
        }
    },

    craft_soin: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Poudre_rouge"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Sangsues"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        if (one && two){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            this.inv_add(dest, "Potion_de_soin");
        }
    },

    craft_energie: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Poudre_bleue"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Tentacules_de_Murlap"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        if (one && two){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            this.inv_add(dest, "Potion_d'energie");
        }
    },

    craft_mort: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var three = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        var k = 0;
        var k_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Asphodèle"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Racine_de_valériane"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        while (k < taille && three == false){
            if (inventaire[place][k] == "Mucus_de_Veracrasse"){
                three = true;
                k_final = k;
            }
            else {
                k = k+1;
            }
        }
        if (one && two && three){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            inventaire[place][k_final] = "vide";
            this.inv_add(dest, "Potion_de_mort");
        }
    },

    craft_poison: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Peau_de_serpent"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Asphodèle"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        if (one && two){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            this.inv_add(dest,"Potion_de_poison");
        }
    },

    craft_etour: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Achillée"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Livèche"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        if (one && two){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            this.inv_add(dest,"Philtre_de_confusion");
        }
    },

    craft_poly: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var three = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        var k = 0;
        var k_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Sangsues"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Peau_de_serpent"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        while (k < taille && three == false){
            if (inventaire[place][k] == "Chrysopes_cuites"){
                three = true;
                k_final = k;
            }
            else {
                k = k+1;
            }
        }
        if (one && two && three){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            inventaire[place][k_final] = "vide";
            this.inv_add(dest, "Polynectar");
        }
    },

    craft_felix: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var three = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        var k = 0;
        var k_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Oeuf_de_Serpencendre"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Tentacules_de_Murlap"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        while (k < taille && three == false){
            if (inventaire[place][k] == "Pourdre_de_Ruta"){
                three = true;
                k_final = k;
            }
            else {
                k = k+1;
            }
        }
        if (one && two && three){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            inventaire[place][k_final] = "vide";
            this.inv_add(dest, "Felix_Felicis");
        }
    },

    craft_amour: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var three = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        var k = 0;
        var k_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Oeuf_de_Serpencendre"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Poudre_rouge"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        while (k < taille && three == false){
            if (inventaire[place][k] == "Poudre_bleue"){
                three = true;
                k_final = k;
            }
            else {
                k = k+1;
            }
        }
        if (one && two && three){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            inventaire[place][k_final] = "vide";
            this.inv_add(dest, "Amortentia");
        }
    },

    craft_oeil: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var three = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        var k = 0;
        var k_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Crochet_de_serpent"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Aconit"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        if (one && two && three){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            this.inv_add(dest, "Potion_de_l'oeil_vif");
        }
    },

    craft_furoncles: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var three = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        var k = 0;
        var k_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Crochet_de_serpent"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Limaces_à_cornes"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        if (one && two && three){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            this.inv_add(dest, "Potion_anti_furoncles");
        }
    },

    craft_amnesie: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var three = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        var k = 0;
        var k_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Racine_de_valériane"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Armoise"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        if (one && two && three){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            this.inv_add(dest, "Potion_d'amnésie");
        }
    },

    craft_euphorie: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var three = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        var k = 0;
        var k_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Menthe_poivrée"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Armoise"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        if (one && two && three){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            this.inv_add(dest, "Elixir_d'euphorie");
        }
    },

    craft_aiguise: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var three = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        var k = 0;
        var k_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Mandragore"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Achillée"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        if (one && two && three){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            this.inv_add(dest, "Potion_d'aiguise_méninges");
        }
    },

    craft_paix: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var three = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        var k = 0;
        var k_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Mandragore"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Poudre_bleue"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        while (k < taille && three == false){
            if (inventaire[place][k] == "Racine_de_valériane"){
                three = true;
                k_final = k;
            }
            else {
                k = k+1;
            }
        }
        if (one && two && three){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            inventaire[place][k_final] = "vide";
            this.inv_add(dest, "Philtre_de_paix");
        }
    },

    craft_veritaserum: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var three = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        var k = 0;
        var k_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Mucus_de_veracrasse"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Armoise"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        while (k < taille && three == false){
            if (inventaire[place][k] == "Aconit"){
                three = true;
                k_final = k;
            }
            else {
                k = k+1;
            }
        }
        if (one && two && three){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            inventaire[place][k_final] = "vide";
            this.inv_add(dest, "Veritaserum");
        }
    },

    craft_eternel: function(dest){
        var p = 0;
        var place = 0;
        var find = false;
        var one = false;
        var two = false;
        var three = false;
        var n = inventaire.length;
        var taille = inventaire[0].length;
        var i = 0;
        var i_final = 0;
        var j = 0;
        var j_final = 0;
        var k = 0;
        var k_final = 0;
        while (p < n && find ==  false){
            if (inventaire[p][0] == dest.id){
                place = p;
                find = true;
            }
            else {
                p = p+1;
            }
        }
        while (i < taille && one == false){
            if (inventaire[place][i] == "Menthe_poivrée"){
                one = true;
                i_final = i;
            }
            else {
                i = i+1;
            }
        }
        while (j < taille && two == false){
            if (inventaire[place][j] == "Poudre_rouge"){
                two = true;
                j_final = j;
            }
            else {
                j = j+1;
            }
        }
        while (k < taille && three == false){
            if (inventaire[place][k] == "Limaces_à_cornes"){
                three = true;
                k_final = k;
            }
            else {
                k = k+1;
            }
        }
        if (one && two && three){
            inventaire[place][i_final] = "vide";
            inventaire[place][j_final] = "vide";
            inventaire[place][k_final] = "vide";
            this.inv_add(dest, "Elixir_éternel");
        }
    },
};