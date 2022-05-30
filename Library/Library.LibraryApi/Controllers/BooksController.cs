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

    public BooksController(
        IGetAllBooks getAllBooks,
        IGetBookById getBookById,
        IDeleteBook deleteBook,
        IUpdateBook updateBook,
        ICreateBook createBook)
    {
        _getAllBooks = getAllBooks;
        _getBookById = getBookById;
        _deleteBook = deleteBook;   
        _updateBook = updateBook;
        _createBook = createBook;
    }

    [HttpGet]
    public async Task<ActionResult<GetAllBooksResponse>> GetAllBooks()
    {
        var response = new GetAllBooksResponse()
        {
            Status = StatusResponse.Success,
            Data = await _getAllBooks.GetAllBooks(),
            Messages = "Succsufully"
        };

        return Ok(response);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<GetBookByIdResponse>> GetBookById(Guid id)
    {
        var response = new GetBookByIdResponse()
        {
            Status = StatusResponse.Success,
            Data = await _getBookById.GetBookById(id),
            Messages = "Succsufully"
        };

        return Ok(response);
    }
    
    [HttpPost]
    public async Task<ActionResult<CreateBookResponse>> CreateBookAsync(BookCreateDto book)
    {
        var response = new CreateBookResponse()
        {
            Status = StatusResponse.Success,
            Data = await _createBook.CreateBookAsync(book),
            Messages = "Book created succssfully"
        };

        return response;
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<DeleteBookResponse>> DeleteBookAsync(Guid id)
    {
        var response = new DeleteBookResponse()
        {
            Status = StatusResponse.Success,
            Data = await _deleteBook.DeleteBookAsync(id),
            Messages = "Book deleted successfully"
        };

        return Ok(response);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<UpdateBookResponse>> UpdateBookAsync(Guid id, BookUpdateDto bookUpdate)
    {
        var response = new UpdateBookResponse()
        {
            Status = StatusResponse.Success,
            Data = await _updateBook.UpdateBookAsync(id, bookUpdate),
            Messages = "Book updated successfully"
        };

        return Ok(response);
    }
}