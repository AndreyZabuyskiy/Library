namespace Library.BusinessLogic.UseCases
{
    public interface IAuthorDelete
    {
        public Task<bool> AuthorDeleteAsync(Guid id);
    }
}