namespace Library.LibraryApi.ResponseApi.Responses.BooksResponses;

public class DeleteBookResponse : IResponseApi<bool>
{
    public StatusResponse Status { get; set; }
    public bool Data { get; set; }
    public string Messages { get; set; }
}