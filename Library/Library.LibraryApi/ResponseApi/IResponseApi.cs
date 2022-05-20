namespace Library.LibraryApi.ResponseApi
{
    public interface IResponseApi<T>
    {
        public StatusResponse Status { get; set; }
        public T Data { get; set; }
    }
}