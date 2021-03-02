import { countdown } from '../src/client/js/countdown'

import { advanceBy, advanceTo, clear } from 'jest-date-mock';
 
advanceTo(0); // reset to timestamp = 0
 
Date.now(); // will got 0
 
Date.current(); // will got the actual timestamp.

describe("Test countdown function", () => {
    test('Return 3 days', () => {
        
        expect(countdown('2021-03-04')).toReturn(7)
    })
})

