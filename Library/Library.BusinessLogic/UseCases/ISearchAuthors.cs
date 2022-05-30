using Library.BusinessLogic.Dtos;

namespace Library.BusinessLogic.UseCases;

public interface ISearchAuthors
{
    public Task<List<AuthorReadDto>> SearchAuthorsAsync(string str);
}