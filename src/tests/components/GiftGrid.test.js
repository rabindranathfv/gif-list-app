import { shallow } from 'enzyme';
import React from 'react';
import { GiftGrid } from '../../Components/GiftGrid';

jest.mock('../../hooks/useFetchGift',
  () => {
    return {
      useFetchGift: () => {
        return {
          gifts: useFetchGiftMock,
          loading: false
        }
      }
    }
  }
);

const useFetchGiftMock = [
    {
      id: 'GRSnxyhJnPsaQy9YLn',
      title: 'Dragon Ball GIF by TOEI Animation UK',
      url: 'https://media4.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=59b5fe6594zonf5h4rx9rvzt7vuiaytclcniik77pzubyfu5&rid=giphy.gif&ct=g'
    },
    {
      id: '977YesTjNfQC7vQiph',
      title: 'Dragon Ball GIF by TOEI Animation UK',
      url: 'https://media2.giphy.com/media/977YesTjNfQC7vQiph/giphy.gif?cid=59b5fe6594zonf5h4rx9rvzt7vuiaytclcniik77pzubyfu5&rid=giphy.gif&ct=g'
    }
];

describe('should test GiftGrid component', () => {
    const category = ['dragon ball'];
    const wrapper = shallow( <GiftGrid category={category} />);
    
    it('should render giftGrid component' , () => {
      expect(wrapper).toMatchSnapshot();
   });

   it('should giftGrid component have a category in a title' , () => {
        const categoryExist = wrapper.find('h3');
        expect( typeof categoryExist.text().trim() ).toEqual('string');
        expect( categoryExist.text().trim()).toEqual('dragon ball');
    });

    it('should giftGrid component have a class without response' , () => {
        const classNameGifts = wrapper.find('.grid-gift');
        expect(classNameGifts).toBeDefined();
        expect(classNameGifts).toHaveLength(1);
        expect(classNameGifts.props().className).toEqual('grid-gift');
    })

    it('should giftGrid component have a class with success custom hook response' , () => {
      const wrapper = shallow( <GiftGrid category={category} />);
      expect(wrapper).toMatchSnapshot();
      
      const GiftItem = wrapper.find('GiftItem');
      GiftItem.debug();
      expect(GiftItem.length).toBe(useFetchGiftMock.length);
  })
});
