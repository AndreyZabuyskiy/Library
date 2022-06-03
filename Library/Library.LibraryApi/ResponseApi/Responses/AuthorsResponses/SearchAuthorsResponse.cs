using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.ResponseApi.Responses.AuthorsResponses;

public class SearchAuthorsResponse : IResponseApi<List<AuthorReadDto>>
{
    public StatusResponse Status { get; set; }
    public List<AuthorReadDto> Data { get; set; }
    public List<string> Messages { get; set; }
}