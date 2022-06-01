using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.ResponseApi.Responses.BooksResponses;

public class GetAllBooksResponse : IResponseApi<IEnumerable<BookReadDto>>
{
    public StatusResponse Status { get; set; }
    public IEnumerable<BookReadDto> Data { get; set; }
    public string Messages { get; set; }
}