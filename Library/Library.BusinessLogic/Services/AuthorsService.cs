using Library.BusinessLogic.Dtos;
using Library.BusinessLogic.Extensions;
using Library.BusinessLogic.UseCases;
using Library.DataAccess.Data;

namespace Library.BusinessLogic.Services
{
    public class AuthorsService : IGetAllAuthors, IGetAuthorById, IAuthorDelete
    {
        private readonly IRepository _repository;

        public AuthorsService(IRepository repository)
        {
            _repository = repository;
        }

        public Task<bool> AuthorDeleteAsync(Guid id)
        {
            return _repository.GetAuthorDelete(id);
        }

        public async Task<IEnumerable<AuthorReadDto>> GetAllAutors()
        {
            var authors = await _repository.GetAuthorsAll();
            var authorsDto = new List<AuthorReadDto>();

            foreach(var author in authors)
            {
                authorsDto.Add(author.AsAuthorReadDto());
            }

            return authorsDto;
        }

        public async Task<AuthorViewDto> GetAuthorById(Guid id)
        {
            var author = await _repository.GetAuthorById(id);
            return author.AsAuthorViewDto();
        }
    }
}