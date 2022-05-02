import '@testing-library/jest-dom'

import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from '../../data/heroes';

describe('Pruebas en el archivo imp-exp.js', () => {

    test('debe de retornar un heroe por id, pasandole un id correcto', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroesData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroesData);
    });

    test('debe de retornar undefined, pasandole un id incorrecto', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })

    test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);

        const heroesByOwner = heroes.filter(h => h.owner === owner);

        expect(heroesDC).toEqual(heroesByOwner);
    })

    test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroesMarvel = getHeroesByOwner(owner);

        expect(heroesMarvel.length).toBe(2);
    })

})