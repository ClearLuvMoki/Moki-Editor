export const isDarkColor = (hexColor: string) => {
    if (!hexColor) return false;
    if (hexColor.startsWith('#')) {
        hexColor = hexColor.slice(1);
    }

    if (hexColor.length === 3) {
        hexColor = hexColor[0] + hexColor[0] + hexColor[1] + hexColor[1] + hexColor[2] + hexColor[2];
    }

    const r = parseInt(hexColor.substring(0, 2), 16);
    const g = parseInt(hexColor.substring(2, 4), 16);
    const b = parseInt(hexColor.substring(4, 6), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness < 125;
}
