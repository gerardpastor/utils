/**
 * A utility type for creating a tuple of a specified length and type.
 *
 * @template Length - The length of the tuple.
 * @template Type - The type of the elements in the tuple.
 *
 * @example
 * // Creates a tuple of length 3 with number type elements
 * type RGBTuple = Tuple<3, number>; // readonly [number, number, number]
 *
 * @example
 * // Creates a tuple of length 4 with number type elements
 * type RGBATuple = Tuple<4, number>; // readonly [number, number, number, number]
 *
 * @example
 * // Creates a tuple of length 3 or 4 with number type elements
 * type RGBTuple = Tuple<3 | 4, number>; // readonly [number, number, number] | readonly [number, number, number, number]
 *
 * @example
 * // Creates a tuple of length 2 with number or string type elements
 * type NumberStringTuple = Tuple<2, number | string>; // readonly [number | string, number | string]
 */
export type Tuple<Length extends number, Type, Acc extends Type[] = []> = Length extends Acc["length"]
  ? Readonly<Acc>
  : Tuple<Length, Type, [Type, ...Acc]>;
  

export default Tuple;
