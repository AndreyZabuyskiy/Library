namespace Library.LibraryApi.ResponseApi.Responses.AuthorsResponses;

public class DeleteAuthorResponse : IResponseApi<bool>
{
    public StatusResponse Status { get; set; }
    public bool Data { get; set; }
    public List<string> Messages { get; set; }
}