using Library.DataAccess.Entities;
using Library.DataAccess.Extensions;
using Library.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.DataAccess.Data
{
    public class MemoryRepository : IRepository
    {
        private static List<Author> _authors = new List<Author>()
        {
            new Author()
            {
                Id = Guid.NewGuid(),
                FirstName = "Лев",
                LastName = "Толстой"
            },
            new Author()
            {
                Id = Guid.NewGuid(),
                FirstName = "Федор",
                LastName = "Достоевский"
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
            },
            new Book()
            {
                Id = Guid.NewGuid(),
                Author = _authors[1],
                Title = "Анна Каренина",
                Description = "Анна Каренина описание",
                Price = 260,
                NumberOfPages = 864,
            },
        };

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
    }
}