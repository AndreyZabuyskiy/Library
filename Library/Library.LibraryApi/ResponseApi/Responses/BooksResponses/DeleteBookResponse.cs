namespace Library.LibraryApi.ResponseApi.Responses.BooksResponses;

public class DeleteBookResponse : IResponseApi<bool>
{
    public StatusResponse Status { get; set; }
    public bool Data { get; set; }
    public List<string> Messages { get; set; }
}