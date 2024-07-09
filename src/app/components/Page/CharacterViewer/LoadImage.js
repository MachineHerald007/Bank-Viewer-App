export function encodeToBase64(binaryImg) {
    let fileType = "png";
    let base64String = btoa(
        new Uint8Array(binaryImg)
            .reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
    return `data:${fileType};base64,${base64String}`;
}

export function loadCharacterImage(character) {
    return character.image ? encodeToBase64(character.image) : `/class_defaults/${character.class}.png` 
}