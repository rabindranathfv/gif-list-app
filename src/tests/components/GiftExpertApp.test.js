import { shallow } from 'enzyme';
import React from 'react';
import GiftExpertApp from '../../Components/GiftExpertApp';

describe('GiftExpertApp', () => {
    let wrapper = shallow( <GiftExpertApp />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <GiftExpertApp />)
    })

    test('should render GiftExpertApp', () => {
        expect( wrapper).toMatchSnapshot();
    })
    

})
