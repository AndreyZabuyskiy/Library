namespace Library.DataAccess.Entities;

public class BookCreateModel
{
    public Guid AuthorId { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public int NumberOfPage { get; set; }
    public int YearOfPublication { get; set; }
}
