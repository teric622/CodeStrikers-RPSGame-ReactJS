import React from 'react';
import App from '../../App';
import { shallow } from 'enzyme';
import {mount} from 'enzyme';
import playerWin from './Game';
import playerOne from './Game';
import computerWin from './Game';
import count from './Game';
import Game from './Game';
import {rock} from './Game';
import selectWinner from './Game';

describe ('', ()=> {
    it('shows the array set in the state', () => {

        const wrapper = shallow(<Game/>);
         const array = wrapper.find('state');
      expect (array). toEqual ({});
            })
})
describe ('Mainwelcome',() => {
    it (' find Welcome button', () => {
        const playerOne = "paper";
        expect (playerOne).toEqual('paper');
     const computer = "comppaper";
        expect (computer).toEqual('comppaper');
    })
})

//line 36 getting component from class

// making sure the options of rock papr and scissors are there for the player
    describe ('Button selection', ()=> {
    it('3 selection buttons for player', () => {

        const wrapper = shallow(<Game/>);
        const selectionButton = wrapper.find('roundbutton.selectionButton')
         expect (selectionButton). toHaveLength (3);
    });
    });


    // the score board is showing
    describe ('Score Board', ()=> {
    it('is showing  that there is only 1 , bc we only have 1', () => {

        const wrapper = shallow(<Game/>);
        const scoreBoard = wrapper.find('div.score-board');
        expect (scoreBoard). toHaveLength (1)
      // selectionButton.simulate('click');
        //const result = wrapper.find('').text();
        //expect (result). toBe ('slow down Reached');
    });
    });

 // play hand button is there
    describe ('Score Board', ()=> {
    it('play hand button is there', () => {

        const wrapper = shallow(<Game/>);
        const playButton = wrapper.find('button.play-btn');
        expect (playButton). toHaveLength (1)
      // selectionButton.simulate('click');
        //const result = wrapper.find('').text();
        //expect (result). toBe ('slow down Reached');
    });
    });



  describe ('Tie', function () {
    it('shows player tie', function (playerOne,computer) {
        expect (('paper','comppaper')).toEqual('issa tie');

    });
    });









 // selectionButton.simulate('click');
        //const result = wrapper.find('').text();
        //expect (result). toBe ('slow down Reached');

    // to do the test for the logic
//1. Be able to access each selection individually and simulate it
//  2. be bale to access th ecount, but first need to make sure it starts at 0
//    3. need to find a way to acccess computer se;ction 
//  4. make sure it returns the correct number



// expect selctionbutton to have length 


//const array = wrapper.find('state');

     // expect const playerWin = wrapper.find('selectionButton');  
//const wrapper = shallow (<Game/>);