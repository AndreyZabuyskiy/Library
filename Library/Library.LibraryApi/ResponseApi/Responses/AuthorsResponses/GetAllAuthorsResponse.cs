using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.ResponseApi.Responses.AuthorsResponses;

public class GetAllAuthorsResponse : IResponseApi<IEnumerable<AuthorReadDto>>
{
    public StatusResponse Status { get; set; }
    public IEnumerable<AuthorReadDto> Data { get; set; }
    public string Messages { get; set; }
}