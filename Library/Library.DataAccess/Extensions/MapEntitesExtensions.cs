using Library.DataAccess.Entities;
using Library.Domain;

namespace Library.DataAccess.Extensions
{
    internal static class MapEntitesExtensions
    {
        public static AuthorRead AsAuthorRead(this Author author)
        {
            return new AuthorRead()
            {
                Id = author.Id,
                FirstName = author.FirstName,
                LastName = author.LastName
            };
        }

        public static BookRead AsBookRead(this Book book)
        {
            return new BookRead()
            {
                Id = book.Id,
                Title = book.Title,
                Price = book.Price
            };
        }

        public static void Update(this Author author, AuthorUpdate authorUpdate)
        {
            author.FirstName = authorUpdate.FirstName;
            author.LastName = authorUpdate.LastName;
        }

        public static void Update(this Book book, BookUpdate bookUpdate)
        {
            book.Title = bookUpdate.Title;
            book.Description = bookUpdate.Description;
            book.Price = bookUpdate.Price;
            book.NumberOfPages = bookUpdate.NumberOfPage;
            book.YearOfPublication = bookUpdate.YearOfPublication;
        }
    }
}
