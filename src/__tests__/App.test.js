const { render, cleanup } = require('@testing-library/react');
const { default: App } = require('../App');
const { ContextProvider } = require('../Components/utils/global.context');
const { MemoryRouter } = require('react-router-dom');

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

describe('Test on <App />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  test('should match snaptshot', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/home']}>
        <ContextProvider value={context}>
          <App />
        </ContextProvider>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
