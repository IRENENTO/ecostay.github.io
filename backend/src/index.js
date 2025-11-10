const express = require('express');
const cors = require('cors');
const { listings, bookings } = require('./data');


const app = express();
app.use(cors());
app.use(express.json());


// Simple health check
app.get('/api/health', (req, res) => res.json({ ok: true }));


// Get listings (supports optional query minScore)
app.get('/api/listings', (req, res) => {
const { minScore } = req.query;
let out = listings;
if (minScore) {
const ms = Number(minScore) || 0;
out = out.filter(l => Number(l.greenScore) >= ms);
}
res.json(out);
});


// Get single listing
app.get('/api/listings/:id', (req, res) => {
const l = listings.find(x => x.id === req.params.id);
if (!l) return res.status(404).json({ error: 'Not found' });
res.json(l);
});


// Create booking
app.post('/api/bookings', (req, res) => {
const { listingId, name, checkIn, checkOut, guests } = req.body;
const listing = listings.find(x => x.id === listingId);
if (!listing) return res.status(400).json({ error: 'Invalid listing' });
const booking = { id: 'bk_' + Date.now(), listingId, name, checkIn, checkOut, guests, createdAt: new Date().toISOString() };
bookings.push(booking);
res.json({ ok: true, booking });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`EcoStay API running on http://localhost:${PORT}`));