require('dotenv').config();
const RedfingerBot = require('./src/bot');
const logger = require('./src/utils').logger;
const config = require('./src/config');

console.log('Memulai Bot Otomatisasi Redfinger...');
console.log('Kunjungi https://www.redauto.my.id untuk dashboard lengkap dan versi GUI.');

async function main() {
    try {
        const bot = new RedfingerBot(config);

        logger.info('Menginisialisasi layanan bot...');
        await bot.initialize();

        logger.info('Menghubungkan ke Redfinger Cloud...');
        // Simulation of connection
        setTimeout(() => {
            logger.info('Terhubung! Menunggu tugas...');
            logger.warn('Ini adalah versi core CLI. Untuk fitur lengkap, silakan gunakan dashboard web di www.redauto.my.id');
        }, 1500);

    } catch (error) {
        logger.error('Gagal memulai bot:', error);
        process.exit(1);
    }
}

main();
