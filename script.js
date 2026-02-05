// Автокөліктер тізімі (Суреттер жаңартылды)
const cars = [
    { name: "Porsche 911 GT3", price: "95 000 000 ₸", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800", desc: "Қуаты: 510 а.к., 4.0L V6" },
    { name: "Chevrolet Camaro", price: "28 000 000 ₸", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800", desc: "6.2L V8, Нағыз маслкар" },
    { name: "BMW M5 CS", price: "65 000 000 ₸", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800", desc: "635 а.к., 0-100: 3.0 сек" },
    { name: "Audi RS7 Sportback", price: "68 000 000 ₸", img: "https://images.pistonheads.com/nimg/46383/blob-1.jpg", desc: "600 а.к., V8 TFSI, Күңгірт түс" },
    { name: "Mercedes G63 AMG", price: "125 000 000 ₸", img: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=800", desc: "V8 Biturbo, Night Edition" },
    { name: "Tesla Model X", price: "52 000 000 ₸", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800", desc: "Электрокар, Falcon Wings есіктері" },
    { name: "Lexus LX 600", price: "88 000 000 ₸", img: "https://www.lexus.com/content/dam/lexus/images/models/lx/2024/visualizer/600/exterior/22-inch-forged-alloy-wheels/atomic-silver/3-4-front-view.png", desc: "V6 3.5L Turbo, Премиум жол талғамайтын көлік" },
    { name: "Ford Mustang Shelby", price: "42 000 000 ₸", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800", desc: "760 а.к., Shelby GT500" }
];

const container = document.getElementById('car-container');

// Сипаттаманы шығару функциясы
function showSpecs(name, info) {
    alert("КӨЛІК: " + name + "\n\nТЕХНИКАЛЫҚ СИПАТТАМАСЫ:\n" + info);
}

// Карточкаларды шығару
cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
        <img src="${car.img}" class="car-img" alt="${car.name}">
        <h4>${car.name}</h4>
        <p style="color: #5bc0be; font-weight: bold;">${car.price}</p>
        <button onclick="showSpecs('${car.name}', '${car.desc}')">СИПАТТАМА</button>
    `;
    container.appendChild(card);
});// Автокөліктер тізімі (Суреттер жаңартылды)
const cars = [
    { name: "Porsche 911 GT3", price: "95 000 000 ₸", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800", desc: "Қуаты: 510 а.к., 4.0L V6" },
    { name: "Chevrolet Camaro", price: "28 000 000 ₸", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800", desc: "6.2L V8, Нағыз маслкар" },
    { name: "BMW M5 CS", price: "65 000 000 ₸", img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800", desc: "635 а.к., 0-100: 3.0 сек" },
    { name: "Audi RS7 Sportback", price: "68 000 000 ₸", img: "https://images.pistonheads.com/nimg/46383/blob-1.jpg", desc: "600 а.к., V8 TFSI, Күңгірт түс" },
    { name: "Mercedes G63 AMG", price: "125 000 000 ₸", img: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=800", desc: "V8 Biturbo, Night Edition" },
    { name: "Tesla Model X", price: "52 000 000 ₸", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800", desc: "Электрокар, Falcon Wings есіктері" },
    { name: "Lexus LX 600", price: "88 000 000 ₸", img: "https://www.lexus.com/content/dam/lexus/images/models/lx/2024/visualizer/600/exterior/22-inch-forged-alloy-wheels/atomic-silver/3-4-front-view.png", desc: "V6 3.5L Turbo, Премиум жол талғамайтын көлік" },
    { name: "Ford Mustang Shelby", price: "42 000 000 ₸", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800", desc: "760 а.к., Shelby GT500" }
];

const container = document.getElementById('car-container');

// Сипаттаманы шығару функциясы
function showSpecs(name, info) {
    alert("КӨЛІК: " + name + "\n\nТЕХНИКАЛЫҚ СИПАТТАМАСЫ:\n" + info);
}

// Карточкаларды шығару
cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
        <img src="${car.img}" class="car-img" alt="${car.name}">
        <h4>${car.name}</h4>
        <p style="color: #5bc0be; font-weight: bold;">${car.price}</p>
        <button onclick="showSpecs('${car.name}', '${car.desc}')">СИПАТТАМА</button>
    `;
    container.appendChild(card);
});