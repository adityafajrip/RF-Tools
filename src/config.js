const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '../config.json');

let config = {
    apiKey: process.env.REDFINGER_API_KEY || '',
    deviceId: process.env.REDFINGER_DEVICE_ID || '',
    logLevel: 'info',
    autoRestart: true,
    proxy: {
        enabled: false,
        host: '',
        port: 8080
    }
};

// Load config from file if exists
if (fs.existsSync(configPath)) {
    try {
        const fileConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        config = { ...config, ...fileConfig };
    } catch (error) {
        console.error('Error loading config.json:', error);
    }
}

module.exports = config;
