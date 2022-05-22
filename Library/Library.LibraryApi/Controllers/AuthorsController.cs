using Library.BusinessLogic.UseCases;
using Library.LibraryApi.ResponseApi;
using Library.LibraryApi.ResponseApi.Responses;
using Microsoft.AspNetCore.Mvc;

namespace Library.LibraryApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorsController : ControllerBase
    {
        private readonly IGetAllAuthors _getAllAuthors;
        private readonly IGetAuthorById _getAuthorById;

        public AuthorsController(IGetAllAuthors getAllAuthors, IGetAuthorById getAuthorById)
        {
            _getAllAuthors = getAllAuthors;
            _getAuthorById = getAuthorById;
        }

        [HttpGet]
        public async Task<ActionResult<GetAllAuthorsResponse>> GetAuthors()
        {
            var response = new GetAllAuthorsResponse()
            {
                Status = StatusResponse.Success,
                Data = await _getAllAuthors.GetAllAutors()
            };

            return Ok(response);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GetAuthorByIdResponse>> GetAuthorById(Guid id)
        {
            var response = new GetAuthorByIdResponse()
            {
                Status = StatusResponse.Success,
                Data = await _getAuthorById.GetAuthorById(id)
            };

            return Ok(response);
        }
    }
}