// utils/rot13.js
// export const rot13 = (str: string) => {
//   return str.replace(/[a-zA-Z]/g, (char) => {
//     const start = char <= "Z" ? 65 : 97;
//     return String.fromCharCode(
//       ((char.charCodeAt(0) - start + 13) % 26) + start,
//     );
//   });
// };


export function rot13(text: string): string {
  return text.replace(/[a-zA-Z]/g, (char) => {
    const code = char.charCodeAt(0);

    // A-Z
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + 13) % 26) + 65);
    }

    // a-z
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + 13) % 26) + 97);
    }

    return char;
  });
}
