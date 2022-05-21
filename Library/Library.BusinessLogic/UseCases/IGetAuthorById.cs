using Library.BusinessLogic.Dtos;

namespace Library.BusinessLogic.UseCases
{
    public interface IGetAuthorById
    {
        public Task<AuthorViewDto> GetAuthorById(Guid id);
    }
}