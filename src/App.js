import './App.css';
import AllTabs from './components/AllTabs'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router } from 'react-router-dom'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/',
})

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <AllTabs />
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
