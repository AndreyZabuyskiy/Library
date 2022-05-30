using Library.BusinessLogic.Dtos;

namespace Library.BusinessLogic.UseCases;

public interface IGetAllBooks
{
    public Task<IEnumerable<BookReadDto>> GetAllBooks();
}
