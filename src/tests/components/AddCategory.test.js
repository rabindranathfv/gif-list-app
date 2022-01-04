import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';

import { AddCategory } from '../../Components/AddCategory';

describe('AddCategory component', () => {
    const setCategoryMockResp = '';
    const setCategoryMock = jest.fn(() => Promise.resolve(setCategoryMockResp));
    let wrapper =  shallow( <AddCategory setCategory={setCategoryMock} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategory={setCategoryMock} />);
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
        expect(setCategoryMock).not.toBeCalled();
    });
    
    
    
})
