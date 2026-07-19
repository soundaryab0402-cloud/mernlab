const response = await fetch('https://www.google.com');

const cookies = response.headers.get('set-cookie');

console.log("Cookies:");
console.log(cookies);