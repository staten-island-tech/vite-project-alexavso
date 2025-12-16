import './style.css';

const artworkData = [
    { title: "The Japanese Footbridge", artist: "Claude Monet", popular: true },
    { title: "Water Lily Pond", artist: "Claude Monet", popular: true },
    { title: "Water Lily Pond 9", artist: "Claude Monet", popular: true },
    { title: "Bouquet of Sunflowers", artist: "Claude Monet", popular: true },
    { title: "Woman With a Parasol", artist: "Claude Monet", popular: true },
    { title: "Waterloo Bridge", artist: "Claude Monet", popular: false },
    { title: "Water Lilies at Sunset", artist: "Claude Monet", popular: true },
    { title: "Woman in the Garden", artist: "Claude Monet", popular: false },
    { title: "Rouen Cathedral", artist: "Claude Monet", popular: false },

    { title: "Vincent Van Gogh Self Portrait with Straw Hat", artist: "Vincent Van Gogh", popular: true },
    { title: "Starry Night", artist: "Vincent Van Gogh", popular: true },
    { title: "Cafe Terrance at Night", artist: "Vincent Van Gogh", popular: true },
    { title: "Wheatfield Under Thunderclouds", artist: "Vincent Van Gogh", popular: false },
    { title: "Almond Blossoms", artist: "Vincent Van Gogh", popular: true },

    { title: "Mona Lisa", artist: "Leonardo da Vinci", popular: true },
    { title: "The Last Supper", artist: "Leonardo da Vinci", popular: true },
    { title: "The Adoration of the Magi", artist: "Leonardo da Vinci", popular: false }
];

// Filter Cards 
const artCards = document.querySelectorAll(".art");

function filterArt(filterFunction) {
    artCards.forEach(card => {
        const title = card.querySelector(".art-title").textContent.trim();
        const artwork = artworkData.find(artwork => artwork.title === title);

        if (artwork && filterFunction(artwork)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

}
document.getElementById("Reset").addEventListener("click", () => {
    filterArt(artwork => artwork.title);
});

document.getElementById("Popular").addEventListener("click", () => {
    filterArt(artwork => artwork.popular);
});

document.getElementById("Monet").addEventListener("click", () => {
    filterArt(artwork => artwork.artist === "Claude Monet");
});

document.getElementById("Van-Gogh").addEventListener("click", () => {
    filterArt(artwork => artwork.artist === "Vincent Van Gogh");
});

document.getElementById("Da-Vinci").addEventListener("click", () => {
    filterArt(artwork => artwork.artist === "Leonardo da Vinci");
});

// Art of the Day

const artOfDaySection = document.querySelector(".bottom-page");
const artworks = Array.from(document.querySelectorAll(".art"));

const randomIndex = Math.floor(Math.random() * artworks.length);
const randomArtwork = artworks[randomIndex];

artOfDaySection.insertAdjacentHTML(
    "beforeend",
    `
    <div class="art art-of-day">
        ${randomArtwork.innerHTML}
    </div>
    `
);

// Artwork Details

let previewContainer = document.querySelector('.artwork-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.art-content .art').forEach(art => {
    art.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = art.getAttribute('data-name');
        
        previewBox.forEach(preview => preview.classList.remove('active'));

        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    }
});

previewBox.forEach(close => {
    close.querySelector('#close-icon').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    }
})

