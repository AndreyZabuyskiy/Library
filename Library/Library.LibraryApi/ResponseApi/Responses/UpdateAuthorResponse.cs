using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.ResponseApi.Responses;

public class UpdateAuthorResponse : IResponseApi<AuthorReadDto>
{
    public StatusResponse Status { get; set; }
    public AuthorReadDto Data { get; set; }
}