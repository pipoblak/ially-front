import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';


if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect(); // let's connect!

  tron.clear();
  console.tron = tron;
}
