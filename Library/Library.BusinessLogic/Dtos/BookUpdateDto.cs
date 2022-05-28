namespace Library.BusinessLogic.Dtos
{
    public class BookUpdateDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int NumberOfPage { get; set; }
        public int YearOfPublication { get; set; }
    }
}