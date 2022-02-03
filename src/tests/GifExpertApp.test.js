import { shallow } from "enzyme"
import GifExpertApp from "../GifExpertApp"

describe('Prueba gifExper', ()=>{
    let wrapper = shallow( <GifExpertApp />);

    test('Llama al componente', ()=>{
       expect( wrapper ).toMatchSnapshot();
    });

    test('debe dem ostrar una lista de categorias', ()=>{
        const categorias = ['One punch', 'dragon'];
        wrapper = shallow( <GifExpertApp defaultCategories={categorias}/>);
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length).toBe(categorias.length);

        
     })
})