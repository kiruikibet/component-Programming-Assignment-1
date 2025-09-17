// Hotel data
const hotels = {
  1: { name: "Sunset Resort", desc: "Luxury resort with ocean views.", price: "$120/night", img: "https://picsum.photos/400?1" },
  2: { name: "Grand Palace", desc: "Elegant hotel in the city center.", price: "$90/night", img: "https://picsum.photos/400?2" },
  3: { name: "Ocean View", desc: "Beachfront hotel with stunning sunsets.", price: "$110/night", img: "https://picsum.photos/400?3" },
  4: { name: "Mountain Lodge", desc: "Peaceful lodge in the mountains.", price: "$80/night", img: "https://picsum.photos/400?4" },
  5: { name: "Royal Suites", desc: "Modern suites with premium service.", price: "$150/night", img: "https://picsum.photos/400?5" },
  6: { name: "Safari Inn", desc: "Stay close to nature and wildlife.", price: "$100/night", img: "https://picsum.photos/400?6" },
  7: { name: "City Comfort", desc: "Affordable comfort in the city.", price: "$60/night", img: "https://picsum.photos/400?7" },
  8: { name: "Golden Palm", desc: "Tropical getaway with palm gardens.", price: "$130/night", img: "https://picsum.photos/400?8" },
  9: { name: "Blue Lagoon", desc: "Relax at the lagoon with spa services.", price: "$140/night", img: "https://picsum.photos/400?9" },
  10: { name: "Urban Retreat", desc: "Stylish retreat in downtown.", price: "$100/night", img: "https://picsum.photos/400?10" },
  11: { name: "Lakeside Villa", desc: "Enjoy lakeside views and serenity.", price: "$115/night", img: "https://picsum.photos/400?11" },
  12: { name: "Forest Haven", desc: "Stay surrounded by nature.", price: "$95/night", img: "https://picsum.photos/400?12" },
  13: { name: "White Sands", desc: "Luxury white-sand beach hotel.", price: "$160/night", img: "https://picsum.photos/400?13" },
  14: { name: "Coastal Breeze", desc: "Charming coastal views and comfort.", price: "$125/night", img: "https://picsum.photos/400?14" },
  15: { name: "Hilltop Hotel", desc: "Breathtaking hilltop views.", price: "$105/night", img: "https://picsum.photos/400?15" },
  16: { name: "Emerald Resort", desc: "Relax in an emerald paradise.", price: "$145/night", img: "https://picsum.photos/400?16" },
  17: { name: "Desert Rose", desc: "Unique desert lodge experience.", price: "$135/night", img: "https://picsum.photos/400?17" },
  18: { name: "Serenity Lodge", desc: "Quiet lodge for total relaxation.", price: "$110/night", img: "https://picsum.photos/400?18" },
  19: { name: "Crystal Bay", desc: "Crystal clear waters at your doorstep.", price: "$170/night", img: "https://picsum.photos/400?19" },
  20: { name: "Garden Inn", desc: "Affordable stay with garden views.", price: "$70/night", img: "https://picsum.photos/400?20" }
};

// Get hotel id from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id && hotels[id]) {
  document.getElementById("hotel-name").textContent = hotels[id].name;
  document.getElementById("hotel-desc").textContent = hotels[id].desc;
  document.getElementById("hotel-price").textContent = "Price: " + hotels[id].price;
  document.getElementById("hotel-img").src = hotels[id].img;
}
