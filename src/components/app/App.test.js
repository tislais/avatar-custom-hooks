import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import CharacterDetails from '../details/CharacterDetails';

describe('App component', () => {
  it('displays a list of characters on the home page', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });

  it('displays a characters details', async() => {
    render(
      <MemoryRouter initialEntries={['/character/5cf5679a915ecad153ab68d1']}>
        <App />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    await screen.findByText('Analay');
    // await screen.findByText('Female');
  });

});
