using Library.DataAccess.Entities;

namespace Library.LibraryApi.ResponseApi.Responses
{
    public class GetAllAuthorsResponse : IResponseApi<IEnumerable<AuthorRead>>
    {
        public StatusResponse Status { get; set; }
        public IEnumerable<AuthorRead> Data { get; set; }
    }
}
