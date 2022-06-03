using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.ResponseApi.Responses.BooksResponses;

public class SearchBooksResponse : IResponseApi<List<BookReadDto>>
{
    public StatusResponse Status { get; set; }
    public List<BookReadDto> Data { get; set; }
    public List<string> Messages { get; set; }
}