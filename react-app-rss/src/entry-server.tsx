/* eslint-disable import/prefer-default-export */
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import AppRouter from './AppRouter';
import { setupStore } from './store/store';

const store = setupStore();
export const render = (url: string, options?: RenderToPipeableStreamOptions) => {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <AppRouter />
      </StaticRouter>
    </Provider>,
    options
  );
};
