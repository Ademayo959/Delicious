const phoneNavBtn = document.querySelector('.phone-nav-btn');
const phoneNavbar = document.querySelector('.phone-navbar')
phoneNavBtn.addEventListener('click', () => {
    if (phoneNavbar.style.display === 'block') {
        phoneNavbar.style.display = 'none';
    } else {
        phoneNavbar.style.display = 'block';
    }
});
const breakfastmenu = document.querySelector('.breakfast2')
//Foods1 Items
const lunch = document.querySelector('.lunch');
const onePic = document.querySelector('.one-pic');
const oneName = document.querySelector('.one-name');
const onePrice = document.querySelector('.one-price');
const twoPic = document.querySelector('.two-pic');
const twoName = document.querySelector('.two-name');
const twoPrice = document.querySelector('.two-price');
const threePic = document.querySelector('.three-pic');
const threeName = document.querySelector('.three-name');
const threePrice = document.querySelector('.three-price');
//Foods2 Items
const FoodTwoOnePic = document.querySelector('.foods2-one-pic');
lunch.addEventListener('click', () => {
    lunch.style.color = 'red'
    breakfastmenu.innerText = 'LUNCH';
    onePic.setAttribute('src', 'Photos/Tomatoveggies.png');
    oneName.innerText = 'Tomato and Veggies with sesame';
    onePrice.innerText = '$11.99'
    twoPic.setAttribute('src', 'Photos/Ramen.png');
    twoName.innerText = 'Ramen with vegetables';
    twoPrice.innerText = '$19.99'
    threePic.setAttribute('src', 'Photos/Steak.png');
    threeName.innerText = 'Steak and vegetable salad';
    threePrice.innerText = '$14.99'
    //Foods2 Items
    FoodTwoOnePic.setAttribute('src', 'Photos/Vegetable_stir_fry_on_white_plate_top_view_-removebg-preview.png')
});
