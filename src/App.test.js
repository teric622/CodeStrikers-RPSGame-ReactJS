import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
describe('test For Our App', () => {
    it ('knows that 2 and 2 make 4', ()=>{
        expect (2 +2).toEqual(4);
    }
    )
})
