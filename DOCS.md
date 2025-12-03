# Dokumentasi Santuy

## Cara Mulai

Buat panduan lengkap, video tutorial, dan cara setting, langsung aja cek di [Pusat Dokumentasi Resmi](https://www.redauto.my.id/) kami.

## 🔑 Cara Dapetin Session ID & User ID

Buat jalanin bot ini, kamu butuh `session_id` dan `user_id`. Tenang, gampang kok caranya!

### Syarat Wajib
Login dulu ke web Redfinger di sini: [**https://www.cloudemulator.net/app/phone?channelCode=web**](https://www.cloudemulator.net/app/phone?channelCode=web)

### Cara Ambil Data (Pilih Salah Satu)

#### 🖥️ Buat Pengguna PC / Laptop
1. Buka link Redfinger di atas.
2. Tekan tombol `F12` atau `Ctrl + Shift + I` buat buka **DevTools**.
3. Klik tab **Console**.
4. **PENTING**: Kalo ini pertama kali kamu buka console, ketik dulu `allow pasting` terus Enter. Kalo enggak, kamu gak bakal bisa paste scriptnya.
5. Paste script di bawah ini terus tekan Enter.

#### 📱 Buat Pengguna HP (Android)
1. Download aplikasi **Kiwi Browser** di Play Store (Chrome biasa gak bisa buka console).
2. Buka link Redfinger di Kiwi Browser dan login.
3. Klik titik tiga di pojok kanan atas -> pilih **Developer Tools**.
4. Pindah ke tab **Console**.
5. Paste script di bawah ini terus tekan Enter.

### 📜 Script Ajaib (Copy & Paste)

Copy semua kode di bawah ini dan paste ke Console tadi:

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

Nanti bakal muncul `session_id` dan `user_id` kamu warna-warni. Tinggal copy deh!

## Fitur-Fitur

### ⚔️ Auto War
Fitur ini bikin kamu bisa war server dengan timing super tepat (presisi milidetik). Wajib banget buat yang mau menang war server di Redfinger.

### 🎁 Auto Redeem
Gak bakal ketinggalan kode redeem lagi. Sistem kita bakal pantau terus server dan langsung gas redeem di semua akun kamu secara otomatis.

### 📱 Manajemen Akun
Urus puluhan akun cuma dari satu tempat. Bisa grouping akun, atur jadwal maintenance, dan pantau statusnya live tanpa ribet.

## Ada Masalah?

Kalo bingung atau ada error, cek solusi lengkapnya di [Knowledge Base](https://www.redauto.my.id) kami. Atau langsung chat admin di Telegram.
