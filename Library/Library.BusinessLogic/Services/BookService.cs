using Library.BusinessLogic.Dtos;
using Library.BusinessLogic.Extensions;
using Library.BusinessLogic.UseCases;
using Library.DataAccess.Data;

namespace Library.BusinessLogic.Services;

public class BookService : IGetAllBooks, IGetBookById, IDeleteBook, IUpdateBook, ICreateBook, ISearchBooks
{
    private readonly IRepository _repository;

    public BookService(IRepository repository)
    {
        _repository = repository;
    }

    public async Task<BookReadDto> CreateBookAsync(BookCreateDto book)
    {
        var bookCreated = await _repository.CreateBookAsync(book.AsBookCreate());
        return bookCreated.AsBookReadDto();
    }

    public Task<bool> DeleteBookAsync(Guid id)
    {
        return _repository.DeleteBookAsync(id);
    }

    public async Task<IEnumerable<BookReadDto>> GetAllBooks()
    {
        var books = await _repository.GetBooksAll();
        var booksDto = new List<BookReadDto>();

        foreach(var book in books)
        {
            booksDto.Add(book.AsBookReadDto());
        }

        return booksDto;
    }

    public async Task<BookViewDto> GetBookById(Guid id)
    {
        var book = await _repository.GetBookById(id);
        return book.AsBookViewDto();
    }

    public async Task<List<BookReadDto>> SearchBooksAsync(string str)
    {
        var booksModel = await _repository.SearchBooksByTitleAsync(str);
        var booksDto = new List<BookReadDto>();

        foreach(var book in booksModel)
        {
            booksDto.Add(book.AsBookReadDto());
        }

        return booksDto;
    }

    public async Task<BookReadDto> UpdateBookAsync(Guid id, BookUpdateDto book)
    {
        var authorUpdate = await _repository.UpdateBookAsync(id, book.AsBookUpdate());
        return authorUpdate.AsBookReadDto();
    }
}