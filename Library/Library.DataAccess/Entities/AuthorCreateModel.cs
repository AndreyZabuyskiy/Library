using Library.Domain;

namespace Library.DataAccess.Entities;

public class AuthorCreateModel
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Description { get; set; }
    public Date DateOfBirth { get; set; }
}
