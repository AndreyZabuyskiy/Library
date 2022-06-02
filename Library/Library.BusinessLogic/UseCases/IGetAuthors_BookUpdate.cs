using Library.BusinessLogic.Dtos;

namespace Library.BusinessLogic.UseCases;

public interface IGetAuthors_BookUpdate
{
    public Task<IEnumerable<UpdateBook_AuthorsDto>> GetAuthors_BookUpdate();
}