import {sum} from "../do/math/sum";

import {curry} from "./curry";

describe('c', () => {
    test('expect sum := (v0: number, v1: number) => number, to fn partially ', () => {

        const value = [1, -1];

        const adder = curry(sum);
        const add01 = adder(value[0]);

        expect(typeof add01).toBe("function");
        expect(typeof add01).toBe("function");

        const valSum = add01(value[1]);

        expect(valSum).toBe(value[0] + value[1]);
    });
});