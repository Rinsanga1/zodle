import {
  HttpApi,
  HttpApiBuilder,
  HttpApiEndpoint,
  HttpApiGroup,
} from "@effect/platform";
import { Schema } from "effect";
import { Effect } from "effect";
import {
  getWordOfTheDay,
  getValidGuesses,
  isValidWord,
} from "./words.js";
import { evaluateGuess } from "./logic.js";

const GuessSchema = Schema.Struct({
  guess: Schema.String.pipe(Schema.minLength(5), Schema.maxLength(5)),
});

const HiddenWordSchema = Schema.Struct({
  hiddenWord: Schema.String.pipe(Schema.minLength(5), Schema.maxLength(5)),
  guess: Schema.String.pipe(Schema.minLength(5), Schema.maxLength(5)),
});

class WordsApi extends HttpApiGroup.make("words").add(
  HttpApiEndpoint.get("list", "/").addSuccess(
    Schema.Struct({
      words: Schema.Array(Schema.String),
    })
  )
).add(
  HttpApiEndpoint.get("today", "/today").addSuccess(
    Schema.Struct({
      word: Schema.String,
      date: Schema.String,
    })
  )
) {}

class GameApi extends HttpApiGroup.make("game").add(
  HttpApiEndpoint.post("validate", "/validate")
    .setPayload(GuessSchema)
    .addSuccess(
      Schema.Struct({
        valid: Schema.Boolean,
      })
    )
).add(
  HttpApiEndpoint.post("evaluate", "/evaluate")
    .setPayload(HiddenWordSchema)
    .addSuccess(
      Schema.Struct({
        letters: Schema.Array(
          Schema.Struct({
            char: Schema.String,
            type: Schema.Union(
              Schema.Literal("none"),
              Schema.Literal("hit"),
              Schema.Literal("partial"),
              Schema.Literal("miss"),
              Schema.Literal("removed")
            ),
          })
        ),
      })
    )
) {}

export const BirdleApi = HttpApi.make("BirdleApi")
  .add(WordsApi)
  .add(GameApi);

const WordsHandlers = HttpApiBuilder.group(BirdleApi, "words", (handlers) =>
  handlers
    .handle("list", () => Effect.succeed({ words: getValidGuesses() }))
    .handle("today", () => getWordOfTheDay())
);

const GameHandlers = HttpApiBuilder.group(BirdleApi, "game", (handlers) =>
  handlers
    .handle("validate", ({ payload }) =>
      Effect.succeed({ valid: isValidWord(payload.guess) })
    )
    .handle("evaluate", ({ payload }) =>
      evaluateGuess(payload.hiddenWord, payload.guess)
    )
);

export const ApiLive = Effect.mergeAll(
  WordsHandlers,
  GameHandlers
);
