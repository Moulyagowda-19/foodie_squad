const QRCode = require('qrcode');

const websiteURL = "https://github.com/Moulyagowda-19/foodie_squad.git"; // ✅ Replace with your real website link

QRCode.toFile('foodie-qr.png', websiteURL, function (err) {
  if (err) throw err;
  console.log("✅ QR Code Generated! Check foodie-qr.png");
});
