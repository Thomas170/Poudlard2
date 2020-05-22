const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

client.login("NzA2NTgzMzU3NzI2NjU0NTM0.XrVg8A.pNfeCMHLdiYeH9IzkdSGOAXNAuM");

client.commands = new Discord.Collection();

fs.readdir("./Commandes2/", (error, f) => {
    if(error) console.log(error);

    let commandes = f.filter(f => f.split(".").pop() === "js");
    if(commandes.length <= 0) return console.log("aucune commande trouvée !");

    commandes.forEach((f) => {
        let commande2 = require(`./Commandes2/${f}`)
        console.log(`${f} commande chargée`);

    client.commands.set(commande2.help.name, commande2);    
    });
});

fs.readdir("./Events/", (error, f) => {
    if(error) console.log(error);
    console.log(`${f.length} events en chargement`);

    f.forEach((f) => {
        const events = require(`./Events/${f}`);
        const event = f.split(".")[0];
    client.on(event, events.bind(null, client));
    })
})
