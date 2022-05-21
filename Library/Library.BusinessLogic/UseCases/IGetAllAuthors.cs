using Library.BusinessLogic.Dtos;

namespace Library.BusinessLogic.UseCases
{
    public interface IGetAllAuthors
    {
        public Task<IEnumerable<AuthorReadDto>> GetAllAutors();
    }
}