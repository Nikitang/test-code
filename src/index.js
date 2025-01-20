import './styles/App.scss';
import logoB from '../src/assets/images/cite-logo-b.png';
import logoSearch from '../src/assets/images/search-icon.png';
import logoBasket from '../src/assets/images/basket.png';
import logoW from '../src/assets/images/cite-logo-w.png';

import logoLamp1 from '../src/assets/images/lamp1.png';
import logoLamp2 from '../src/assets/images/lamp2.png';
import logoLamp3 from '../src/assets/images/lamp3.png';

import logoCardOne from '../src/assets/images/mir.png';
import logoCardTwo from '../src/assets/images/visa.png';
import logoCardThree from '../src/assets/images/mc.png';

import logoMenu from '../src/assets/images/mButton.png';
import logoClose from '../src/assets/images/close-menu.png';

const siteIcon = document.querySelector('.header__second-logo img');
const searchIcon = document.querySelector('.header__second-search img');
const basketIcon = document.querySelector('.header__second-basket img');

const siteIconW = document.querySelector('.footer__block-one-logo img');
const cardIconOne = document.querySelector('.footer__block-four--cards-one');
const cardIconTwo = document.querySelector('.footer__block-four--cards-two');
const cardIconThree = document.querySelector('.footer__block-four--cards-three');

siteIcon.src = logoB;
searchIcon.src = logoSearch;
basketIcon.src = logoBasket;

siteIconW.src = logoW;
cardIconOne.src = logoCardOne;
cardIconTwo.src = logoCardTwo;
cardIconThree.src = logoCardThree;

const data = [
    {
        id: 1,
        logo: logoLamp1,
        text: 'Встраиваемый светильник Markt',
        price: '3 490',
        discount: true,
        discPrice: '5 060',
    },
    {
        id: 2,
        logo: logoLamp2,
        text: 'Линейный светильник ARG',
        price: '6 700',
        discount: false,
        discPrice: '',
    },
    {
        id: 3,
        logo: logoLamp3,
        text: 'Сведодиодный светильник',
        price: '5 060',
        discount: true,
        discPrice: '5 060',
    },
    {
        id: 4,
        logo: logoLamp1,
        text: 'Встраиваемый светильник Markt',
        price: '3 490',
        discount: false,
        discPrice: '',
    },
    {
        id: 5,
        logo: logoLamp2,
        text: 'Линейный светильник ARG',
        price: '6 700',
        discount: true,
        discPrice: '6 060',
    },
    {
        id: 6,
        logo: logoLamp3,
        text: 'Сведодиодный светильник',
        price: '5 060',
        discount: false,
        discPrice: '',
    },
    {
        id: 7,
        logo: logoLamp1,
        text: 'Встраиваемый светильник Markt',
        price: '3 490',
        discount: true,
        discPrice: '6 060',
    },
    {
        id: 8,
        logo: logoLamp2,
        text: 'Линейный светильник ARG',
        price: '6 700',
        discount: false,
        discPrice: '',
    },
];
const mainDiv = document.querySelector('.main__cards');
data.forEach((item) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('main__card');

    const discDiv = document.createElement('div');
    discDiv.classList.add('main__card-disc');
    const discSpan = document.createElement('span');
    discSpan.textContent = item.discount ? 'Акция' : '';
    discDiv.appendChild(discSpan);
    if (item.discount) cardDiv.appendChild(discDiv);

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('main__card-img');
    const img = document.createElement('img');
    img.src = item.logo;
    imgDiv.appendChild(img);
    cardDiv.appendChild(imgDiv);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('main__card-info');

    const h5 = document.createElement('h5');
    h5.textContent = item.text;
    infoDiv.appendChild(h5);

    const priceDiv = document.createElement('div');
    priceDiv.classList.add('main__card-price');
    const priceSpan = document.createElement('span');
    priceSpan.classList.add('main__card-price--main');
    priceSpan.textContent = `${item.price} ₽`;

    if (item.discount) priceSpan.style.color = '#E45302';

    const discountSpan = document.createElement('span');
    discountSpan.classList.add('main__card-price--disc');
    discountSpan.textContent = item.discount ? `${item.discPrice} ₽` : '';
    discountSpan.style.color = '#808080';

    const dashDiv = document.createElement('div');
    dashDiv.classList.add('main__card-price--dash');

    if (item.discount) priceDiv.appendChild(dashDiv);
    priceDiv.appendChild(priceSpan);
    priceDiv.appendChild(discountSpan);
    infoDiv.appendChild(priceDiv);

    cardDiv.appendChild(infoDiv);

    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('main__card-button');
    const button = document.createElement('button');
    // button.classList.add('');
    button.textContent = 'Подробнее';

    buttonDiv.appendChild(button);
    cardDiv.appendChild(buttonDiv);

    mainDiv.appendChild(cardDiv);
    // cardDiv.addEventListener('click', () => {
    //     alert(`Кликнули на карточку ${item.text}`);
    // });
});

let setOpen = false;

const footerDiv = document.querySelector('.header');
const savedDiv = footerDiv.innerHTML;
window.addEventListener('resize', () => {
    if (window.innerWidth <= 770) {
        footerDiv.innerHTML = `
        <div class="header__second">
            <div class="header__second-logo">
                <img src=${logoB} alt="" />
                <span>URBAN DWELLING</span>
            </div>
            <div class="header__second-open-menu">
                <img src=${logoMenu} alt="" />
            </div>
        </div>
        <div class="header__menu">
        <div class="header__menu-logo">
            <img src="" alt="" />
            <span>URBAN DWELLING</span>
        </div>
        <div class="header__menu-help">
            <span>Доставка и оплата</span>
        </div>
        <div class="header__menu-help">
            <span>Гарантия и возврат</span>
        </div>
        <div class="header__menu-help">
            <span>EN</span>
        </div>

        <div class="header__menu-navs">
            <a href="#main" class="header__menu-navs-nav">КАТАЛОГ</a>
            <a href="#footer" class="header__menu-navs-nav">О КОМПАНИИ</a>
            <a href="#footer" class="header__menu-navs-nav">КОНТАКТЫ</a>
        </div>

        <div class="header__menu-search">
            <input type="text" placeholder="Лампы" />
            <img src="" alt="" />
        </div>

        <div class="header__menu-basket">
            <img src="" alt="" />
            <span>Корзина</span>
        </div>
        </div>`;

        const menuImg = document.querySelector('.header__second-open-menu img');
        menuImg.removeEventListener('click', handleMenuClick);
        menuImg.addEventListener('click', handleMenuClick);

        //mobile
        const siteIconM = document.querySelector('.header__menu-logo img');
        const searchIconM = document.querySelector('.header__menu-search img');
        const basketIconM = document.querySelector('.header__menu-basket img');

        siteIconM.src = logoB;
        searchIconM.src = logoSearch;
        basketIconM.src = logoBasket;
        //mobile
    } else if (window.innerWidth >= 770) {
        footerDiv.innerHTML = savedDiv;
    }
});
function handleMenuClick() {
    setOpen = !setOpen;
    console.log(setOpen);

    const menuImg = document.querySelector('.header__second-open-menu img');
    menuImg.src = setOpen ? logoClose : logoMenu;
    const menuDiv = document.querySelector('.header__menu');
    if (menuDiv) {
        menuDiv.classList.toggle('opened', setOpen);
    }
}
