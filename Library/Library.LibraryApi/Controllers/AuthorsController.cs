using Library.BusinessLogic.Dtos;
using Library.BusinessLogic.UseCases;
using Library.LibraryApi.ResponseApi;
using Library.LibraryApi.ResponseApi.Responses.AuthorsResponses;
using Microsoft.AspNetCore.Mvc;

namespace Library.LibraryApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthorsController : ControllerBase
{
    private readonly IGetAllAuthors _getAllAuthors;
    private readonly IGetAuthorById _getAuthorById;
    private readonly IDeleteAuthor _authorDelete;
    private readonly ICreateAuthor _authorCreate;
    private readonly IUpdateAuthor _authorUpdate;
    private readonly ISearchAuthors _searchAuthors;

    public AuthorsController(
        IGetAllAuthors getAllAuthors, IGetAuthorById getAuthorById,
        IDeleteAuthor authorDelete, ICreateAuthor createAuthor,
        IUpdateAuthor updateAuthor, ISearchAuthors searchAuthors)
    {
        _getAllAuthors = getAllAuthors;
        _getAuthorById = getAuthorById;
        _authorDelete = authorDelete;
        _authorCreate = createAuthor;
        _authorUpdate = updateAuthor;
        _searchAuthors = searchAuthors;
    }

    [HttpGet]
    public async Task<ActionResult<GetAllAuthorsResponse>> GetAuthors()
    {
        try
        {
            var response = new GetAllAuthorsResponse()
            {
                Status = StatusResponse.Success,
                Messages = "Succsufully",
                Data = await _getAllAuthors.GetAllAutors(),
            };

            return Ok(response);
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<GetAuthorByIdResponse>> GetAuthorById(Guid id)
    {
        if (id == Guid.Empty)
        {
            return BadRequest(new GetAuthorByIdResponse()
            {
                Status = StatusResponse.Success,
                Messages = "Succsufully",
                Data = await _getAuthorById.GetAuthorById(id),
            });
        }

        try
        {
            var response = new GetAuthorByIdResponse()
            {
                Status = StatusResponse.Success,
                Messages = "Succsufully",
                Data = await _getAuthorById.GetAuthorById(id),
            };

            return Ok(response);
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
    }

    [HttpGet("search-authors")]
    public async Task<ActionResult<SearchAuthorsResponse>> GetAuthorsBySearch(string str)
    {
        var response = new SearchAuthorsResponse()
        {
            Status = StatusResponse.Success,
            Data = await _searchAuthors.SearchAuthorsAsync(str),
            Messages = "Succsufully"
        };

        return Ok(response);
    }

    [HttpPost]
    public async Task<ActionResult<AuthorCreateResponse>> CreateAuthorAsync(AuthorCreateDto authorCreate)
    {
        if(authorCreate == null)
        {
            return BadRequest(new AuthorCreateResponse()
            {
                Status = StatusResponse.Error,
                Messages = "Author is empty",
                Data = null
            });
        }

        try
        {
            var response = new AuthorCreateResponse()
            {
                Status = StatusResponse.Success,
                Messages = "Author added succsufully",
                Data = await _authorCreate.CreateAuthorAsync(authorCreate),
            };

            return Ok(response);
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<DeleteAuthorResponse>> DeleteAuthorAsync(Guid id)
    {
        if(id == Guid.Empty)
        {
            return BadRequest(new DeleteAuthorResponse()
            {
                Status = StatusResponse.Error,
                Messages = "Id is empty",
                Data = false,
            });
        }

        try
        {
            var response = new DeleteAuthorResponse()
            {
                Status = StatusResponse.Success,
                Messages = "Author deleted succsufully",
                Data = await _authorDelete.DeleteAuthorAsync(id),
            };

            return Ok(response);
        }
        catch(Exception ex)
        {
            return Problem(ex.Message);
        }
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<UpdateAuthorResponse>> UpdateAuthorAsync(Guid id, AuthorUpdateDto updateAuthor)
    {
        if(id == Guid.Empty)
        {
            return BadRequest(new UpdateAuthorResponse()
            {
                Status = StatusResponse.Error,
                Messages = "Id is empty",
                Data = null,
            });
        }

        if(updateAuthor == null)
        {
            return BadRequest(new UpdateAuthorResponse()
            {
                Status = StatusResponse.Error,
                Messages = "Author is empty",
                Data = null
            });
        }

        try
        {
            var response = new UpdateAuthorResponse()
            {
                Status = StatusResponse.Success,
                Messages = "Author updated succsufully",
                Data = await _authorUpdate.UpdateAuthorAsync(id, updateAuthor),
            };

            return Ok(response);
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
    }
}