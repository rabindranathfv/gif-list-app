import { shallow } from 'enzyme';
import React from 'react';
import { GiftItem } from '../../Components/GiftItem';

describe('GiftItem', () => {
    const giftMock = {      
        id: 'GRSnxyhJnPsaQy9YLn',
        title: 'Dragon Ball GIF by TOEI Animation UK',
        url: 'https://media4.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=59b5fe65oh3yejavpf4jn4afobujki54npw5rtvcp6y2i2s6&rid=giphy.gif&ct=g'
    };
    let wrapper = shallow( <GiftItem gift={giftMock} />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <GiftItem gift={giftMock} />);
    })

    test('should render GiftItem', () => {
        expect( wrapper).toMatchSnapshot();
    })
    
    test('should render all gift info', () => {
        const titleGift = wrapper.find('p');
        const imgGift = wrapper.find('img');

        expect(titleGift.text().trim()).toBe(giftMock.title);
        expect(imgGift.prop('alt')).toBe(giftMock.title);
        expect(imgGift.prop('src')).toBe(giftMock.url);
    })
    
})
