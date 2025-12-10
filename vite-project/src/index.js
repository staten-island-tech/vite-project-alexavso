import './style.css';

const artwork = [
    { title: "The Japanese Footbridge", artist: "Claude Monet", date: 1889, popular: true },
    { title: "Water Lily Pond", artist: "Claude Monet", date: 1900, popular: true },
    { title: "Water Lily Pond 9", artist: "Claude Monet", date: 1919, popular: true },
    { title: "Bouquet of Sunflowers", artist: "Claude Monet", date: 1881, popular: true },
    { title: "Woman With a Parasol", artist: "Claude Monet", date: 1875, popular: true },
    { title: "Waterloo Bridge", artist: "Claude Monet", date: 1903, popular: false },
    { title: "Water Lilies at Sunset", artist: "Claude Monet", date: 1914, popular: true },
    { title: "Woman in the Garden", artist: "Claude Monet", date: 1866, popular: false },
    { title: "Rouen Cathedral", artist: "Claude Monet", date: 1894, popular: false },
    { title: "Vincent Van Gogh Self Portrait", artist: "Vincent Van Gogh", date: 1888, popular: true },
    { title: "Starry Night", artist: "Vincent Van Gogh", date: 1889, popular: true },
    { title: "Cafe Terrace at Night", artist: "Vincent Van Gogh", date: 1888, popular: true },
    { title: "Wheatfield Under Thunderclouds", artist: "Vincent Van Gogh", date: 1890, popular: false },
    { title: "The Mona Lisa", artist: "Leonardo da Vinci", date: 1503, popular: true },
    { title: "The Last Supper", artist: "Leonardo da Vinci", date: 1495, popular: true },
    { title: "Adoration of the Magi", artist: "Leonardo da Vinci", date: 1482, popular: false },
]

const newList = artwork.filter(item => item.popular);

const results = document.getElementById("results");

document.getElementById("popularBtn").addEventListener("click", () => {
    const popularArtworks = artwork.filter(item => item.popular);
    display(popularArtworks);
});

document.getElementById("artistBtn").addEventListener("click", () => {
    // Example: Filter by Monet
    const filteredByArtist = artwork.filter(item => item.artist === "Claude Monet");
    display(filteredByArtist);
});

