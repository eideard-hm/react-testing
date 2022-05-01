import '@testing-library/jest-dom'

import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en el archivo template-string.js', () => {
    
    test('getSaludo debe de retornar Hola <nombre>', () => { 
        const name = 'Edier';
        const greeting =  getSaludo(name);

        expect(greeting).toBe(`Hola ${name}`)
     })

     test('getSaludo debe de retornar Hola Ximena', () => { 
        const greeting =  getSaludo();
         expect('Hola Ximena').toBe(greeting);
      });
});