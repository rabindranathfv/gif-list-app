import { shallow } from 'enzyme';
import React from 'react';
import GiftExpertApp from '../../Components/GiftExpertApp';

describe('GiftExpertApp', () => {
    const categoryMock = 'dragon ball';
    const setCategory = jest.fn();
    let wrapper = shallow( <GiftExpertApp />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <GiftExpertApp />)
    })

    test('should render GiftExpertApp', () => {
        expect( wrapper).toMatchSnapshot();
    })
    
    test('should render AddCategory component', () => {
        const AddCategory = wrapper.find('AddCategory');
        AddCategory.debug();
        expect(AddCategory).toBeDefined();
    })
    
    test('should render GiftGrid component', () => {
        const GiftGrid = wrapper.find('GiftGrid');
        GiftGrid.debug();
        expect(GiftGrid).toBeDefined();
        expect(GiftGrid.prop('category')).toEqual( [ categoryMock]);
    })

})
