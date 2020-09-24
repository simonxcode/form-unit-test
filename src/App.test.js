import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, shallow } from 'enzyme'
import App  from './App'

configure({ adapter: new Adapter() })


describe('Login form', () => {
  const wrapper = shallow(<App />)
  it('should show Please Log In', () => {
    expect(wrapper.find('h2')).toHaveLength(1) 
  })
  it('should show two input fields', () => {
    const inputs = wrapper.find('input')
    expect(inputs.length).toBe(2)
  })
  it('should show one button', () => {
    const button = wrapper.find('button')
    expect(button.length).toBe(1)
  })
})

describe('Submit button', () => {
  it('should submit the form', () => {
    const mockLoginFn = jest.fn()
    const mountedLoginPage = shallow(<form onClick={mockLoginFn} />)
    mountedLoginPage.find('form').simulate('submit')
    expect(mockLoginFn).toHaveBeenCalled()
  })
})





