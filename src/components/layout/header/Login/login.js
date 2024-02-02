const handleSubmit = (event) => {
    event.preventDefault();
    const formNode = event.target;
    formConsole(formNode);
}

const formConsole = (formNode) => {
    const {elements} = formNode;
    Array.from(elements).forEach((element) => {
        const {name, value} = element;
        console.log({ [name]: value });

    })
}

export {handleSubmit};