using Library.BusinessLogic.Dtos;
using Library.DataAccess.Entities;

namespace Library.BusinessLogic.Extensions
{
    internal static class MapModelExtensions
    {
        public static AuthorReadDto AsAuthorReadDto(this AuthorRead author)
        {
            return new AuthorReadDto
            {
                Id = author.Id,
                FirstName = author.FirstName,
                LastName = author.LastName,
            };
        }

        public static BookReadDto AsBookReadDto(this BookRead book)
        {
            return new BookReadDto
            {
                Id = book.Id,
                Title = book.Title,
                Price = book.Price,
            };
        }

        public static AuthorViewDto AsAuthorViewDto(this AuthorView author)
        {
            var books = new List<BookOverviewInfoDto>();

            foreach (var book in author.Books)
            {
                books.Add(new BookOverviewInfoDto()
                {
                    Id = book.Id,
                    Title = book.Title
                });
            }

            return new AuthorViewDto()
            {
                Id = author.Id,
                FirstName = author.FirstName,
                LastName = author.LastName,
                Books = books
            };
        }
    }
}