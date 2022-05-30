using Library.Domain;

namespace Library.BusinessLogic.Dtos;

public class AuthorCreateDto
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Description { get; set; }
    public Date DateOfBirth { get; set; }
}
