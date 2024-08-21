export const removePolishCharacters = (str: string): string => {
  const polishChars: { [key: string]: string } = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ż: 'z',
    ź: 'z',
    Ą: 'A',
    Ć: 'C',
    Ę: 'E',
    Ł: 'L',
    Ń: 'N',
    Ó: 'O',
    Ś: 'S',
    Ż: 'Z',
    Ź: 'Z',
  };

  return str
    .split('')
    .map((char: string) => polishChars[char] || char)
    .join('');
};
