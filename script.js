document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const accessKey = 'g5z9wAITJOTSxteX8hlrxwv4C97O70OiuV5XfOhobZk';

    async function fetchImages() {
        try {
            const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=10`);
            const data = await response.json();
            displayImages(data);
        } catch (error) {
            console.error('Error fetching images:', error);
            gallery.innerHTML = '<p>Error loading images.</p>';
        }
    }

    function displayImages(images) {
        images.forEach(image => {
            const imgElement = document.createElement('div');
            imgElement.className = 'img-wrapper';
            imgElement.innerHTML = `<img src="${image.urls.small}" alt="${image.alt_description}">`;
            gallery.appendChild(imgElement);
        });
    }

    fetchImages();
});
