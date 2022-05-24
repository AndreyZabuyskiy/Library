using Library.BusinessLogic.UseCases;
using Library.LibraryApi.ResponseApi;
using Library.LibraryApi.ResponseApi.Responses;
using Microsoft.AspNetCore.Mvc;

namespace Library.LibraryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IGetAllBooks _getAllBooks;
        private readonly IGetBookById _getBookById;
        private readonly IDeleteBook _deleteBook;

        public BooksController(
            IGetAllBooks getAllBooks,
            IGetBookById getBookById,
            IDeleteBook deleteBook)
        {
            _getAllBooks = getAllBooks;
            _getBookById = getBookById;
            _deleteBook = deleteBook;            
        }

        [HttpGet]
        public async Task<ActionResult<GetAllBooksResponse>> GetAllBooks()
        {
            var response = new GetAllBooksResponse()
            {
                Status = StatusResponse.Success,
                Data = await _getAllBooks.GetAllBooks()
            };

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetBookByIdResponse>> GetBookById(Guid id)
        {
            var response = new GetBookByIdResponse()
            {
                Status = StatusResponse.Success,
                Data = await _getBookById.GetBookById(id)
            };

            return Ok(response);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<DeleteBookResponse>> DeleteBookAsync(Guid id)
        {
            var response = new DeleteBookResponse()
            {
                Status = ResponseApi.StatusResponse.Success,
                Data = await _deleteBook.DeleteBookAsync(id)
            };

            return Ok(response);
        }
    }
}