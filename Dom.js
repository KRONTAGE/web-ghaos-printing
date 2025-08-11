function toggle() {
    document.querySelector(".dropleft").classList.toggle("show")
    document.querySelector(".nav-box").classList.toggle("transform")
}

const container = document.getElementById('scrollContainer');
    const items = document.querySelectorAll('.box-content');

    items.forEach(item => {
      item.addEventListener('click', () => {

        items.forEach(i => i.classList.remove('active'));

        item.classList.add('active');
        
        const itemCenter = item.offsetLeft - (container.clientWidth / 2) + (item.clientWidth / 2);
        container.scrollTo({
          left: itemCenter,
          behavior: 'smooth'
        });
      });
    });