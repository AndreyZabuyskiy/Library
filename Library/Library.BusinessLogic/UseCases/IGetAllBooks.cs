using Library.DataAccess.Entities;

namespace Library.BusinessLogic.UseCases
{
    public interface IGetAllBooks
    {
        public Task<IEnumerable<BookRead>> GetAllBooks();
    }
}
