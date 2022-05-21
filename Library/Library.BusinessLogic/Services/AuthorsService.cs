using Library.BusinessLogic.Dtos;
using Library.BusinessLogic.UseCases;
using Library.DataAccess.Data;

namespace Library.BusinessLogic.Services
{
    public class AuthorsService : IGetAllAuthors
    {
        private readonly IRepository _repository;

        public AuthorsService(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<AuthorReadDto>> GetAllAutors()
        {
            var authors = await _repository.GetAuthorsAll();
            var authorsDto = new List<AuthorReadDto>();

            foreach(var author in authors)
            {
                authorsDto.Add(new AuthorReadDto()
                {
                    Id = author.Id,
                    FirstName = author.FirstName,
                    LastName = author.LastName
                });
            }

            return authorsDto;
        }
    }
}