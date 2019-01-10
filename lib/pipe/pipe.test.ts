import {upper} from "./pipe";

test('compose an uppercase with a trim', () => {
    const UT = (upper.trim)("X ");

    expect(UT).toBe("X");
});