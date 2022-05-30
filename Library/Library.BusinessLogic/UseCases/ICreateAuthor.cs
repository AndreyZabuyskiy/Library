using Library.BusinessLogic.Dtos;

namespace Library.BusinessLogic.UseCases;

public interface ICreateAuthor
{
    public Task<AuthorReadDto> CreateAuthorAsync(AuthorCreateDto author);
}