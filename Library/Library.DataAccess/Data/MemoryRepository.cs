using Library.DataAccess.Entities;
using Library.DataAccess.Extensions;
using Library.Domain;

namespace Library.DataAccess.Data;

public class MemoryRepository : IRepository
{
    private static List<Author> _authors = new List<Author>()
    {
        new Author()
        {
            Id = Guid.NewGuid(),
            FirstName = "Лев",
            LastName = "Толстой",
            Description = "Лев Толстой описание",
            DateOfBirth = new Date(DateTime.Now.Day, DateTime.Now.Month, DateTime.Now.Year)
        },
        new Author()
        {
            Id = Guid.NewGuid(),
            FirstName = "Федор",
            LastName = "Достоевский",
            Description = "Федор Достоевский описание",
            DateOfBirth = new Date(DateTime.Now.Day, DateTime.Now.Month, DateTime.Now.Year)
        }
    };

    private static List<Book> _books = new List<Book>()
    {
        new Book()
        {
            Id = Guid.NewGuid(),
            Author = _authors[0],
            Title = "Преступление и наказание",
            Description = "Преступление и наказание описание",
            Price = 170,
            NumberOfPages = 672,
            YearOfPublication = 1866
        },
        new Book()
        {
            Id = Guid.NewGuid(),
            Author = _authors[1],
            Title = "Анна Каренина",
            Description = "Анна Каренина описание",
            Price = 260,
            NumberOfPages = 864,
            YearOfPublication = 1878
        },
        new Book()
        {
            Id = Guid.NewGuid(),
            Author = _authors[1],
            Title = "Братья Карамасовы",
            Description = "Братья Карамасовы описание",
            Price = 128,
            NumberOfPages = 840,
            YearOfPublication = 1880
        },
    };

    public async Task<AuthorView> GetAuthorById(Guid id)
    {
        return await Task.Run(() =>
        {
            var author = _authors.FirstOrDefault(a => a.Id == id);
            var books = new List<BookOverviewInfo>();

            foreach (var book in _books)
            {
                if(book.Author.Id == author.Id)
                {
                    books.Add(new BookOverviewInfo()
                    {
                        Id = book.Id,
                        Title = book.Title
                    });
                }
            }

            var authorView = new AuthorView()
            {
                Id = author.Id,
                FirstName = author.FirstName,
                LastName = author.LastName,
                Description = author.Description,
                DateOfBirth = author.DateOfBirth,
                Books = books
            };

            return authorView;
        });
    }

    public async Task<bool> DeleteAuthorAsync(Guid id)
    {
        return await Task.Run(() =>
        {
            var author = _authors.FirstOrDefault(a => a.Id == id);
            _authors.Remove(author);
            return true;
        });
    }

    public async Task<IEnumerable<AuthorRead>> GetAuthorsAll()
    {
        return await Task.Run(() =>
        {
            var authors = new List<AuthorRead>();

            foreach (var author in _authors)
            {
                authors.Add(author.AsAuthorRead());
            }

            return authors;
        });
    }

    public Task<BookView> GetBookById(Guid id)
    {
        return Task.Run(() =>
        {
            var book = _books.FirstOrDefault(b => b.Id == id);

            return new BookView()
            {
                Id = book.Id,
                Title = book.Title,
                Description = book.Description,
                Price = book.Price,
                NumberOfPages = book.NumberOfPages,
                YearOfPublication = book.YearOfPublication,
                Author = new AuthorOverviewInfo()
                {
                    Id = book.Author.Id,
                    FirstName = book.Author.FirstName,
                    LastName = book.Author.LastName
                }
            };
        });
    }

    public async Task<IEnumerable<BookRead>> GetBooksAll()
    {
        return await Task.Run(() => 
        {
            var books = new List<BookRead>();

            foreach (var book in _books)
            {
                books.Add(book.AsBookRead());
            }

            return books;
        });
    }

    public async Task<bool> DeleteBookAsync(Guid id)
    {
        return await Task.Run(() =>
        {
            var book = _books.FirstOrDefault(b => b.Id == id);
            _books.Remove(book);
            return true;
        }); 
    }

    public async Task<int> GetNumberOfBooksByAuthorIdAsync(Guid id)
    {
        return await Task.Run(() =>
        {
            var count = 0;

            foreach(var book in _books)
            {
                if(book.Author.Id == id)
                {
                    count++;
                }
            }

            return count;
        });
    }

    public async Task<AuthorRead> CreateAuthorAsync(AuthorCreate authorCreate)
    {
        return await Task.Run(() =>
        {
            var author = new Author()
            {
                Id = Guid.NewGuid(),
                FirstName = authorCreate.FirstName,
                LastName = authorCreate.LastName,
                DateOfBirth = authorCreate.DateOfBirth,
            };

            _authors.Add(author);

            return author.AsAuthorRead();
        });
    }

    public async Task<AuthorRead> UpdateAuthorAsync(Guid id, AuthorUpdate authorUpdate)
    {
        return await Task.Run(() =>
        {
            var author = _authors.FirstOrDefault(a => a.Id == id);
            author.Update(authorUpdate);
            return author.AsAuthorRead();
        });
    }

    public async Task<BookRead> UpdateBookAsync(Guid id, BookUpdate bookUpdate)
    {
        return await Task.Run(() =>
        {
            var book = _books.FirstOrDefault(b => b.Id == id);
            book.Update(bookUpdate);
            return book.AsBookRead();
        });
    }

    public async Task<BookRead> CreateBookAsync(BookCreate bookCreate)
    {
        return await Task.Run(() =>
        {
            var author = _authors.FirstOrDefault(a => a.Id == bookCreate.AuthorId);

            var book = new Book()
            {
                Id = Guid.NewGuid(),
                Author = author,
                Title = bookCreate.Title,
                Description = bookCreate.Description,
                Price = bookCreate.Price,
                NumberOfPages = bookCreate.NumberOfPage,
                YearOfPublication = bookCreate.YearOfPublication,
                DateAddedToDb = DateTime.Now
            };

            _books.Add(book);

            return book.AsBookRead();
        });
    }

    public async Task<List<AuthorRead>> SearchAuthorsByNameAsync(string str)
    {
        return await Task.Run(() =>
        {
            var authors = new List<AuthorRead>();

            foreach(var author in _authors)
            {
                if (author.FirstName.ToLower().Contains(str.ToLower()) 
                    || author.LastName.ToLower().Contains(str.ToLower()))
                {
                    authors.Add(author.AsAuthorRead());
                }
            }

            return authors;
        });
    }

    public async Task<List<BookRead>> SearchBooksByTitleAsync(string str)
    {
        return await Task.Run(() =>
        {
            var books = new List<BookRead>();

            foreach(var book in _books)
            {
                if (book.Title.ToLower().Contains(str.ToLower()))
                {
                    books.Add(book.AsBookRead());
                }
            }

            return books;
        });
    }
}