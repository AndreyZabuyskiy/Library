using Library.BusinessLogic.Dtos;
using Library.BusinessLogic.UseCases;
using Library.LibraryApi.ResponseApi;
using Library.LibraryApi.ResponseApi.Responses;
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

    public BooksController(
        IGetAllBooks getAllBooks, IGetBookById getBookById,
        IDeleteBook deleteBook, IUpdateBook updateBook,
        ICreateBook createBook, ISearchBooks searchBooks)
    {
        _getAllBooks = getAllBooks;
        _getBookById = getBookById;
        _deleteBook = deleteBook;
        _updateBook = updateBook;
        _createBook = createBook;
        _searchBooks = searchBooks;
    }

    [HttpGet]
    public async Task<ActionResult<GetAllBooksResponse>> GetAllBooks()
    {
        try
        {
            var response = new GetAllBooksResponse()
            {
                Status = StatusResponse.Success,
                Messages = "Succsufully",
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
                Messages = "Id is null",
                Data = null,
            });
        }

        try
        {
            var response = new GetBookByIdResponse()
            {
                Status = StatusResponse.Success,
                Messages = "Succsufully",
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
            Messages = "Succsufully"
        };

        return Ok(response);
    }
    
    [HttpPost]
    public async Task<ActionResult<CreateBookResponse>> CreateBookAsync(BookCreateDto book)
    {
        if(book == null)
        {
            return BadRequest(new CreateBookResponse()
            {
                Status = StatusResponse.Success,
                Messages = "Book created succssfully",
                Data = null,
            });
        }

        try
        {
            var response = new CreateBookResponse()
            {
                Status = StatusResponse.Success,
                Messages = "Book created succssfully",
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
                Messages = "Book deleted successfully",
                Data = false,
            });
        }

        try
        {
            var response = new DeleteBookResponse()
            {
                Status = StatusResponse.Success,
                Messages = "Book deleted successfully",
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
    public async Task<ActionResult<UpdateBookResponse>> UpdateBookAsync(Guid id, BookUpdateDto bookUpdate)
    {
        if(id == Guid.Empty)
        {
            return BadRequest(new UpdateBookResponse()
            {
                Status = StatusResponse.Error,
                Messages = "Id is empty",
                Data = null,
            });
        }

        if(bookUpdate == null)
        {
            return BadRequest(new UpdateBookResponse()
            {
                Status= StatusResponse.Error,
                Messages = "Book is empty",
                Data = null
            });
        }

        try
        {
            var response = new UpdateBookResponse()
            {
                Status = StatusResponse.Success,
                Messages = "Book updated successfully",
                Data = await _updateBook.UpdateBookAsync(id, bookUpdate),
            };

            return Ok(response);
        }
        catch (Exception ex)
        {
            return Problem(ex.Message);
        }
    }
}