import { Effect } from "effect";
import { readFileSync } from "fs";
import { join } from "path";

const wordsContent = readFileSync(
  join(process.cwd(), "src/utils/mizo_5_letter_words_list.txt"),
  "utf-8"
);

const words = wordsContent
  .split("\n")
  .map((w) => w.trim().toLowerCase())
  .filter((w) => w.length === 5);

const legalWords: readonly string[] = words;

const legalGuesses: readonly string[] = words;

export type WordListConfig = {
  readonly targetWords: readonly string[];
  readonly validGuesses: readonly string[];
};

export const defaultWordList: WordListConfig = {
  targetWords: [...legalWords],
  validGuesses: [...legalWords, ...legalGuesses],
};

function getWordList(): WordListConfig {
  return defaultWordList;
}

export const getTargetWords = (): readonly string[] =>
  getWordList().targetWords;

export const getValidGuesses = (): readonly string[] =>
  getWordList().validGuesses;

export const isValidWord = (word: string): boolean =>
  getValidGuesses().includes(word.toLowerCase());

export const isTargetWord = (word: string): boolean =>
  getTargetWords().includes(word.toLowerCase());

export function getWordOfTheDay(): Effect.Effect<{
  readonly word: string;
  readonly date: string;
}> {
  return Effect.gen(function* () {
    const today = new Date();
    const dateStr = today.toISOString().split("T")[0];
    
    const daysSinceEpoch = Math.floor(
      today.getTime() / (1000 * 60 * 60 * 24)
    );
    
    const allWords = getTargetWords();
    const wordIndex = daysSinceEpoch % allWords.length;
    const word = allWords[wordIndex]!;
    
    return { word, date: dateStr };
  });
}

export function getRandomWord(): Effect.Effect<string> {
  return Effect.gen(function* () {
    const allWords = getTargetWords();
    const randomIndex = Math.floor(Math.random() * allWords.length);
    return allWords[randomIndex]!;
  });
}
