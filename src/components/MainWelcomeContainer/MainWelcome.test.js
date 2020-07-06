import React from 'react';
import { shallow } from 'enzyme';
import MainWelcome from './MainWelcome'
// 1. Make sure Welcome button shows up
// 2. need to make sure h1 sshows up 
// 3. Need to make sure the SVG can be seen 

describe ('animation',() => {
    it (' finds 1 animation', () => {
        const wrapper = shallow (<MainWelcome/>);
        const header = wrapper.find('h1');
        expect (header).toHaveLength(1);
    })
})


describe ('Mainwelcome',() => {
    it (' find button', () => {
        const wrapper = shallow (<MainWelcome/>);
        const svg = wrapper.find('h1').text();
        expect (svg).toEqual(' <MainWelcomeButton /> ');
    })
})



describe ('Mainwelcome',() => {
    it (' find animation', () => {
        const wrapper = shallow (<MainWelcome/>);
        const svg = wrapper.find('h1');
        expect (svg).toBe  ('svg');
    })
})