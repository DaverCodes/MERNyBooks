import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
// import Apollo stuff
import { 
  ApolloClient, 
  ApolloProvider, 
  InMemoryCache, 
  createHttpLink } 
    from '@apollo/client';

  import { setContext } 
    from '@apollo/client/link/context';


//get graphql stuff.. how do i authorize token info?
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


const httpLink = createHttpLink({
  uri: '/graphql',
});


// show user info to user
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<SearchBooks />} 
          />
          <Route 
            path='/saved' 
            element={<SavedBooks />} 
          />
          <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
