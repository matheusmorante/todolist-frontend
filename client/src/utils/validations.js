

export const isMatching = (password, confirmPassword, errorText) => {
    if (password !== confirmPassword) {
        alert(errorText);
        return false;
    }
    return true
}

export const isNotEmpty = (fields) => {
    const fields = document.getElementsByTagName('input');

    let emptyFields = [];

    fields.forEach(field => {
        if (field.value.trim() === '') {
            const labelText = field.previousElementSibling.innerText.trim();
            field.add
        }
    })

    if (emptyFields.length > 0) {
        const fieldsText = emptyFields.map(field => `"${field}"`).join(', ');

        alert(`Os campo `)
    }
}