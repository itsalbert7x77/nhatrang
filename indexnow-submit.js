const https = require('https');
const payload = JSON.stringify({
  host: "nhatrang.pages.dev",
  key: "909e193699e34b0f84befe3de7123eb0",
  keyLocation: "https://nhatrang.pages.dev/909e193699e34b0f84befe3de7123eb0.txt",
  urlList: [
    "https://nhatrang.pages.dev/posts/khanh-hoa-sea-festival-2026/",
    "https://nhatrang.pages.dev/ko/posts/khanh-hoa-sea-festival-2026/",
    "https://nhatrang.pages.dev/ru/posts/khanh-hoa-sea-festival-2026/",
    "https://nhatrang.pages.dev/posts/nha-trang-hotel-investment-boom-2026/",
    "https://nhatrang.pages.dev/ko/posts/nha-trang-hotel-investment-boom-2026/",
    "https://nhatrang.pages.dev/ru/posts/nha-trang-hotel-investment-boom-2026/"
  ]
});
const options = {
  hostname: 'api.indexnow.org', path: '/IndexNow', method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(payload) }
};
const req = https.request(options, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => console.log(`IndexNow response: ${res.statusCode} ${data}`));
});
req.on('error', e => console.error('Error:', e.message));
req.write(payload);
req.end();
