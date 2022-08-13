import {lazy, Suspense} from 'react';

const Heavy = lazy(() => import('./component/heavy'));

function App() {
  return (
    <div className="App">
      <div>Hello World! React Lazy loading Example</div>
      <Suspense fallback={<div>loading ....</div>}>
        <Heavy />
      </Suspense>
    </div>
  );
}

export default App;
