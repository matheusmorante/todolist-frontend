

export const isMatching = (password, confirmPassword, errorText) => {
    if (password !== confirmPassword) {
        alert(errorText);
        return false;
    }
    return true
}

export const isEmpty = (fields) => {
    const fields = document.getElementsByTagName('input');
    let boolean = true;

    fields.forEach(field => {
        if (field.value.trim() === '') {
            const labelText = field.previousElementSibling.innerText.trim();
            let p = document.createElement('p');
            p.textContent = `O campo "${labelText}" não pode estar vázio`
            field.insertAdjacentElement('afterend', p)
            boolean = false
        } else {

        }
    })
    return boolean;

}