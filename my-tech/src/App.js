import React from 'react';
import { useDispatch } from 'react-redux';
import Router from './components/Router/Router'
import StartupRunner from './StartupRunner';
import Loader from './components/Loader';
import './App.css';


function App() {
  const [startUpComplete, setStartUpComplete] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!startUpComplete) {
      startup();
    }
  });

  async function startup() {
    await new StartupRunner(dispatch).run();
    setStartUpComplete(true);
  }

  if (!startUpComplete) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
