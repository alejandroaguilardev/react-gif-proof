import AddCategory from "../../components/AddCategory";
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe("Esta es la prueba para Add", () => {
    const setCategories =jest.fn(); // simula una funcion
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    })

    test("debe mostrar correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("debe de cambiar el input", () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value)

    });

    test("no debe de enviar submit", () => {
        wrapper.find('form').simulate('submit',{ preventDefault(){}});
        
        expect( setCategories ).not.toHaveBeenCalled(); 
    });

    test("debe de llamar el setCategories y limpiar la caja de texto", () => {
        const value = 'Alejandro';

        //1imular el change
        wrapper.find('input').simulate('change', {target:{value}})

        //2 simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        //3 setCategories se debe haber llamado
        expect( setCategories ).toHaveBeenCalledTimes(1); // la cantidad de veces que se ejecuta
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function)); // Esperar que se haya llamado como una funcion

        //4 el valor debe estat ''
        expect( wrapper.find('input').prop('value')).toBe(""); 

    });
});