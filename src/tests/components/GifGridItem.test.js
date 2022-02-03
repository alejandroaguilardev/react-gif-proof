import GifGridItem from "../../components/GifGridItem";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

describe('Prueba de Componente', () => {
    const title = 'Un titulo';
    const url ="https://dominio.com/image";
    const wrapper = shallow(<GifGridItem title={ title } url= { url } />);

    test("Debe de mostrar el componte correctamente", () =>{
        expect(wrapper).toMatchSnapshot();
    }); 

    test('debe de tener un parrafo con el texto con el title', ()=>{
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });

    test('debe de tener la imagen igual a la url y alt', ()=>{
        const img = wrapper.find('img');
        // console.log(img.html())
        // console.log(img.prop())
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('debe de tener la clase animate', ()=>{
        const div = wrapper.find('div');
        const className  = div.prop('className');

        console.log(div.props())
        expect( className.includes('animate__fadeIn') ).toBe( true );
    });


});  