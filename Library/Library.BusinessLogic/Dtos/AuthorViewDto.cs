using Library.Domain;

namespace Library.BusinessLogic.Dtos;

public class AuthorViewDto
{
    public Guid Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Description { get; set; }
    public Date DateOfBirth { get; set; }
    public IEnumerable<BookOverviewInfoDto> Books { get; set; }
}
