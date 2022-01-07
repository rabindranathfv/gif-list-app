import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';

import { AddCategory } from '../../Components/AddCategory';

describe('AddCategory component', () => {
    let setCategory = jest.fn();
    let wrapper =  shallow( <AddCategory setCategory={setCategory} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategory={setCategory} />);
    });

    test('should create component', () => {
        wrapper.debug();
        expect( wrapper).toMatchSnapshot();
    });

    test('should trigger addHandler', () => {
        const input = wrapper.find('input');
        const inputText = 'input test value';
        input.simulate('change', { 
            target: { value: inputText }
            }
        );
        const textSearch = wrapper.find('p');
        
        expect(textSearch.text().trim()).toBe(inputText);
    });
    
    test('should call handleSubmit but do not call setCategory', () => {
        const input = wrapper.find('form');
        input.simulate('click', { preventDefault: () => {} });

        expect(setCategory).not.toBeCalled();
    });
    
    test('should call handleSubmit but do call setCategory', () => {
        const inputText = 'input test value';
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: inputText } } );
        
        const form = wrapper.find('form');
        form.simulate('submit', { preventDefault: () => {} });

        expect(setCategory).toHaveBeenCalled();
        expect(setCategory).toHaveBeenCalledWith( expect.any(Function));
        expect(input.prop('value')).toBe('');
    })
    
})
