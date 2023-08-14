let currentIndex = 0;
let currentIndex2 = 0;

function changeImageAutomaticallyHorizontal() {
    const imageContainer = document.querySelector('.Image');
    const images = imageContainer.querySelectorAll('img');
    const image2Container = document.querySelector('.Image-2');
    const images2 = image2Container.querySelectorAll('img');

    setInterval(() => {
        images[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.remove('hidden');
    }, 2000);

    setInterval(() => {
        images2[currentIndex2].classList.add('hidden');
        currentIndex2 = (currentIndex2 + 1) % images2.length;
        images2[currentIndex2].classList.remove('hidden');
    }, 5000);

}

changeImageAutomaticallyHorizontal();
