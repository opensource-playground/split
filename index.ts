import './global.d.ts'

String.prototype.splits = function <S extends string, D extends string>(delimiter: D): Splitted<S, D> {
  const str = String(this)
  return (str.split(delimiter)) as Splitted<S, typeof delimiter>
};
