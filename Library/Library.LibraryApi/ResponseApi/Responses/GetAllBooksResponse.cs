using Library.DataAccess.Entities;

namespace Library.LibraryApi.ResponseApi.Responses
{
    public class GetAllBooksResponse : IResponseApi<IEnumerable<BookRead>>
    {
        public StatusResponse Status { get; set; }
        public IEnumerable<BookRead> Data { get; set; }
    }
}
