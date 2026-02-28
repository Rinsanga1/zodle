export enum HitType {
  none = "none",
  hit = "hit",
  partial = "partial",
  miss = "miss",
  removed = "removed",
}

export interface Letter {
  readonly char: string;
  readonly type: HitType;
}

export interface ValidateRequest {
  readonly guess: string;
}

export interface ValidateResponse {
  readonly valid: boolean;
}

export interface EvaluateRequest {
  readonly hiddenWord: string;
  readonly guess: string;
}

export interface EvaluateResponse {
  readonly letters: readonly Letter[];
}

export interface WordsResponse {
  readonly words: readonly string[];
}

export interface TodayWordResponse {
  readonly word: string;
  readonly date: string;
}
