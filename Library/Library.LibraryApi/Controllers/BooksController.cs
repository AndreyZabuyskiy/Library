using FluentValidation.Results;
using Library.BusinessLogic.Dtos;
using Library.BusinessLogic.UseCases;
using Library.LibraryApi.Filters;
using Library.LibraryApi.ResponseApi;
using Library.LibraryApi.ResponseApi.Responses.BooksResponses;
using Library.LibraryApi.Validators;
using Microsoft.AspNetCore.Mvc;

namespace Library.LibraryApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BooksController : ControllerBase
{
    private readonly IGetAllBooks _getAllBooks;
    private readonly IGetBookById _getBookById;
    private readonly IDeleteBook _deleteBook;
    private readonly IUpdateBook _updateBook;
    private readonly ICreateBook _createBook;
    private readonly ISearchBooks _searchBooks;
    private readonly IGetAuthors_BookUpdate _getAuthors;

    public BooksController(
        IGetAllBooks getAllBooks, IGetBookById getBookById,
        IDeleteBook deleteBook, IUpdateBook updateBook,
        ICreateBook createBook, ISearchBooks searchBooks,
        IGetAuthors_BookUpdate getAuthors)
    {
        _getAllBooks = getAllBooks;
        _getBookById = getBookById;
        _deleteBook = deleteBook;
        _updateBook = updateBook;
        _createBook = createBook;
        _searchBooks = searchBooks;
        _getAuthors = getAuthors;
    }

    [HttpGet]
    public async Task<ActionResult<GetAllBooksResponse>> GetAllBooks()
    {
        try
        {
            var response = new GetAllBooksResponse()
            {
                Status = StatusResponse.Success,
                Messages = new List<string>() { "Succsufully" },
                Data = await _getAllBooks.GetAllBooks(),
            };

            return Ok(response);
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<GetBookByIdResponse>> GetBookById(Guid id)
    {
        if(id == Guid.Empty)
        {
            return BadRequest(new GetBookByIdResponse()
            {
                Status = StatusResponse.Error,
                Messages = new List<string>() { "Id is null" },
                Data = null,
            });
        }

        try
        {
            var response = new GetBookByIdResponse()
            {
                Status = StatusResponse.Success,
                Messages = new List<string>() { "Succsufully" },
                Data = await _getBookById.GetBookById(id),
            };

            return Ok(response);
        }
        catch(Exception ex)
        {
            return Problem(ex.Message);
        }
    }

    [HttpGet("search-books")]
    public async Task<ActionResult<SearchBooksResponse>> SearchBooksAsync(string str)
    {
        var response = new SearchBooksResponse()
        {
            Status = StatusResponse.Success,
            Data = await _searchBooks.SearchBooksAsync(str),
            Messages = new List<string>() { "Succsufully" }
        };

        return Ok(response);
    }
    
    [HttpPost]
    [BookCreateValidationFilter]
    public async Task<ActionResult<CreateBookResponse>> CreateBookAsync(BookCreateDto book)
    {
        if(book == null)
        {
            return BadRequest(new CreateBookResponse()
            {
                Status = StatusResponse.Success,
                Messages = new List<string>() { "Book created succssfully" },
                Data = null,
            });
        }

        try
        {
            var response = new CreateBookResponse()
            {
                Status = StatusResponse.Success,
                Messages = new List<string>() { "Book created succssfully" },
                Data = await _createBook.CreateBookAsync(book),
            };

            return response;
        }
        catch(Exception ex)
        {
            return Problem(ex.Message);
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<DeleteBookResponse>> DeleteBookAsync(Guid id)
    {
        if(id == Guid.Empty)
        {
            return BadRequest(new DeleteBookResponse()
            {
                Status = StatusResponse.Success,
                Messages = new List<string>() { "Book deleted successfully" },
                Data = false,
            });
        }

        try
        {
            var response = new DeleteBookResponse()
            {
                Status = StatusResponse.Success,
                Messages = new List<string>() { "Book deleted successfully" },
                Data = await _deleteBook.DeleteBookAsync(id),
            };

            return Ok(response);
        }
        catch(Exception ex)
        {
            return Problem(ex.Message);
        }
    }

    [HttpPut("{id}")]
    [BookUpdateValidationFilter]
    public async Task<ActionResult<UpdateBookResponse>> UpdateBookAsync(Guid id, BookUpdateDto bookUpdate)
    {
        if(id == Guid.Empty)
        {
            return BadRequest(new UpdateBookResponse()
            {
                Status = StatusResponse.Error,
                Messages = new List<string>() { "Id is empty" },
                Data = null,
            });
        }

        if(bookUpdate == null)
        {
            return BadRequest(new UpdateBookResponse()
            {
                Status= StatusResponse.NotValid,
                Messages = new List<string>() { "Book is empty" },
                Data = null
            });
        }

        try
        {
            var response = new UpdateBookResponse()
            {
                Status = StatusResponse.Success,
                Messages = new List<string>() { "Book updated successfully" },
                Data = await _updateBook.UpdateBookAsync(id, bookUpdate),
            };

            return Ok(response);
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
    }

    [HttpGet("get-authors")]
    public async Task<ActionResult<GetAuthors_UpdateBookResponse>> GetAuthors_UpdateBook()
    {
        var response = new GetAuthors_UpdateBookResponse()
        {
            Status = StatusResponse.Success,
            Data = await _getAuthors.GetAuthors_BookUpdate(),
            Messages = new List<string>() { "Get authors successfully" }
        };

        return Ok(response);
    }
}