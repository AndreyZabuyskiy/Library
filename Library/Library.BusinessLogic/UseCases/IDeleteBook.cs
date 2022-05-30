namespace Library.BusinessLogic.UseCases;

public interface IDeleteBook
{
    public Task<bool> DeleteBookAsync(Guid id);
}
