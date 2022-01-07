import { renderHook } from '@testing-library/react-hooks';
import { useFetchGift } from '../../hooks/useFetchGift';

// install dependency for unit test for hooks, https://github.com/testing-library/react-hooks-testing-library
// npm install --save-dev @testing-library/react-hooks

describe('useFetchGift custom Hook', () => {
    const categoryMock = 'dragon ball';

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('should works useFetchGift hooks', async() => {
        const { result, waitForNextUpdate} = renderHook( () => useFetchGift(categoryMock));
        const { gifts, loading } = result.current;
        await waitForNextUpdate();

        expect(gifts).toEqual([]);
        expect(loading).toBeTruthy();
    });

    test('should works useFetchGift hooks with gifts', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGift(categoryMock));
        await waitForNextUpdate();
        const { gifts, loading } = result.current;
        
        expect(gifts.length).toEqual(10);
        expect(loading).toBeFalsy();    
    });
    
})
