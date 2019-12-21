import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { StoreProvider } from 'easy-peasy';
import { Provider as UrqlProvider } from 'urql';
import { PersistGate } from 'redux-persist/integration/react';

import theme, { GlobalStyle } from './utils/theme';
import urqlGraphql from './utils/urqlGraphql';
import { store, persistor } from './store';
import Loading from './components/elements/Loading';

import { Home, About, Error404 } from './pages';

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const isLoggedIn = useStoreState(state => state.isLoggedIn.value);

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  async componentDidMount() {
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;
    if (!loaded) {
      return <Loading />;
    }

    return (
      <UrqlProvider value={urqlGraphql}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <StoreProvider store={store}>
            <ThemeProvider theme={theme}>
              <React.Fragment>
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route component={Error404} />
                  </Switch>
                </BrowserRouter>
                <GlobalStyle />
              </React.Fragment>
            </ThemeProvider>
          </StoreProvider>
        </PersistGate>
      </UrqlProvider>
    );
  }
}

export default App;
