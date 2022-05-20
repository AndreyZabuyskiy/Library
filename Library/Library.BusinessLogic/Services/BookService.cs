using Library.BusinessLogic.UseCases;
using Library.DataAccess.Data;
using Library.DataAccess.Entities;

namespace Library.BusinessLogic.Services
{
    public class BookService : IGetAllBooks
    {
        private readonly IRepository _repository;

        public BookService(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<BookRead>> GetAllBooks()
        {
            return await _repository.GetBooksAll();
        }
    }
}