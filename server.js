const express = require('express');
const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Database setup
const db = new Database('dagtur.db');

// Create users table
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        surname TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        phone TEXT,
        password TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

// Create bookings table
db.exec(`
    CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        tour_name TEXT NOT NULL,
        tour_date TEXT,
        people_count INTEGER DEFAULT 1,
        total_price REAL,
        status TEXT DEFAULT 'pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )
`);

console.log('✅ Database hazırdır!');

// ================== API ROUTES ==================

// Register
app.post('/api/register', async (req, res) => {
    try {
        const { name, surname, email, phone, password } = req.body;

        // Check if email exists
        const existingUser = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
        if (existingUser) {
            return res.status(400).json({ error: 'Bu e-poçt artıq qeydiyyatdan keçib!' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        const stmt = db.prepare('INSERT INTO users (name, surname, email, phone, password) VALUES (?, ?, ?, ?, ?)');
        const result = stmt.run(name, surname, email, phone || null, hashedPassword);

        console.log(`✅ Yeni istifadəçi: ${email}`);

        res.json({
            success: true,
            user: {
                id: result.lastInsertRowid,
                name,
                surname,
                email
            }
        });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ error: 'Server xətası!' });
    }
});

// Login
app.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user
        const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
        if (!user) {
            return res.status(400).json({ error: 'E-poçt və ya şifrə yanlışdır!' });
        }

        // Check password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ error: 'E-poçt və ya şifrə yanlışdır!' });
        }

        console.log(`✅ Giriş: ${email}`);

        res.json({
            success: true,
            user: {
                id: user.id,
                name: user.name,
                surname: user.surname,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Server xətası!' });
    }
});

// Get user profile
app.get('/api/user/:id', (req, res) => {
    try {
        const user = db.prepare('SELECT id, name, surname, email, phone, created_at FROM users WHERE id = ?').get(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'İstifadəçi tapılmadı!' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server xətası!' });
    }
});

// Get all users (admin)
app.get('/api/users', (req, res) => {
    try {
        const users = db.prepare('SELECT id, name, surname, email, phone, created_at FROM users ORDER BY created_at DESC').all();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Server xətası!' });
    }
});

// Create booking
app.post('/api/bookings', (req, res) => {
    try {
        const { user_id, tour_name, tour_date, people_count, total_price } = req.body;
        
        const stmt = db.prepare('INSERT INTO bookings (user_id, tour_name, tour_date, people_count, total_price) VALUES (?, ?, ?, ?, ?)');
        const result = stmt.run(user_id, tour_name, tour_date, people_count, total_price);

        console.log(`✅ Yeni sifariş: ${tour_name}`);

        res.json({
            success: true,
            booking_id: result.lastInsertRowid
        });
    } catch (error) {
        res.status(500).json({ error: 'Server xətası!' });
    }
});

// Get user bookings
app.get('/api/bookings/:userId', (req, res) => {
    try {
        const bookings = db.prepare('SELECT * FROM bookings WHERE user_id = ? ORDER BY created_at DESC').all(req.params.userId);
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Server xətası!' });
    }
});

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════╗
║     🏔️  DağTur Server Başladı!  🏔️      ║
╠════════════════════════════════════════╣
║  🌐 http://localhost:${PORT}              ║
║  📁 Database: dagtur.db               ║
╚════════════════════════════════════════╝
    `);
});

