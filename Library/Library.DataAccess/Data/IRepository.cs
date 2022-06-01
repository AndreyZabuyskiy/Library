using Library.DataAccess.Entities;

namespace Library.DataAccess.Data;

public interface IRepository
{
    public Task<IEnumerable<AuthorReadModel>> GetAuthorsAll();
    public Task<IEnumerable<BookReadModel>> GetBooksAll();
    public Task<AuthorViewModel> GetAuthorById(Guid id);
    public Task<BookViewModel> GetBookById(Guid id);
    public Task<bool> DeleteAuthorAsync(Guid id);
    public Task<bool> DeleteBookAsync(Guid id);
    public Task<int> GetNumberOfBooksByAuthorIdAsync(Guid id);
    public Task<AuthorReadModel> CreateAuthorAsync(AuthorCreateModel authorCreate);
    public Task<AuthorReadModel> UpdateAuthorAsync(Guid id, AuthorUpdateModel authorUpdate);
    public Task<BookReadModel> CreateBookAsync(BookCreateModel bookCreate);
    public Task<BookReadModel> UpdateBookAsync(Guid id, BookUpdateModel bookUpdate);
    public Task<List<AuthorReadModel>> SearchAuthorsByNameAsync(string str);
    public Task<List<BookReadModel>> SearchBooksByTitleAsync(string str);
}