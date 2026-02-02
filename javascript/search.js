document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById('searchBar');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const gameCards = document.querySelectorAll('.game-card');

    if(searchBar) {
        searchBar.addEventListener('keyup', (e) => {
            const term = e.target.value.toLowerCase();
            gameCards.forEach(card => {
                const title = card.querySelector('h3').innerText.toLowerCase();
                if (title.includes(term)) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }
});