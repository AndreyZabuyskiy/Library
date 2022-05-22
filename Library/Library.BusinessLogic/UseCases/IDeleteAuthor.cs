namespace Library.BusinessLogic.UseCases
{
    public interface IDeleteAuthor
    {
        public Task<bool> DeleteAuthorAsync(Guid id);
    }
}