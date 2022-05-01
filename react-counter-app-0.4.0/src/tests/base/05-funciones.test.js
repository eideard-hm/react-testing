import '@testing-library/jest-dom'

import { getUser, getUsuarioActivo } from "../../base/05-funciones"

describe('Pruebas en el archivos 05-funciones.js', () => {

    test('getUser debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test('getUsuarioActivo debe retornar un objeto, enviando el párametro name', () => {
        const name = 'Edier Hernández';
        const user = {
            uid: 'ABC567',
            username: name
        }
        const userReceived = getUsuarioActivo(name);

        expect(userReceived).toEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto, sin el párametro name', () => { 
        const user = {
            uid: 'ABC567',
            username: 'Ximena'
        }
        const userReceived = getUsuarioActivo();

        expect(userReceived).toEqual(user);
     });

})