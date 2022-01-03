import { shallow } from 'enzyme';
import React from 'react';
import { GiftGrid } from '../../Components/GiftGrid';

const effectResultsGifts = [
    {
      id: 'GRSnxyhJnPsaQy9YLn',
      title: 'Dragon Ball GIF by TOEI Animation UK',
      url: 'https://media4.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=59b5fe6594zonf5h4rx9rvzt7vuiaytclcniik77pzubyfu5&rid=giphy.gif&ct=g'
    },
    {
      id: '977YesTjNfQC7vQiph',
      title: 'Dragon Ball GIF by TOEI Animation UK',
      url: 'https://media2.giphy.com/media/977YesTjNfQC7vQiph/giphy.gif?cid=59b5fe6594zonf5h4rx9rvzt7vuiaytclcniik77pzubyfu5&rid=giphy.gif&ct=g'
    },
    {
      id: 'FRkBbAdRf2jTfahZaA',
      title: 'Dragon Ball GIF by TOEI Animation UK',
      url: 'https://media2.giphy.com/media/FRkBbAdRf2jTfahZaA/giphy.gif?cid=59b5fe6594zonf5h4rx9rvzt7vuiaytclcniik77pzubyfu5&rid=giphy.gif&ct=g'
    },
    {
      id: 'GH7rdGafqyeQ0',
      title: 'dragon ball maestro roshi GIF',
      url: 'https://media4.giphy.com/media/GH7rdGafqyeQ0/giphy.gif?cid=59b5fe6594zonf5h4rx9rvzt7vuiaytclcniik77pzubyfu5&rid=giphy.gif&ct=g'
    },
    {
      id: 'mZSN4XYLNh0t0vXRZF',
      title: 'Dragon Ball Sayan GIF',
      url: 'https://media2.giphy.com/media/mZSN4XYLNh0t0vXRZF/giphy.gif?cid=59b5fe6594zonf5h4rx9rvzt7vuiaytclcniik77pzubyfu5&rid=giphy.gif&ct=g'
    },
    {
      id: '1MdgKtLJ7rMw9wYWvH',
      title: 'Dragon Ball GIF by TOEI Animation UK',
      url: 'https://media0.giphy.com/media/1MdgKtLJ7rMw9wYWvH/giphy.gif?cid=59b5fe6594zonf5h4rx9rvzt7vuiaytclcniik77pzubyfu5&rid=giphy.gif&ct=g'
    },
    {
      id: 'A2w0A1JzVEW1G',
      title: 'dragon ball GIF',
      url: 'https://media2.giphy.com/media/A2w0A1JzVEW1G/giphy.gif?cid=59b5fe6594zonf5h4rx9rvzt7vuiaytclcniik77pzubyfu5&rid=giphy.gif&ct=g'
    },
    {
      id: 'qWnoVy8UlX3A44dtQk',
      title: 'Dragon Ball Fighting GIF by TOEI Animation UK',
      url: 'https://media2.giphy.com/media/qWnoVy8UlX3A44dtQk/giphy.gif?cid=59b5fe6594zonf5h4rx9rvzt7vuiaytclcniik77pzubyfu5&rid=giphy.gif&ct=g'
    },
    {
      id: '1JDWBaGctNea56U9tu',
      title: 'Dragon Ball GIF by TOEI Animation UK',
      url: 'https://media1.giphy.com/media/1JDWBaGctNea56U9tu/giphy.gif?cid=59b5fe6594zonf5h4rx9rvzt7vuiaytclcniik77pzubyfu5&rid=giphy.gif&ct=g'
    },
    {
      id: 'dJoJCypWihblC',
      title: 'dragon ball GIF',
      url: 'https://media1.giphy.com/media/dJoJCypWihblC/giphy.gif?cid=59b5fe6594zonf5h4rx9rvzt7vuiaytclcniik77pzubyfu5&rid=giphy.gif&ct=g'
    }
  ];
describe('should test GiftGrid component', () => {
    const category = ['dragon ball'];
    const wrapper = shallow( <GiftGrid category={category} />);
    const getSuccessFetchGifts = jest.fn(() => Promise.resolve(effectResultsGifts))
    const getErrorFetchGifts = jest.fn(() =>Promise.reject(new Error()));
    
    it('should render giftGrid component' , () => {
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
        expect(classNameGifts.props().className).toEqual('grid-gift');
    })
});
