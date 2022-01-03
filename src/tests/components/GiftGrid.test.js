import { shallow } from 'enzyme';
import React from 'react';
import { GiftGrid } from '../../Components/GiftGrid';

describe('should test GiftGrid component', () => {
    const category = ['dragon ball'];
    const wrapper = shallow( <GiftGrid category={category} />);
    
    it('should render giftGrid component' , () => {
        wrapper.debug()
        expect(wrapper).toBeDefined();
   });

   it('should giftGrid component have a category in a title' , () => {
        const categoryExist = wrapper.find('h3');
        expect( typeof categoryExist.text().trim() ).toEqual('string');
        expect( categoryExist.text().trim()).toEqual('dragon ball');
    });

    it('should giftGrid component have a class for show gifts' , () => {
        const classNameGifts = wrapper.find('.grid-gift');
        expect(classNameGifts).toBeDefined();
        expect(classNameGifts).toHaveLength(1);
    })
});
