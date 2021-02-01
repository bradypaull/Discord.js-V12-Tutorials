const BaseCommand = require('../../utils/structures/BaseCommand');
const img = require('images-scraper');
const Discord = require('discord.js');

const google = new img ({
  puppeteer : {
    headless: true,
  }
})

module.exports = class ImageCommand extends BaseCommand {
  constructor() {
    super('image', 'util', []);
  }

  async run(client, message, args) {
    const query = args.join(" ")
    if(!query) return message.channel.send('Please enter a search query.')

    const results = await google.scrape(query, 1)
    message.channel.send(results[0].url);
  }
}