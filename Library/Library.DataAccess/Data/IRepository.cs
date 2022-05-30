using Library.DataAccess.Entities;

namespace Library.DataAccess.Data;

public interface IRepository
{
    public Task<IEnumerable<AuthorRead>> GetAuthorsAll();
    public Task<IEnumerable<BookRead>> GetBooksAll();
    public Task<AuthorView> GetAuthorById(Guid id);
    public Task<BookView> GetBookById(Guid id);
    public Task<bool> DeleteAuthorAsync(Guid id);
    public Task<bool> DeleteBookAsync(Guid id);
    public Task<int> GetNumberOfBooksByAuthorIdAsync(Guid id);
    public Task<AuthorRead> CreateAuthorAsync(AuthorCreate authorCreate);
    public Task<AuthorRead> UpdateAuthorAsync(Guid id, AuthorUpdate authorUpdate);
    public Task<BookRead> CreateBookAsync(BookCreate bookCreate);
    public Task<BookRead> UpdateBookAsync(Guid id, BookUpdate bookUpdate);
}
