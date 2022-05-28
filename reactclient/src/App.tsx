import { Routes, Route, Link } from 'react-router-dom';
import Authors from './components/Authors/Authors';
import Books from './components/Books/Books';
import ViewAuthor from './components/Authors/ViewAuthor/ViewAuthor';
import ViewBook from './components/Books/ViewBook/ViewBook';
import CreateAuthor from './components/Authors/CreateAuthor/CreateAuthor';
import UpdateAuthorForm from './components/Authors/UpdateAuthorForm/UpdateAuthorForm';
import UpdateBookForm from './components/Books/UpdateBookForm/UpdateBookForm';

function App() {
  return (
    <div className="App">
      <Link to="/authors">Авторы</Link>
      <Link to="/books">Книги</Link>

      <Routes>
        <Route path='/' element={<Authors />} />
        <Route path='/authors' element={<Authors />} />
        <Route path='/books' element={<Books />} />
        <Route path='/authors/:id' element={<ViewAuthor />} />
        <Route path='/books/:id' element={<ViewBook />} />
        <Route path="/create-author" element={<CreateAuthor />} />
        <Route path="/update-author/:id" element={<UpdateAuthorForm />} />
        <Route path="/update-book/:id" element={<UpdateBookForm />} />
      </Routes>
    </div>
  );
}

export default App;