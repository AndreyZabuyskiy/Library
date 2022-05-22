using Library.DataAccess.Entities;

namespace Library.DataAccess.Data
{
    public interface IRepository
    {
        public Task<IEnumerable<AuthorRead>> GetAuthorsAll();
        public Task<IEnumerable<BookRead>> GetBooksAll();
        public Task<AuthorView> GetAuthorById(Guid id);
        public Task<BookView> GetBookById(Guid id);
        public Task<bool> DeleteAuthorAsync(Guid id);
        public Task<bool> DeleteBookAsync(Guid id);
    }
}