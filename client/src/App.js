import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Result from './components/Result';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [books, setBooks] = useState([]);
  return (
      <div className="App">
        <Header setBooks={setBooks}></Header>
        <SearchBar books={books} setBooks={setBooks}></SearchBar>
        <Result books={books}></Result>
      </div>
  );
}

export default App;
