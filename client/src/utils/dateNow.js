export default function dataNow() {
    const date = new Date();

    const dow = date.toLocaleString('pt-BR',{ weekday:'long'});    
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = date.getFullYear();

    const formatedDate = `${dow}, ${d}/${m}/${y}`;
    return formatedDate;
}