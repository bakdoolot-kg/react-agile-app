import {observer} from 'mobx-react-lite'
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header/>
      <main className="app">
        <Dashboard/>
      </main>
    </>
  );
}

export default observer(App);
