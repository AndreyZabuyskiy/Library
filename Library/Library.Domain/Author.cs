namespace Library.Domain
{
    public class Author
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Date DateOfBirth { get; set; }
    }
}