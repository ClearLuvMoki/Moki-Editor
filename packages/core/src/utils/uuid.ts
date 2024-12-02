export function uuid(alphabet: string = "1234567890abcdef", size: number = 10) {
    let result = '';
    const alphabetLength = alphabet.length;

    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * alphabetLength);
        result += alphabet[randomIndex];
    }

    return result;
}
