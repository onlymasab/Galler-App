


document.addEventListener('DOMContentLoaded', function() {
    fetchImages();

    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const span = document.getElementById("close");

    span.onclick = function() { 
        modal.style.display = "none";
    }

    function fetchImages() {
        const accessKey = 'g5z9wAITJOTSxteX8hlrxwv4C97O70OiuV5XfOhobZk';
        const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=10`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById("gallery");
            data.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.urls.regular;
                img.alt = photo.description || 'Unsplash Image';
                img.style.height = `${Math.floor(Math.random() * (300 - 150 + 1) + 150)}px`;  // Staggered heights
                img.onclick = function() {
                    modal.style.display = "block";
                    modalImg.src = this.src;
                    captionText.innerHTML = this.alt;
                }
                gallery.appendChild(img);
            });
        })
        .catch(err => console.error(err));
    }
});
