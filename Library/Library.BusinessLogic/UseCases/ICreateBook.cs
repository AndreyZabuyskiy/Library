using Library.BusinessLogic.Dtos;

namespace Library.BusinessLogic.UseCases;

public interface ICreateBook
{
    public Task<BookReadDto> CreateBookAsync(BookCreateDto book);
}
