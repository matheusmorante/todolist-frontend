

export const isMatching = (password, confirmPassword, errorText) => {
    if (password !== confirmPassword) {
        alert(errorText);
        return false;
    }
    return true
}
