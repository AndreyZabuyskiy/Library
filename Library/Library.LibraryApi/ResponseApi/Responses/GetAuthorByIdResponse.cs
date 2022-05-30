using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.ResponseApi.Responses;

public class GetAuthorByIdResponse : IResponseApi<AuthorViewDto>
{
    public StatusResponse Status { get; set; }
    public AuthorViewDto Data { get; set; }
    public string Messages { get; set; }
}