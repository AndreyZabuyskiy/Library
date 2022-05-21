using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.ResponseApi.Responses
{
    public class GetBookByIdResponse : IResponseApi<BookViewDto>
    {
        public StatusResponse Status { get; set; }
        public BookViewDto Data { get; set; }
    }
}
