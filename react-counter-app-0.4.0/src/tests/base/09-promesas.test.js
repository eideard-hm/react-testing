import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas en el archivo de 09-promesas.js', () => { 

    test('debe de retornar un Héroe Async', (done) => { 

        const id = 1;
        getHeroeByIdAsync(id)
        .then(heroe => {
            expect(heroe).toEqual(heroes[0]);
            done();
        });

     });

     test('debe de retornar un reject porque no se pudo resolver la promesa', (done) => { 

        const id = 15;
        getHeroeByIdAsync(id)
        .catch(e => {
            expect(e).toBe('No se pudo encontrar el héroe');
            done();
        });

     });

 })