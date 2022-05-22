import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactTestUtils from 'react-dom/test-utils';

it('correct render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});


it('delete entry', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    const button = div.querySelector('a[title="Remove Todo"]');
    //simulate a click on link
    ReactTestUtils.Simulate.click(button);
    expect(div.querySelectorAll('a[title="Remove Todo"]').length).toBe(2);
});

it('add entry', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    const field = div.querySelector('input[type="text"]');
    field.value = 'test';
    // Simulate a enter key press
    ReactTestUtils.Simulate.keyDown(field, {key: 'Enter', keyCode: 13, which: 13});
    // expect a new label in list
    expect(div.querySelectorAll('label').length).toBe(3);
});

it('uncheck last entry (checked by default)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    const lenght = div.querySelectorAll('input[type="checkbox"]').length;
    const checkbox = div.querySelectorAll('input[type="checkbox"]')[lenght-1];
    //ReactTestUtils.Simulate.click(checkbox);
    expect(div.querySelector('input[type="checkbox"]').checked).toBe(false);
});

it('add empty entry (blocked by app)', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    const originallenght =  div.getElementsByTagName('li').length;
    const field = div.querySelector('input[type="text"]');
    field.value = '';
    // Simulate a enter key press
    ReactTestUtils.Simulate.keyDown(field, {key: 'Enter', keyCode: 13, which: 13});
    // expect a new message
    expect(div.getElementsByTagName('li').length).toBe(originallenght);
});