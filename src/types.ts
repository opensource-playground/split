export { };

declare global {
  type Splitted<Str extends string, Delimiter extends string> = string extends Str ? string[] :
    Str extends '' ? [] :
    Str extends `${infer Chunk}${Delimiter}${infer Rest}`
    ? [Chunk, ...Splitted<Rest, Delimiter>]
    : [Str]
  export interface String {
    splits: <S extends string, D extends string>(delimiter: D) => Splitted<S, D>
  }
}
