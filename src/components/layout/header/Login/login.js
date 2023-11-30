const handleSubmit = (event) => {
    event.preventDefault();
    console.log('отправка');
}

const logForm = document.querySelector(`.${styles.inputs}`);
logForm.addEventListener("submit", handleSubmit);