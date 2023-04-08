import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ContextProvider } from '../../../Components/utils/global.context';
import { Home } from '../../../Routes';
import { act } from 'react-dom/test-utils';

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

describe('Test on <Home />', () => {
  test('should render skeleton cards', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <ContextProvider value={context}>
          <Home />
        </ContextProvider>
      </MemoryRouter>
    );

    expect(screen.getAllByRole('generic', { name: 'skeletonCard' }).length).toBe(10);
  });

  test('should render cards after time out', async () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <ContextProvider value={context}>
          <Home />
        </ContextProvider>
      </MemoryRouter>
    );

    await act(async () => {
      await new Promise(r => setTimeout(r, 2000));
    });

    const cardsLength = screen.getAllByRole('generic', { name: 'dentistCard' }).length;

    expect(cardsLength).toBeGreaterThan(0);
    expect(cardsLength).toBe(10);
  });
});
