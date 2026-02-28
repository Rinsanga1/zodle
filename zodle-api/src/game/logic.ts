import { Effect } from "effect";
import { HitType, Letter } from "./types.js";

export interface Word {
  readonly letters: readonly Letter[];
}

function createWord(word: string): Word {
  const letters = word
    .toLowerCase()
    .split("")
    .map((char) => ({ char, type: HitType.none as HitType }));
  return { letters };
}

export function evaluateGuess(
  hiddenWord: string,
  guess: string
): Effect.Effect<{ readonly letters: readonly Letter[] }> {
  return Effect.gen(function* () {
    const hidden = createWord(hiddenWord);
    const guessed = createWord(guess);

    for (let i = 0; i < 5; i++) {
      if (guessed.letters[i].char === hidden.letters[i].char) {
        guessed.letters[i] = { ...guessed.letters[i], type: HitType.hit };
        hidden.letters[i] = { ...hidden.letters[i], type: HitType.removed };
      }
    }

    for (let i = 0; i < 5; i++) {
      const targetLetter = hidden.letters[i];
      if (targetLetter.type !== HitType.none) continue;

      for (let j = 0; j < 5; j++) {
        const guessedLetter = guessed.letters[j];
        if (guessedLetter.type !== HitType.none) continue;

        if (guessedLetter.char === targetLetter.char) {
          guessed.letters[j] = { ...guessedLetter, type: HitType.partial };
          hidden.letters[i] = { ...targetLetter, type: HitType.removed };
          break;
        }
      }
    }

    const result: Letter[] = [];
    for (let i = 0; i < 5; i++) {
      let letter = guessed.letters[i];
      if (letter.type === HitType.none) {
        letter = { ...letter, type: HitType.miss };
      }
      result.push(letter);
    }

    return { letters: result };
  });
}

export function validateGuess(
  guess: string
): Effect.Effect<{ readonly valid: boolean }> {
  return Effect.gen(function* () {
    const isValid = guess.length === 5 && /^[a-zA-Z]+$/.test(guess);
    return { valid: isValid };
  });
}
