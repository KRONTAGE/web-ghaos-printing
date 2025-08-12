function toggle() {
  document.querySelector(".dropleft").classList.toggle("show")
  document.querySelector(".nav-box").classList.toggle("transform")
}

const container = document.getElementById('scrollContainer');
const items = document.querySelectorAll('.box-content');
const btns = document.querySelectorAll('.btn')

items.forEach(item => {
  item.addEventListener('click', () => {

    btns.forEach(i => i.classList.remove('show'));

    const btnInItem = item.querySelector('.btn');
    if (btnInItem) btnInItem.classList.add('show');
    
    items.forEach(i => i.classList.remove('active'));

    item.classList.add('active');

    const itemCenter = item.offsetLeft - (container.clientWidth / 2) + (item.clientWidth / 2);
    container.scrollTo({
      left: itemCenter,
      behavior: 'smooth'
    });
  });
});
