import './App.css';
import AllTabs from './components/AllTabs'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <AllTabs />
      </div>
    </ApolloProvider>
  );
}

export default App;
