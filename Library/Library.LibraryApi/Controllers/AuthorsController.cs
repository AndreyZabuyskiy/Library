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

        public AuthorsController(IGetAllAuthors getAllAuthors)
        {
            _getAllAuthors = getAllAuthors;
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
    }
}