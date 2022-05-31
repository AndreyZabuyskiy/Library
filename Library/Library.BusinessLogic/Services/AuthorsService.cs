using Library.BusinessLogic.Dtos;
using Library.BusinessLogic.Extensions;
using Library.BusinessLogic.UseCases;
using Library.DataAccess.Data;

namespace Library.BusinessLogic.Services;

public class AuthorsService : IGetAllAuthors, IGetAuthorById, IDeleteAuthor, ICreateAuthor, IUpdateAuthor, ISearchAuthors
{
    private readonly IRepository _repository;

    public AuthorsService(IRepository repository)
    {
        _repository = repository;
    }

    public async Task<AuthorReadDto> CreateAuthorAsync(AuthorCreateDto author)
    {
        var authorCreated = await _repository.CreateAuthorAsync(author.AsAuthorCreate());
        var count = await _repository.GetNumberOfBooksByAuthorIdAsync(authorCreated.Id);
        return authorCreated.AsAuthorReadDto(count);
    }

    public async Task<IEnumerable<AuthorReadDto>> GetAllAutors()
    {
        var authors = await _repository.GetAuthorsAll();
        var authorsDto = new List<AuthorReadDto>();

        foreach (var author in authors)
        {
            var count = await _repository.GetNumberOfBooksByAuthorIdAsync(author.Id);
            authorsDto.Add(author.AsAuthorReadDto(count));
        }

        return authorsDto;
    }

    public Task<bool> DeleteAuthorAsync(Guid id)
    {
        return _repository.DeleteAuthorAsync(id);
    }

    public async Task<AuthorViewDto> GetAuthorById(Guid id)
    {
        var author = await _repository.GetAuthorById(id);
        return author.AsAuthorViewDto();
    }

    public async Task<AuthorReadDto> UpdateAuthorAsync(Guid id, AuthorUpdateDto author)
    {
        var authorUpdate = await _repository.UpdateAuthorAsync(id, author.AsAuthorUpdate());
        var count = await _repository.GetNumberOfBooksByAuthorIdAsync(authorUpdate.Id);
        return authorUpdate.AsAuthorReadDto(count);
    }

    public async Task<List<AuthorReadDto>> SearchAuthorsAsync(string str)
    {
        var authorsModel = await _repository.SearchAuthorsByNameAsync(str);
        var authorsDto = new List<AuthorReadDto>();

        foreach(var author in authorsModel)
        {
            var count = await _repository.GetNumberOfBooksByAuthorIdAsync(author.Id);
            authorsDto.Add(author.AsAuthorReadDto(count));
        }

        return authorsDto;
    }
}