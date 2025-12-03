# Bot Otomatisasi Redfinger 🤖

![Version](https://img.shields.io/badge/version-1.2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)
![Platform](https://img.shields.io/badge/platform-Redfinger%20Cloud%20Phone-orange.svg)

**Bot pinter buat pengguna Redfinger Cloud Phone (RF Bot).**

> [!IMPORTANT]
> **PAKAI BOT GRATIS TANPA RIBET DI SINI:** [**WWW.REDAUTO.MY.ID**](https://www.redauto.my.id)
>
> **Gak perlu nyalain HP/PC 24 jam!**
> Di website ini, bot jalan otomatis di server kami **GRATIS**. Cukup setting sekali, bot akan **running terus menerus** siang malam sampai kamu berhasil mendapatkan cloud phone (Redeem/War) yang kamu mau. Hemat kuota dan baterai!

> [!WARNING]
> **STATUS: MASIH TAHAP TESTING (BETA)**
> Website ini masih dalam masa uji coba. Kalo ada fitur yang error atau gak jalan, langsung laporin aja via Telegram: [**t.me/botwarrf**](https://t.me/botwarrf).

> [!TIP]
> **Gabung Telegram kita buat update & curhat:** [**t.me/botwarrf**](https://t.me/botwarrf)

## 🚀 Fitur Utama

Versi web di [redauto.my.id](https://www.redauto.my.id) punya fitur lengkap yang gampang banget dipake:

- **Auto Redeem & War 24/7**: Bot jalan di server kita. Kamu tinggal tidur, biarin bot yang kerja keras bagai kuda sampe dapet server.
- **List Device Aktif**: Cek semua device Redfinger kamu yang lagi aktif, rapi banget tampilannya.
- **Fitur Renewal**: Perpanjang durasi device kamu gampang banget, tinggal klik-klik dari web.
- **Notifikasi Real-time**: Dapet kabar langsung via Telegram/Discord pas bot berhasil dapet server.

## 📦 Cara Install (Versi Script Manual)

Kalo kamu emang hobi ngoding atau mau jalanin script sendiri (ribet dikit gapapa ya):

1. Clone repository:
   ```bash
   git clone https://github.com/username-anda/redfinger-automation-bot.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Atur settingan kamu di `config.json`.

## 🔧 Cara Pake

```javascript
const RedfingerBot = require('./src/bot');

// Inisialisasi bot
const bot = new RedfingerBot({
    apiKey: 'API_KEY_KAMU',
    deviceId: 'DEVICE_ID_KAMU'
});

// Gaspol
bot.start();
```

## ❓ FAQ (Yang Sering Ditanyain)

**Q: Beneran gratis nih?**
A: Yoi, fitur auto redeem/war di [redauto.my.id](https://www.redauto.my.id) jalan di server kita gratis tis.

**Q: HP harus nyala terus gak?**
A: **Enggak perlu!** Karena bot jalan di server kita, HP/PC kamu matiin aja gapapa. Bot tetep kerja lembur bagai kuda.

**Q: Bisa liat device aku gak?**
A: Bisa dong, ada menu buat liat list device yang aktif sekalian bisa renewal juga.

**Q: Bisa jalan di HP?**
A: Bisa banget. Dashboard web [redauto.my.id](https://www.redauto.my.id) responsif, dibuka di HP, Laptop, Tablet aman semua.


## 📄 Lisensi

Project ini pake Lisensi MIT - cek file [LICENSE](LICENSE) aja buat detailnya.

---
*Disclaimer: Cuma buat belajar ya. Pake dengan bijak.*
