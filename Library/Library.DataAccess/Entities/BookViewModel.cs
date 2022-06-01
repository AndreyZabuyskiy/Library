namespace Library.DataAccess.Entities;

public class BookViewModel
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public int NumberOfPages { get; set; }
    public decimal Price { get; set; }
    public int YearOfPublication { get; set; }
    public AuthorOverviewInfoModel Author { get; set; }
}