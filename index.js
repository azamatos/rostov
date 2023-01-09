const mainBlockButton = document.querySelector('.main_block__button')
const modalContainer = document.querySelector('.modal__container')
const modalForm = document.getElementById("modal__form")

const isHidden = (elem) => {
    const styles = window.getComputedStyle(elem)
    return styles.display === 'none'
}

mainBlockButton.addEventListener('click', (event) => {
    event.preventDefault()

    document.body.style.backgroundColor = "#444442"
    modalContainer.style.display = "block"
})

const phoneNumber_el = document.getElementById('input__phoneNumber');

const maskOptions = {
    mask: '+{7} (000) 000-00-00',
    lazy: false,
    placeholderChar: '_'
};

IMask(phoneNumber_el, maskOptions);

modalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const validData = {}
    let hasError = false
    // message check

    const nameInput = document.getElementById('input__name')
    const nameError = document.getElementById('err_name')
    const nameRegex = /^([а-яА-Я]+)$/


    if (nameInput.value == '' || !nameRegex.test(nameInput.value)) {
        nameError.style.visibility = "visible"
        hasError = true
    } else {
        nameError.style.visibility = "hidden"
        validData.name = nameInput.value
    }

    // phoneNumber check

    const phoneNumberInput = document.getElementById('input__phoneNumber')
    const phoneNumberError = document.getElementById('err_phoneNumber')
    const onlyDigits = phoneNumberInput.value.replace(/\D+/g, '');
    const phoneNumberRegex = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/

    if (phoneNumberInput.value == '' || !phoneNumberRegex.test(onlyDigits)) {
        phoneNumberError.style.visibility = "visible"
        hasError = true
    } else {
        phoneNumberError.style.visibility = "hidden"
        validData.phoneNumber = "+" + onlyDigits
    }

    // message check

    const messageInput = document.getElementById('input__message')
    const messageError = document.getElementById('err_message')
    const messageRegex = /^([а-яА-Я0-9]+)$/

    if (messageInput.value == '' || !messageRegex.test(messageInput.value)) {
        messageError.style.visibility = "visible"
        hasError = true
    } else {
        messageError.style.visibility = "hidden"
        validData.message = messageInput.value
    }

    if (!hasError) {
        document.body.style.backgroundColor = "#fff"
        modalContainer.style.display = "none"
        console.log(validData)
    }
});