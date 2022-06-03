using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.ResponseApi.Responses.BooksResponses;

public class GetBookByIdResponse : IResponseApi<BookViewDto>
{
    public StatusResponse Status { get; set; }
    public BookViewDto? Data { get; set; }
    public List<string> Messages { get; set; }
}