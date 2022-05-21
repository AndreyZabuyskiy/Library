﻿namespace Library.DataAccess.Entities
{
    public class AuthorView
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public IEnumerable<BookOverviewInfo> Books { get; set; }
    }
}