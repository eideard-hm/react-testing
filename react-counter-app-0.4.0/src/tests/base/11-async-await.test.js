import '@testing-library/jest-dom'
import { getImagen } from '../../base/11-async-await'

describe('Pruebas con Async-Await y fetch', () => { 

    test('debe de retornar el url de la imagen', async () => {

       const url = await getImagen();
       
       expect(url.includes('.gif')).toBe(true);

      })

 })