import { shallow } from 'enzyme';
import React from 'react';
import { getGifts } from '../../helpers/GetGifts';

describe('getGifts:', () => {
    it('should return a array of gifts when getGifts was executed', () => {
        const resultGetGifts = getGifts('dragon ball');
        return resultGetGifts.then((resp) => {
            expect(resp.length).toBe(10);
        })
    })

    it('should return an empty array of gifts when getGifts was executed', () => {
        const resultGetGifts = getGifts();
        return resultGetGifts.then((resp) => {
            expect(resp.length).toBe(0);
        })
    })
})