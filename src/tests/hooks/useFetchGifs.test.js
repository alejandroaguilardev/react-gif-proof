import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Esta es una prueba useFetch', () => {

    test('debe de retornar el estado inicial', async()=> {
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs( 'one punch' ));
       const {data, loading} =  result.current;

       await waitForNextUpdate();


       expect( data ).toEqual([]);
       expect( loading ).toBe (true);
    });

    test('debe de retornar u narreglo de img y el loading en false', async ()=>{

        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('one punch' ));

        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect( data.length ).toBe(10); 
        expect( loading ).toBe (false);


    });
});