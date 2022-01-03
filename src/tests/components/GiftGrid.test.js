import { shallow } from 'enzyme';
import React from 'react';
import { GiftGrid } from '../../Components/GiftGrid';

describe('should test GiftGrid component', () => {
   it('should render giftGrid component' , () => {
        const store = { category: ['dragon ball'] };
        const wrapper = shallow( <GiftGrid category={store.category} />);

        expect(wrapper).toBeDefined();
   });

   it('should giftGrid component have a category' , () => {
     const store = { category: ['dragon ball']};
     const wrapper = shallow( <GiftGrid category={store.category} />);

     expect( wrapper ).toMatchSnapshot();
    });
});
