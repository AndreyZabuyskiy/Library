using Library.DataAccess.Entities;

namespace Library.BusinessLogic.UseCases
{
    public interface IGetAllAuthors
    {
        public Task<IEnumerable<AuthorRead>> GetAllAutors();
    }
}