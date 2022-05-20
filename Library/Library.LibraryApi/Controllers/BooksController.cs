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

        public BooksController(IGetAllBooks getAllBooks)
        {
            _getAllBooks = getAllBooks;
        }

        [HttpGet]
        public async Task<ActionResult<GetAllBooksResponse>> GetAllBooks()
        {
            var response = new GetAllBooksResponse()
            {
                Status = ResponseApi.StatusResponse.Success,
                Data = await _getAllBooks.GetAllBooks()
            };

            return response;
        }
    }
}