// Simple in-memory sample data
const listings = [
{
id: 'lst1',
title: 'Musanze Eco Lodge',
description: 'A community-run eco lodge near volcanoes, run on solar power.',
location: { address: 'Musanze, Northern Province, Rwanda', lat: -1.513, lng: 29.629 },
greenMetrics: { energy: 5, waste: 4, water: 4, local: 5, training: 4 },
greenScore: 90,
photos: []
},
{
id: 'lst2',
title: 'Lake Kivu Green Guesthouse',
description: 'Lake-side homestay that uses rainwater harvesting and composting.',
location: { address: 'Gisenyi, Western Province, Rwanda', lat: -1.686, lng: 29.256 },
greenMetrics: { energy: 4, waste: 5, water: 4, local: 4, training: 3 },
greenScore: 83,
photos: []
}
];


const bookings = [];


module.exports = { listings, bookings };