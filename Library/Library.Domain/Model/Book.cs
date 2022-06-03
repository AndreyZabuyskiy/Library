namespace Library.Domain;

public class Book
{
    public Guid Id { get; set; }
    public Author Author { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public int NumberOfPages { get; set; }
    public decimal Price { get; set; }
    public int YearOfPublication { get; set; }
    public DateTime DateAddedToDb { get; set; }
}