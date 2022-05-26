using Library.BusinessLogic.Dtos;

namespace Library.BusinessLogic.UseCases
{
    public interface IUpdateAuthor
    {
        public Task<AuthorReadDto> UpdateAuthorAsync(Guid id, AuthorUpdateDto author);
    }
}