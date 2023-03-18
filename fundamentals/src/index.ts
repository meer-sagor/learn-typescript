// Primitive Type
// Annotation
// String type
let userName: string = 'Meer Sagor';
// number
let sales: number = 123_456_789;
// number array type
let numbers: number[] = [1, 2, 3];
// boolean type
let is_published: boolean = false;
// any type in TypeScript
let label;

// Tuple Type

const user: [number, string] = [1, 'Meer'];

// Enum Type

const small = 1;
const medium = 2;
const large = 3;

// convert into Enum
// by default enum type are 0 index based.
enum Size {
  Small = 1,
  Medium,
  Large,
}
console.log(Size.Medium);

// Function
function calculateTax(income: number): number {
  return income * 0.2;
}

// Object
let employee: {
  id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Mosh',
  retire: (date: Date) => {},
};
