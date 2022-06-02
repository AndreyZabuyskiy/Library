using Library.BusinessLogic.Dtos;
using Library.DataAccess.Entities;

namespace Library.BusinessLogic.Extensions;

internal static class MapModelExtensions
{
    public static AuthorReadDto AsAuthorReadDto(this AuthorReadModel author, int count)
    {
        return new AuthorReadDto
        {
            Id = author.Id,
            FirstName = author.FirstName,
            LastName = author.LastName,
            NumberOfBooks = count
        };
    }

    public static BookReadDto AsBookReadDto(this BookReadModel book)
    {
        return new BookReadDto
        {
            Id = book.Id,
            Title = book.Title,
            Price = book.Price,
        };
    }

    public static AuthorViewDto AsAuthorViewDto(this AuthorViewModel author)
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
            Description = author.Description,
            DateOfBirth = author.DateOfBirth,
            Books = books
        };
    }

    public static BookViewDto AsBookViewDto(this BookViewModel book)
    {
        return new BookViewDto()
        {
            Id = book.Id,
            Title = book.Title,
            Description = book.Description,
            Price = book.Price,
            NumberOfPages = book.NumberOfPages,
            YearOfPublication = book.YearOfPublication,
            Author = new AuthorOverviewInfoDto()
            {
                Id = book.Author.Id,
                FirstName = book.Author.FirstName,
                LastName = book.Author.LastName
            }
        };
    }

    public static AuthorCreateModel AsAuthorCreate(this AuthorCreateDto author)
    {
        return new AuthorCreateModel
        {
            FirstName = author.FirstName,
            LastName = author.LastName,
            Description = author.Description,
            DateOfBirth = author.DateOfBirth
        };
    }

    public static AuthorUpdateModel AsAuthorUpdate(this AuthorUpdateDto author)
    {
        return new AuthorUpdateModel
        {
            FirstName = author.FirstName,
            LastName = author.LastName
        };
    }

    public static BookUpdateModel AsBookUpdate(this BookUpdateDto book)
    {
        return new BookUpdateModel()
        {
            Title = book.Title,
            Description = book.Description,
            Price = book.Price,
            NumberOfPage = book.NumberOfPage,
            YearOfPublication = book.YearOfPublication,
        };
    }

    public static BookCreateModel AsBookCreate(this BookCreateDto book)
    {
        return new BookCreateModel()
        {
            AuthorId = book.AuthorId,
            Title = book.Title,
            Description = book.Description,
            Price = book.Price,
            NumberOfPage = book.NumberOfPage,
            YearOfPublication = book.YearOfPublication
        };
    }

    public static UpdateBook_AuthorsDto AsUpdateBook_AuthorsDto(this UpdateBook_AuthorsModel book)
    {
        return new UpdateBook_AuthorsDto()
        {
            Id = book.Id,
            FirstName = book.FirstName,
            LastName = book.LastName
        };
    }
}