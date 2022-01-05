import { shallow } from 'enzyme';
import React from 'react';
import '@testing-library/jest-dom';
import { useFetchGift } from '../../hooks/useFetchGift';

describe('useFetchGift Hook', () => {
    const categoryMock = 'Dragon ball';

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('should works useFetchGift hooks', () => {
        expect(true).toBeTruthy();
    }) 
    
})
