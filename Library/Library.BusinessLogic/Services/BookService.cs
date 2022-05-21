using Library.BusinessLogic.Dtos;
using Library.BusinessLogic.Extensions;
using Library.BusinessLogic.UseCases;
using Library.DataAccess.Data;

namespace Library.BusinessLogic.Services
{
    public class BookService : IGetAllBooks, IGetBookById
    {
        private readonly IRepository _repository;

        public BookService(IRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<BookReadDto>> GetAllBooks()
        {
            var books = await _repository.GetBooksAll();
            var booksDto = new List<BookReadDto>();

            foreach(var book in books)
            {
                booksDto.Add(book.AsBookReadDto());
            }

            return booksDto;
        }

        public async Task<BookViewDto> GetBookById(Guid id)
        {
            var book = await _repository.GetBookById(id);
            return book.AsBookViewDto();
        }
    }
}