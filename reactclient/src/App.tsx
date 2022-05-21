import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Authors from './components/Authors/Authors';
import Books from './components/Books/Books';
import SingleAuthor from './components/Authors/SingleAuthor/SingleAuthor';

function App() {
  return (
    <div className="App">
      <Link to="/authors">Авторы</Link>
      <Link to="/books">Книги</Link>

      <Routes>
        <Route path='/' element={<Authors />} />
        <Route path='/authors' element={<Authors />} />
        <Route path='/books' element={<Books />} />
        <Route path='/authors/:id' element={<SingleAuthor />} />
      </Routes>
    </div>
  );
}

export default App;