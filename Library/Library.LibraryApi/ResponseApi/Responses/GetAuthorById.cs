using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.ResponseApi.Responses
{
    public class GetAuthorById : IResponseApi<AuthorViewDto>
    {
        public StatusResponse Status { get; set; }
        public AuthorViewDto Data { get; set; }
    }
}