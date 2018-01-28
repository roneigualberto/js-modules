import { union, uniq } from 'ramda';
import soma, { sub, mult, div} from './utils';


const arr1 = [1, 1, 1, 2, 2, 3, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 6, 7, 7, 8, 9, 10, 1];

const arr3 = union(arr1, arr2);

const arr4 = uniq(arr1, arr2);

console.log(arr3);
console.log(arr4)

console.log(soma(2, 2));
console.log(sub(2, 2));
console.log(mult(2, 2));
console.log(div(2, 2));