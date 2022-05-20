using Library.BusinessLogic.UseCases;
using Library.DataAccess.Data;
using Library.DataAccess.Entities;

namespace Library.BusinessLogic.Services
{
    public class AuthorsService : IGetAllAuthors
    {
        private readonly IRepository _repository;

        public AuthorsService(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<AuthorRead>> GetAllAutors()
        {
            return await _repository.GetAuthorsAll();
        }
    }
}