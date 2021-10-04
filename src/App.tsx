import { createClient, Client, Provider } from 'urql';

import './App.css';
import Accounts from './components/accounts/accounts';

const client: Client = createClient({
  url: 'http://localhost:3001/graphql',
});

function App() {

  return (
    <Provider value={client}>
      <Accounts />
    </Provider>
  );
}

export default App;
