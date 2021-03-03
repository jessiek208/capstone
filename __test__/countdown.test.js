import { countDown } from '../src/client/js/countdown'

import "babel-polyfill"

describe("test countDown function", () => {
    test('that countDown is not defined when given an empty argument', ()  => {
        expect(countDown).toBeUndefined;
    })
})
