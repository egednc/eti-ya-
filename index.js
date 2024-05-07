
// user select first selection initialy
document.addEventListener('DOMContentLoaded', function () {
    const whiteVariantBox = document.getElementById('whiteVariant');
    whiteVariantBox.click();

    const initialCapacity = document.querySelector('.product-capacity');
    if (initialCapacity) {
        initialCapacity.classList.add('clicked');
    }

    const initialPhoneBox = document.querySelector('.phone-box');
    if (initialPhoneBox) {
        initialPhoneBox.classList.add('active');
    }
});


//
document.addEventListener('DOMContentLoaded', function () {
    const phoneBoxes = document.querySelectorAll('.phone-box');

    phoneBoxes.forEach(box => {
        box.addEventListener('click', function () {
            phoneBoxes.forEach(box => {
                box.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});

//phone variant selection state changes
document.addEventListener('DOMContentLoaded', function () {
    const truePriceElement = document.querySelector('.price');

    const whiteVariantBox = document.getElementById('whiteVariant');
    const redVariantBox = document.getElementById('redVariant');

    whiteVariantBox.addEventListener('click', function () {
        truePriceElement.textContent = '29.900,00';
        changeVariant('white');
    });

    redVariantBox.addEventListener('click', function () {
        truePriceElement.textContent = '32.000,00';
        changeVariant('red');
    });

    const carouselItems = document.querySelectorAll('.carousel-item img');
    const boxItems = document.querySelectorAll('.box img')
    function changeVariant(variant) {
        if (variant === 'white') {
            carouselItems[0].src = "/src/images/iphone.jpg";
            carouselItems[1].src = "/src/images/iphone12.jpg";
            carouselItems[2].src = "/src/images/iphoneCam.jpg";
            boxItems[0].src = "/src/images/iphone.jpg"
            boxItems[1].src = "/src/images/iphone12.jpg"
            boxItems[2].src = "/src/images/iphoneCam.jpg"
        } else if (variant === 'red') {
            carouselItems[0].src = "/src/images/iphonered.jpg";
            carouselItems[1].src = "/src/images/iphonered2webp.webp";
            carouselItems[2].src = "/src/images/iphonered3.jpg";
            boxItems[0].src = "/src/images/iphonered.jpg"
            boxItems[1].src = "/src/images/iphonered2webp.webp"
            boxItems[2].src = "/src/images/iphonered3.jpg"
        }
    }
});

//product capacity selection
document.addEventListener('DOMContentLoaded', function () {
    const productCapacityContainer = document.querySelector('.product-capacity-container');

    productCapacityContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('product-capacity')) {
            const productCapacities = document.querySelectorAll('.product-capacity');
            productCapacities.forEach(capacity => {
                capacity.classList.remove('clicked');
            });
            event.target.classList.add('clicked');
        }
    });
});

//when the capacity change price state change

document.addEventListener('DOMContentLoaded', function () {
    const productCapacityContainer = document.querySelector('.product-capacity-container');
    const truePriceElement = document.querySelector('.price');
    const productCapacityTitle = document.querySelector('.product-capacity-title');

    productCapacityContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('product-capacity')) {
            const selectedCapacity = event.target.dataset.capacity;

            if (selectedCapacity === '128') {
                truePriceElement.textContent = formatPrice(29000);
                productCapacityTitle.textContent = '128 GB'; // Update the title

            } else if (selectedCapacity === '256') {
                productCapacityTitle.textContent = '256 GB'; // Update the title

                truePriceElement.textContent = formatPrice(34000);
            }

            const productCapacities = document.querySelectorAll('.product-capacity');
            productCapacities.forEach(capacity => {
                capacity.classList.remove('clicked');
            });
            event.target.classList.add('clicked');
        }
    });
});

// Function to format the price
function formatPrice(price) {
    const formattedPrice = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY'
    }).format(price);

    return formattedPrice.replace('₺', '').replace('TRY', '').trim();
}



document.addEventListener('DOMContentLoaded', function () {
    const addButtons = document.querySelectorAll('.product-additional-service-add');

    addButtons.forEach(addButton => {
        addButton.addEventListener('click', function () {
            const buttonText = this.querySelector('span');
            const svgIcon = this.querySelector('svg');

            if (buttonText.textContent === 'Ekle') {
                buttonText.textContent = 'Kaldır';
                svgIcon.style.visibility = 'hidden';
            } else {
                buttonText.textContent = 'Ekle';
                svgIcon.style.visibility = 'visible';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const decreaseButton = document.querySelector('.decrease-button');
    const increaseButton = document.querySelector('.increase-button');
    const quantityElement = document.querySelector('.quantity');

    decreaseButton.addEventListener('click', function () {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    });

    increaseButton.addEventListener('click', function () {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.add-product-to-card');
    const quantitySpan = document.querySelector('.quantity');

    addButton.addEventListener('click', function () {
        const quantity = parseInt(quantitySpan.textContent);

        if (quantity > 3) {
            $('#failModal').modal('show');
        } else {
            $('#succesModal').modal('show');
        }
    });
});

