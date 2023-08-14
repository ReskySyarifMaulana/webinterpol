function changeImage2(direction) {
    const image2Container = document.querySelector('.Image-2');
    const images2 = image2Container.querySelectorAll('img');

    images2[currentIndex2].classList.add('hidden');

    if (direction === 'next') {
        currentIndex2 = (currentIndex2 + 1) % images2.length;
    } else if (direction === 'prev') {
        currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
    }

    images2[currentIndex2].classList.remove('hidden');
}
