import React from 'react';
import { shallow } from 'enzyme';
import MainWelcome from './MainWelcome'
// 1. Make sure Welcome button shows up
// 2. need to make sure h1 sshows up 
// 3. Need to make sure the SVG can be seen 
//
describe ('find',() => {
    it (' find 1  h1', () => {
        const wrapper = shallow (<MainWelcome/>);
        const svg = wrapper.find('h1');
        expect (svg).toHaveLength(1);
    }) 
})

//find button
describe ('Mainwelcome',() => {
    it (' find Welcome button', () => {
        const wrapper = shallow (<MainWelcome/>);
        const svg = wrapper.find('h1').text();
        expect (svg).toEqual(' <MainWelcomeButton /> ');
    })
})

// find h1



describe ('svg',() => {
    it (' find logo', () => {
        const wrapper = shallow (<MainWelcome/>);
        const svg = wrapper.find('h1');
        expect (svg).toEqual ({});
    })
})
