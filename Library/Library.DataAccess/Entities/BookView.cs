namespace Library.DataAccess.Entities;

public class BookView
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public int NumberOfPages { get; set; }
    public decimal Price { get; set; }
    public int YearOfPublication { get; set; }
    public AuthorOverviewInfo Author { get; set; }
}
