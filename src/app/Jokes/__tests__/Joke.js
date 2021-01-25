import React from 'react'
import { shallow } from 'enzyme'
import {Categories} from '../Categories'

describe("Starter Pack Tests", ()=> {
    const shallowMount = (props = {}) => shallow(<Categories fetchJokes={jest.fn()} jokes={{data:[]}} {...props}/>)
    it("should render correctly", () => {
        const wrapper = shallowMount()
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('h3').text()).toEqual("Joke Categories")
    })
})