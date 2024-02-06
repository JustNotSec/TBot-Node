const TelegramBot = require('node-telegram-bot-api');
const gradient = require('gradient-string');
const banner = `
========================================
|TELEGRAM BOT | V1.0
|AUTHOR | NotSec
|GITHUB | https://github.com/justnotsec/
|Any Bug? Just Comment On My Project
========================================
Bot Telegram Berjalan!
`
// Ganti dengan token bot Telegram lu
const token = '6775291733:AAEibfQM5s-PjROqmw9PmLOwaBxYEqyQNvg';

// Buat bot baru
const bot = new TelegramBot(token, { polling: true });

// Event listener buat nangkep pesan dari user
// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   const pesan = msg.text;

//   // Balas pesan yang diterima dari user
//   bot.sendMessage(chatId, `Lu nulis: ${pesan}`);
// });
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const pesan = msg.text;
    if (pesan === "bacot") {
        bot.sendMessage(chatId, `Lu yang bacot!`);
    } else if (pesan === "babi") {
        bot.sendMessage(chatId, `Lu yang babi!`);
    } else {
        bot.sendMessage(chatId, `Ngomong apa si kontol`);
    }
});
console.log(gradient.vice(banner));
