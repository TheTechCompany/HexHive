
const hashCode = (str: string) => {
    var hash = 0;
    for(var i = 0; i < str.length; i++){
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}


const intToRGB = (i: number) => {
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();
    var colorCode = "00000".substring(0, 6 - c.length) + c; 
        return "#"+ colorCode; 
}

const padZero = (str : string, len : number =2) => {
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}


export const invertColor = (hex: string) => {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

export const stringToColor = (string: string) => intToRGB(hashCode(string))

