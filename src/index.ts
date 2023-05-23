import { Splitted } from "./types";

export function split<S extends string, D extends string>(str: S, delimiter: D): Splitted<S, D> {
  return (str.split(delimiter)) as Splitted<S, typeof delimiter>
}
