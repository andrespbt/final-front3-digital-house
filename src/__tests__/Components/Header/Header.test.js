import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ContextProvider } from '../../../Components/utils/global.context';
import App from '../../../App';

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

const context = {
  isFetching: false,
  isDarkMode: true,
  data: [],
  favorites: [],
};

describe('Test on <Header  />', () => {
  beforeEach(() => {
    cleanup();
  });

  test('should change theme on themeButton click', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <ContextProvider value={context}>
          <App />
        </ContextProvider>
      </MemoryRouter>
    );

    const themeButton = screen.getByRole('button', { name: 'themeButton' });

    expect(themeButton).toBeTruthy();

    fireEvent.click(themeButton);

    expect(screen.getByRole('banner').className).toBe('light header');
  });

  test('should render h1', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <ContextProvider value={context}>
          <App />
        </ContextProvider>
      </MemoryRouter>
    );

    const h1 = screen.getByText('DH Odonto');

    expect(h1).toBeTruthy();
  });
});
