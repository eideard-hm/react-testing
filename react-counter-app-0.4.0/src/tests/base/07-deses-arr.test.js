import '@testing-library/jest-dom';

import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas en el archivo 07-deses-arr.js', () => {

    test('retornaArreglo debe de retornar un string y un número', () => {
        const [word, number] = retornaArreglo(); // ['ABC', 123]
        const arrExpect = ['ABC', 123];
        // expect(arr).toEqual(arrExpect);
        expect(word).toBe(arrExpect[0]);
        expect(number).toBe(arrExpect[1]);
    })

})