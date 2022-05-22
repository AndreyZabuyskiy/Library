using Library.BusinessLogic.UseCases;
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

        public BooksController(IGetAllBooks getAllBooks, IGetBookById getBookById)
        {
            _getAllBooks = getAllBooks;
            _getBookById = getBookById;
            
        }

        [HttpGet]
        public async Task<ActionResult<GetAllBooksResponse>> GetAllBooks()
        {
            var response = new GetAllBooksResponse()
            {
                Status = ResponseApi.StatusResponse.Success,
                Data = await _getAllBooks.GetAllBooks()
            };

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetBookByIdResponse>> GetBookById(Guid id)
        {
            var response = new GetBookByIdResponse()
            {
                Status = ResponseApi.StatusResponse.Success,
                Data = await _getBookById.GetBookById(id)
            };

            return Ok(response);
        }
    }
}