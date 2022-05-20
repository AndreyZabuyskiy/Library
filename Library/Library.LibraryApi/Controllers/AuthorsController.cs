using Library.BusinessLogic.UseCases;
using Library.DataAccess.Entities;
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
        public async Task<ActionResult<IEnumerable<AuthorRead>>> GetAuthors()
        {
            return Ok(await _getAllAuthors.GetAllAutors());
        }
    }
}