export default function sort(data, key, direction) {
    if (direction === 'asc') {
        return data.sort((a, b) => a[key].localeCompare(b[key]))
    } else if (direction === "desc") {
        return data.sort((a, b) => b[key].localeCompare(a[key]))
    }

}