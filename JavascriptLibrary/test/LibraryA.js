import {FunB} from './LibraryB.js';
import {testB} from './LibraryB.js';

export function functionA() {
    FunB();
}

testB();
console.log("IN A");
