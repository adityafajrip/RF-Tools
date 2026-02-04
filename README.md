# Bot Otomatisasi Redfinger 🤖

![Version](https://img.shields.io/badge/version-1.3.0-blue.svg)
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
> **STATUS: WORKING 95% 🟢**
> Website ini masih dalam masa uji coba. Kalo ada fitur yang error atau behavior yang tidak sesuai setelah update ini, silakan lapor langsung ke channel telegram: [**t.me/botwarrf**](https://t.me/botwarrf).

> [!TIP]
> **Gabung Telegram kita buat update:** [**t.me/botwarrf**](https://t.me/botwarrf)

## 🚀 Fitur Utama

Versi web di [redauto.my.id](https://www.redauto.my.id) punya fitur lengkap yang gampang banget dipake:

- **Auto Redeem & War 24/7**: Bot jalan di server kita. Sekarang support **Multi OS**, **Unlock All Servers**, dan opsi **Cek Redeem Code**. Masalah "goods not support auto renew" juga sudah fix!
- **[BARU] Upgrade & Replace Device**: Fitur eksperimental buat upgrade spesifikasi device (misal VIP A10 -> KVIP A12) atau ganti server device sesuka hati.
- **List Device Aktif**: Cek semua device Redfinger kamu yang lagi aktif. Sekarang **semua tipe device** (termasuk non-VIP) sudah tampil rapi!
- **Fitur Renewal**: Perpanjang durasi device kamu gampang banget, tinggal klik-klik dari web.
- **Notifikasi Real-time**: Dapet kabar langsung via Telegram/Discord pas bot berhasil dapet server, lengkap dengan **3 log aktivitas terakhir**.

## 🔧 Cara Mendapatkan User ID & Session ID

Untuk menggunakan bot di [redauto.my.id](https://www.redauto.my.id), kamu perlu **User ID** dan **Session ID** dari akun Redfinger kamu.

### 📱 Untuk Pengguna Mobile

#### Android (Menggunakan Eruda)

1. **Download Eruda**  
   Install aplikasi **Eruda – Browser Console** dari [Play Store](https://play.google.com/store/apps/details?id=com.eruda)

2. **Buka Redfinger**  
   Buka aplikasi Eruda, lalu dari situ buka website Redfinger

3. **Login Akun**  
   Login dengan akun Redfinger kamu

4. **Buka Console**  
   Tap floating icon gerigi (⚙️) yang muncul di layar, lalu pilih tab **Console**

5. **Jalankan Script**  
   Paste script di bawah ini ke Console, lalu tekan Enter

#### iPhone (Menggunakan Web Inspector)

1. **Download App**  
   Install aplikasi **Web Inspector** dari [App Store](https://apps.apple.com/us/app/web-inspector/id1584825745)

2. **Konfigurasi Extension** ⚠️ **PENTING!**  
   Buka **Settings → Safari → Extensions → Web Inspector**, lalu aktifkan:
   - ✓ Toggle **Web Inspector** (di bagian paling atas)
   - ✓ **Allow Extension**
   - ✓ **Allow in Private Browsing**
   - ✓ Pilih **Allow on All Websites** (bukan "Ask" atau "Deny")

3. **Buka Safari**  
   Buka Safari dan login ke website Redfinger

4. **Buka Inspector**  
   Tekan ikon puzzle (🧩) untuk membuka ekstensi, lalu pilih **Web Inspector**

5. **Buka Console**  
   Pindah ke tab **Console**, lalu paste scriptnya

### 💻 Untuk Pengguna Desktop

1. **Buka Website Redfinger**  
   Kunjungi [https://www.redfinger.com](https://www.redfinger.com) dan login

2. **Buka Developer Tools**  
   - **Windows/Linux**: Tekan `F12` atau `Ctrl + Shift + I`
   - **Mac**: Tekan `Cmd + Option + I`

3. **Buka Tab Console**  
   Klik tab **Console** di Developer Tools

4. **Jalankan Script**  
   Copy-paste script di bawah ini ke Console, lalu tekan Enter

### 📋 Script Console

```javascript
(() => {
  const sessionId = localStorage.getItem("session_id");
  const userId = localStorage.getItem("user_id");

  console.log("%c━━━━━ Redfinger Account Info ━━━━━", "color:#3b82f6;font-weight:bold;");

  if (sessionId && userId) {
    console.log("%csession_id: %c" + sessionId, "color:#888;", "color:#10b981;font-weight:bold;");
    console.log("%cuser_id: %c" + userId, "color:#888;", "color:#3b82f6;font-weight:bold;");
  } else {
    console.log("%cNo session found. Please login first.", "color:#f59e0b;");
  }

  console.log("%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "color:#3b82f6;");
})();
```

### ✅ Hasil

Script akan menampilkan:
- **session_id**: Token sesi kamu
- **user_id**: ID pengguna kamu

Copy kedua nilai tersebut dan paste di website [redauto.my.id](https://www.redauto.my.id) untuk mulai menggunakan bot!


## ❓ FAQ (Yang Sering Ditanyain)

**Q: Beneran gratis nih?**
A: Yoi, fitur auto redeem/war di [redauto.my.id](https://www.redauto.my.id) jalan di server kita gratis tis.

**Q: HP harus nyala terus gak?**
A: **Ga perlu!** Karena bot jalan di server kita, HP/PC kamu matiin aja gapapa. Bot tetep kerja lembur bagai kuda.

**Q: Bisa liat device aku gak?**
A: Bisa dong, ada menu buat liat list device yang aktif sekalian bisa renewal juga.

**Q: Bisa jalan di HP?**
A: Bisa banget. Dashboard web [redauto.my.id](https://www.redauto.my.id) responsif, dibuka di HP, Laptop, Tablet aman semua.


## 📄 Lisensi

Project ini pake Lisensi MIT - cek file [LICENSE](LICENSE) aja buat detailnya.

---
*Disclaimer: Cuma buat belajar ya. Pake dengan bijak.*
