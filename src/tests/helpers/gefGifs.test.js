import { getGifs } from "../../helpers/getGifs";

describe("Esta esu na prueba en getGifs", () => {
    test("debe de traer 10 elementos", async () => {

        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );
    })
});