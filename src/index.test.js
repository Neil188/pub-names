import { expect } from 'chai'
import pubNames from '.'

describe('pub-names', () => {
    it('should have a list of all available names', () => {
        expect(pubNames.all).to.satisfy(isArrayOfStrings)
    })

    it('should allow me to get a random name from the list', () => {
        expect(pubNames.random()).to.satisfy(isIncludedIn(pubNames.all))
    })
})

function isArrayOfStrings(array) {
    return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
    return item => array.includes(item)
}
