const arrayAmazing1 = ['<img data-amazing="web design" src="image/amazing/web-design1.jpg" alt="web design">', '<img data-amazing="wordpress" src="image/amazing/wordpress-1.png" alt="wordpress">', '<img data-amazing="web design" src="image/amazing/web%20design-2.png" alt="web design">', '<img data-amazing="web design" src="image/amazing/web%20design-3.png" alt="web design">', '<img data-amazing="landing pages" src="image/amazing/landing%20pages-1.png" alt="landing pages">', '<img data-amazing="graphic design" src="image/amazing/graphic%20design-1.png" alt="graphic design">', '<img data-amazing="wordpress" src="image/amazing/wordpress-2.png" alt="wordpress">', '<img data-amazing="graphic design" src="image/amazing/graphic%20design-2.png" alt="graphic design">', '<img data-amazing="landing pages" src="image/amazing/landing%20pages-2.png" alt="landing pages">', '<img data-amazing="landing pages" src="image/amazing/landing%20pages-3.png" alt="landing pages">', '<img data-amazing="graphic design" src="image/amazing/graphic%20design-3.png" alt="graphic design">', '<img data-amazing="wordpress" src="image/amazing/wordpress-3.png" alt="wordpress">'];

const arrayAmazing2 = ['<img data-amazing="graphic design" src="image/amazing/graphic%20design/graphic-design1.jpg" alt="graphic design">', '<img data-amazing="web design" src="image/amazing/web%20design/web-design1.jpg" alt="web design">', '<img data-amazing="landing pages" src="image/amazing/landing%20page/landing-page1.jpg" alt="landing pages">', '<img data-amazing="wordpress" src="image/amazing/wordpress/wordpress1.jpg" alt="wordpress">', '<img data-amazing="graphic design" src="image/amazing/graphic%20design/graphic-design2.jpg" alt="graphic design">', '<img data-amazing="web design" src="image/amazing/web%20design/web-design2.jpg" alt="web design">', '<img data-amazing="landing pages" src="image/amazing/landing%20page/landing-page2.jpg" alt="landing pages">', '<img data-amazing="wordpress" src="image/amazing/wordpress/wordpress2.jpg" alt="wordpress">', '<img data-amazing="graphic design" src="image/amazing/graphic%20design/graphic-design3.jpg" alt="graphic design">', '<img data-amazing="web design" src="image/amazing/web%20design/web-design3.jpg" alt="web design">', '<img data-amazing="landing pages" src="image/amazing/landing%20page/landing-page3.jpg" alt="landing pages">', '<img data-amazing="wordpress" src="image/amazing/wordpress/wordpress3.jpg" alt="wordpress">'];

const arrayAmazing3 = ['<img data-amazing="graphic design" src="image/amazing/graphic%20design/graphic-design4.jpg" alt="graphic design">', '<img data-amazing="web design" src="image/amazing/web%20design/web-design4.jpg" alt="web design">', '<img data-amazing="landing pages" src="image/amazing/landing%20page/landing-page4.jpg" alt="landing pages">', '<img data-amazing="wordpress" src="image/amazing/wordpress/wordpress4.jpg" alt="wordpress">', '<img data-amazing="graphic design" src="image/amazing/graphic%20design/graphic-design5.jpg" alt="graphic design">', '<img data-amazing="web design" src="image/amazing/web%20design/web-design5.jpg" alt="web design">', '<img data-amazing="landing pages" src="image/amazing/landing%20page/landing-page5.jpg" alt="landing pages">', '<img data-amazing="wordpress" src="image/amazing/wordpress/wordpress5.jpg" alt="wordpress">', '<img data-amazing="graphic design" src="image/amazing/graphic%20design/graphic-design6.jpg" alt="graphic design">', '<img data-amazing="web design" src="image/amazing/web%20design/web-design6.jpg" alt="web design">', '<img data-amazing="landing pages" src="image/amazing/landing%20page/landing-page6.jpg" alt="landing pages">', '<img data-amazing="wordpress" src="image/amazing/wordpress/wordpress6.jpg" alt="wordpress">'];

const arrayBreaking = ['<img class="breaking-grid-item-img" src="image/breaking%20news/breaking1.png">', '<img class="breaking-grid-item-img" src="image/breaking%20news/breaking2.png">', '<img class="breaking-grid-item-img" src="image/breaking%20news/breaking3.png">', '<img class="breaking-grid-item-img" src="image/breaking%20news/breaking4.png">', '<img class="breaking-grid-item-img" src="image/breaking%20news/breaking5.png">', '<img class="breaking-grid-item-img" src="image/breaking%20news/breaking6.png">', '<img class="breaking-grid-item-img" src="image/breaking%20news/breaking7.png">', '<img class="breaking-grid-item-img" src="image/breaking%20news/breaking8.png">'];

const arrayText = ['How to make a classic herring under a fur coat with an apple? Prepare the products, pay special attention to the choice of herring. You can also take ready-made fillets, but it loses in taste, although it saves time.', 'Surströmming is made from small Baltic herring. It is caught in the spring, salted and fermented according to the classic recipe. About a month before it appears on the store shelf, the herring is packaged in airtight cans.', 'Lamb loin, ribs, neck, shoulder blade and ham are perfect for barbecue. Many also use fat tail, stringing it between pieces of meat. It is believed that fat makes the barbecue juicier. It is best to cook from young lamb. Skewers from old meat will turn out tough.', 'Carefully peel a ripe pineapple, and then cut it into small beautiful cubes. We uncork a bottle of champagne and pour pineapples very carefully.\n' +
'This cocktail dessert is served on the table in wide large glasses along with teaspoons.'];

