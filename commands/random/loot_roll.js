const commando = require('discord.js-commando');

class LootRollCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'lootroll',
            group: 'random',
            memberName: 'lootroll',
            description: 'Rolls for loot'
        });
    }

    async run(message, args){
        var roll = Math.floor(Math.random() * 100) + 1;
        message.reply("You rolled " + roll);
    }
}

module.exports = LootRollCommand;