using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.ResponseApi.Responses.BooksResponses;

public class GetAuthors_UpdateBookResponse : IResponseApi<IEnumerable<UpdateBook_AuthorsDto>>
{
    public StatusResponse Status { get; set; }
    public List<string> Messages { get; set; }
    public IEnumerable<UpdateBook_AuthorsDto> Data { get; set; }
}