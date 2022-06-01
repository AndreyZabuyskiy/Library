using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.ResponseApi.Responses.BooksResponses;

public class CreateBookResponse : IResponseApi<BookReadDto>
{
    public StatusResponse Status { get; set; }
    public BookReadDto? Data { get; set; }
    public string Messages { get; set; }
}