export default function firstLetterToMayus(word: string) {
  return word.split("")[0].toUpperCase().concat(word.slice(1));
}
