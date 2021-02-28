import { countdown } from '../src/client/js/countdown'

describe("Test countdown function", () => {
    test('Return 3 days', () => {
        
        expect(countdown('2021-03-04')).toReturn(7)
    })
})

