
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

export const stringToColor = (string: string) => intToRGB(hashCode(string))

