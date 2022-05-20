using Library.DataAccess.Entities;

namespace Library.DataAccess.Data
{
    public interface IRepository
    {
        public Task<IEnumerable<AuthorRead>> GetAuthorsAll();
        public Task<IEnumerable<BookRead>> GetBooksAll();
    }
}