import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { wrappo } from 'wrappo';
import App from './components/App';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import store from './store';

injectTapEventPlugin();

@wrappo({
  renderer: ReactDOM.render,
  jsxFactory: React.createElement,
  name: 'typeform-ftw',
  shadow: false,
})
export class Root extends React.Component<any, any> {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiThemeProvider>
    );
  }
}

// ReactDOM.render(
//   <Root/>,
//   document.getElementById('root') as HTMLElement
// );
