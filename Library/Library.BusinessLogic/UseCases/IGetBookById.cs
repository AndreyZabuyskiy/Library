using Library.BusinessLogic.Dtos;

namespace Library.BusinessLogic.UseCases;

public interface IGetBookById
{
    public Task<BookViewDto> GetBookById(Guid id);
}
