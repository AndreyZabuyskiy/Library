using Library.BusinessLogic.Dtos;
using Library.BusinessLogic.UseCases;
using Library.LibraryApi.ResponseApi;
using Library.LibraryApi.ResponseApi.Responses;
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

    public AuthorsController(
        IGetAllAuthors getAllAuthors,
        IGetAuthorById getAuthorById,
        IDeleteAuthor authorDelete,
        ICreateAuthor createAuthor,
        IUpdateAuthor updateAuthor)
    {
        _getAllAuthors = getAllAuthors;
        _getAuthorById = getAuthorById;
        _authorDelete = authorDelete;
        _authorCreate = createAuthor;
        _authorUpdate = updateAuthor;
    }

    [HttpGet]
    public async Task<ActionResult<GetAllAuthorsResponse>> GetAuthors()
    {
        var response = new GetAllAuthorsResponse()
        {
            Status = StatusResponse.Success,
            Messages = "Succsufully",
            Data = await _getAllAuthors.GetAllAutors(),
        };

        return Ok(response);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<GetAuthorByIdResponse>> GetAuthorById(Guid id)
    {
        var response = new GetAuthorByIdResponse()
        {
            Status = StatusResponse.Success,
            Messages = "Succsufully",
            Data = await _getAuthorById.GetAuthorById(id),
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

        return Ok(new AuthorCreateResponse()
        {
            Status = StatusResponse.Success,
            Messages = "Author added succsufully",
            Data = await _authorCreate.CreateAuthorAsync(authorCreate),
        });
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

        return Ok(new DeleteAuthorResponse()
        {
            Status = StatusResponse.Success,
            Messages = "Author deleted succsufully",
            Data = await _authorDelete.DeleteAuthorAsync(id),
        });
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

        var response = new UpdateAuthorResponse()
        {
            Status = StatusResponse.Success,
            Messages = "Author updated succsufully",
            Data = await _authorUpdate.UpdateAuthorAsync(id, updateAuthor),
        };

        return response;
    }
}