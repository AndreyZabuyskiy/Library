using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.ResponseApi.Responses.AuthorsResponses;

public class AuthorCreateResponse : IResponseApi<AuthorReadDto>
{
    public StatusResponse Status { get; set; }
    public AuthorReadDto? Data { get; set; }
    public List<string> Messages { get; set; }
}