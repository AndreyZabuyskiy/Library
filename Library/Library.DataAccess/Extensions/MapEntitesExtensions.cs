using Library.DataAccess.Entities;
using Library.Domain;

namespace Library.DataAccess.Extensions;

internal static class MapEntitesExtensions
{
    public static AuthorReadModel AsAuthorRead(this Author author)
    {
        return new AuthorReadModel()
        {
            Id = author.Id,
            FirstName = author.FirstName,
            LastName = author.LastName
        };
    }

    public static BookReadModel AsBookRead(this Book book)
    {
        return new BookReadModel()
        {
            Id = book.Id,
            Title = book.Title,
            Price = book.Price
        };
    }

    public static UpdateBook_AuthorsModel AsBook_AuthorsModel(this Author author)
    {
        return new UpdateBook_AuthorsModel()
        {
            Id = author.Id,
            FirstName = author.FirstName,
            LastName = author.LastName
        };
    }

    public static void Update(this Author author, AuthorUpdateModel authorUpdate)
    {
        author.FirstName = authorUpdate.FirstName;
        author.LastName = authorUpdate.LastName;
    }

    public static void Update(this Book book, BookUpdateModel bookUpdate)
    {
        book.Title = bookUpdate.Title;
        book.Description = bookUpdate.Description;
        book.Price = bookUpdate.Price;
        book.NumberOfPages = bookUpdate.NumberOfPage;
        book.YearOfPublication = bookUpdate.YearOfPublication;
    }
}