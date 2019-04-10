import React from 'react';
import {render, fireEvent } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';

import App from './App';
import Greeter from './App';

describe('<App />', () => {

  it.skip('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  })
});

describe('mocking', () => {
  it('is mocking me', () => {
    const mock = jest.fn();

    const result = mock();
    mock();

    expect(result).toBeDefined();
    expect(mock).toHaveBeenCalledTimes(1);
  })
})


describe('<Greeter />', () => {
  it.('should save when clicking Save Button', () => {
    const saveMock = jest.fn();
    const { getByText } = render(<App />);

    const saveButton = getByText(/save/i);
    fireEvent.click(saveButton);

    expect(saveMock).toHaveBeenCalledTimes(1)
  });

  it.only('should save when clicking Save Button', () => {
    const saveMock = jest.fn();
    const { getByText } = render(<Greeter save={saveMock} />);

    const saveButton = getByText(/save/i);
    fireEvent.click(saveButton);

    expect(saveMock).toHaveBeenCalledTimes(1)
  });


})
