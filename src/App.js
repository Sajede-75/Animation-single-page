import { BottomField } from './components/bottomField/BottomField';
import { TopField } from './components/topField/topField';
import { Search } from './components/topSearch/Search';

function App() {
  return (
    <div className="basePage">
        <Search/>
        <TopField/>
        <BottomField/>
    </div>
  );
}

export default App;
