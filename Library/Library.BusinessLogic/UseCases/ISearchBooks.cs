using Library.BusinessLogic.Dtos;

namespace Library.BusinessLogic.UseCases;

public interface ISearchBooks
{
    public Task<List<BookReadDto>> SearchBooksAsync(string str);
}