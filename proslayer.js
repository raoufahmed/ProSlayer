// scripts.js

// Sample manga data (you can replace this with actual data from an API)
const mangaUpdates = [
    {
        title: "One Piece",
        image: "images/one_piece.jpg",
        description: "Chapter 1045: Luffy vs Kaido"
    },
    {
        title: "Attack on Titan",
        image: "images/attack_on_titan.jpg",
        description: "Chapter 139: The Final Battle"
    },
    {
        title: "My Hero Academia",
        image: "images/my_hero_academia.jpg",
        description: "Chapter 321: Deku vs Class 1-A"
    },
    {
        title: "Jujutsu Kaisen",
        image: "images/jujutsu_kaisen.jpg",
        description: "Chapter 153: The Culling Game Begins"
    },
    {
        title: "Demon Slayer",
        image: "images/demon_slayer.jpg",
        description: "Chapter 205: A New Beginning"
    }
];

// Function to display manga updates
function displayMangaUpdates() {
    const mangaList = document.getElementById('manga-list');
    
    mangaUpdates.forEach(manga => {
        // Create the manga item container
        const mangaItem = document.createElement('div');
        mangaItem.classList.add('manga-item');
        
        // Create the manga image
        const mangaImg = document.createElement('img');
        mangaImg.src = manga.image;
        mangaImg.alt = manga.title;
        
        // Create the manga title
        const mangaTitle = document.createElement('h3');
        mangaTitle.textContent = manga.title;
        
        // Create the manga description
        const mangaDetails = document.createElement('p');
        mangaDetails.classList.add('manga-details');
        mangaDetails.textContent = manga.description;
        
        // Append elements to the manga item
        mangaItem.appendChild(mangaImg);
        mangaItem.appendChild(mangaTitle);
        mangaItem.appendChild(mangaDetails);
        
        // Append the manga item to the manga list
        mangaList.appendChild(mangaItem);
    });
}

// Run the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', displayMangaUpdates);