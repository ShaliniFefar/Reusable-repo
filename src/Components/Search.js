export default function search(array, value) {
    return array.filter(user => user.name.toLowerCase().includes(value));
}