import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import "@testing-library/jest-dom";



jest.mock("../../hooks/useFetchGifs");

describe("purebas a gifGrid", ()=> {

    const category = "One Punch";

    test("debe mostrarse correctamente", ()=> {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const  wrapper = shallow(<GifGrid category= {category}/>);
        expect( wrapper ).toMatchSnapshot();

    });

    test("debe de mostrar items cuando se cargan imagenes useFetch", () =>{
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost',
            title: 'cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const  wrapper = shallow(<GifGrid category= {category}/>);

        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length);
    });




})