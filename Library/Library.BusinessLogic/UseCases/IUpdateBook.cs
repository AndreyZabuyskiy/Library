using Library.BusinessLogic.Dtos;

namespace Library.BusinessLogic.UseCases;

public interface IUpdateBook
{
    public Task<BookReadDto> UpdateBookAsync(Guid id, BookUpdateDto book);
}