const arrayName = ['SLAVIK', 'SWEDISH CHIEF', 'HASAN ALI', 'DAFNA'];

const arraySpeciality = ['UX Designer', 'HR generalist', 'CEO', 'Business Development Director'];

const arrayAmazing = [arrayAmazing1, arrayAmazing2, arrayAmazing3];


// Переключение картинок и текста в Our Services
const serviceList = document.querySelector('.service-list');
const serviceDescription = document.querySelectorAll('.service-description');

function changeServiceDescription(elem) {
    const target = elem.target;

    [...serviceList.children].forEach(item => {
        item.classList.remove('service-item-active');
    });

    target.classList.add('service-item-active');

    serviceDescription.forEach(elem => {
        if (elem.dataset.serv === target.dataset.serv) {
            elem.classList.add('service-description-active');
        } else {
            elem.classList.remove('service-description-active');
        }
    });
}

serviceList.addEventListener('click', elem => {
    changeServiceDescription(elem);
})


// Сортировка вкладок в Our amazing work и картинок в grid.

const amazingList = document.querySelector('.amazing-list');
const amazingGrid = document.querySelector('.amazing-grid');
let targetAmazingList;

function changeAmazingImg(target) {

    [...amazingList.children].forEach(item => {
        item.classList.remove('amazing-item-active');
    });

    target.classList.add('amazing-item-active');

    [...amazingGrid.children].forEach(elem => {

        if ([...elem.children][0].dataset.amazing === target.dataset.amazing) {
            elem.classList.add('amazing-grid-item-active');
        } else {
            elem.classList.remove('amazing-grid-item-active');
        }
        if (target.dataset.amazing === 'all') {
            elem.classList.add('amazing-grid-item-active');
        }
    })
}

amazingList.addEventListener('click', elem => {
    targetAmazingList = elem.target;
    changeAmazingImg(targetAmazingList);
});


//Создание картинок в Our Amazing Work

let createDivElem;
let amazingTextSecond;

function createAmazingImg(array) {

    array.forEach(elem => {
        createDivElem = document.createElement('div');
        createDivElem.classList.add('amazing-grid-item', 'amazing-grid-item-active');
        amazingGrid.append(createDivElem);

        if (elem.indexOf('data-amazing="graphic design"') === 5) {
            amazingTextSecond = 'Graphic design'
        }
        if (elem.indexOf('data-amazing="web design"') === 5) {
            amazingTextSecond = 'Web design'
        }
        if (elem.indexOf('data-amazing="landing pages"') === 5) {
            amazingTextSecond = 'Landing pages'
        }
        if (elem.indexOf('data-amazing="wordpress"') === 5) {
            amazingTextSecond = 'Wordpress'
        }

        createDivElem.innerHTML = elem + `<div class="amazing-grid-item-up"><img class="amazing-grid-item-up-img" src="image/amazing/hover-img.png" alt="design"><p class="amazing-grid-item-up-text-first">CREATIVE DESIGN</p><p class="amazing-grid-item-up-text-second">${amazingTextSecond}</p></div>`;
    })
}

createAmazingImg(arrayAmazing[0]);


//Добавление произвольного количества картинок в Our Amazing Work

let amazingCount = 1;
const amazingButton = document.querySelector('.amazing-button');

amazingButton.addEventListener('click', elem => {
    if (amazingCount < (arrayAmazing.length - 1)) {
        createAmazingImg(arrayAmazing[amazingCount]);
    } else {
        createAmazingImg(arrayAmazing[amazingCount]);
        amazingButton.classList.add('amazing-button-deactive');
    }

    amazingCount++;

    if (!!targetAmazingList) {
        changeAmazingImg(targetAmazingList);
    }
})


//Вставка картинок в Breaking News

const breakingGridItem = document.querySelectorAll('.breaking-grid-item');

function createBreakingImg(array) {
    for (let i = 0; i < breakingGridItem.length; i++) {
        createDivElem = document.createElement('div');
        breakingGridItem[i].prepend(createDivElem);
        createDivElem.innerHTML = array[i];
    }
}

createBreakingImg(arrayBreaking);


//Карусель в about

let countFace = 2;

const faceSmallWrapper = document.querySelector('.face-small-wrapper');
const mainFace = document.querySelector('.main-face');
const aboutDescriptionText = document.querySelector('.about-description-text');
const aboutDescriptionName = document.querySelector('.about-description-name');
const aboutDescriptionSpeciality = document.querySelector('.about-description-speciality');

const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

const animation = [{transform: 'scale(0)'}, {transform: 'scale(1)'}];
const animationTime = {
    duration: 800,
};


function aboutChangeFace() {

    [...faceSmallWrapper.children].forEach(elem => {

        elem.classList.remove('face-small-active');
    });

    [...faceSmallWrapper.children][countFace].classList.add('face-small-active');

    mainFace.innerHTML = [...faceSmallWrapper.children][countFace].innerHTML;

    const faceSmallImg = document.querySelector('.face-small-img');

    faceSmallImg.classList.remove('face-small-img');
    faceSmallImg.classList.add('main-face-img');

    mainFace.animate(animation, animationTime);

    aboutDescriptionText.innerText = arrayText[countFace];
    aboutDescriptionName.innerText = arrayName[countFace];
    aboutDescriptionSpeciality.innerText = arraySpeciality[countFace];
}


faceSmallWrapper.addEventListener('click', elem => {
    countFace = elem.target.parentElement.dataset.about;
    aboutChangeFace();
});


leftButton.addEventListener('click', e => {
    if (countFace === 0) {
        return
    }
    countFace--;
    aboutChangeFace();
});

rightButton.addEventListener('click', e => {
    if (countFace === 3) {
        return
    }
    countFace++;
    aboutChangeFace();
});

