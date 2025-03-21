

export const isMatching = (password, confirmPassword, errorText) => {
    if (password !== confirmPassword) {
        alert(errorText);
        return false;
    }
    return true
}

export const descriptionError = description => {
    let error = null;
    if (description.length >= 65) {
        error = 'Descrição da tarefa deve ter no máximo 65 caracteres.';
    }
    if (description.length === 0) {
        error = 'Descrição da tarefa não deve estar vázio.';
    }
    return error
}
