import express from "express";

const app = express();
const PORT = 3000;

// Route: /find_prime_100
app.get("/find_prime_100", (req, res) => {
    const primes = [];

    for (let i = 2; i < 100; i++) {
        let isPrime = true;

        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(i);
        }
    }

    res.send("Prime numbers less than 100:<br>" + primes.join(", "));
});

// Route: /find_cube_100
app.get("/find_cube_100", (req, res) => {
    const cubes = [];

    for (let i = 1; i * i * i < 100; i++) {
        cubes.push(i * i * i);
    }

    res.send("Cubes less than 100:<br>" + cubes.join(", "));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});