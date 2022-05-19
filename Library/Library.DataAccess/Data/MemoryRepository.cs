using Library.DataAccess.Entities;
using Library.DataAccess.Extensions;
using Library.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.DataAccess.Data
{
    public class MemoryRepository : IRepository
    {
        private static List<Author> _authors = new List<Author>()
        {
            new Author()
            {
                Id = Guid.NewGuid(),
                FirstName = "Лев",
                LastName = "Толстой"
            },
            new Author()
            {
                Id = Guid.NewGuid(),
                FirstName = "Федор",
                LastName = "Достоевский"
            }
        };

        public async Task<IEnumerable<AutorRead>> GetAuthorsAll()
        {
            return await Task.Run(() =>
            {
                var authors = new List<AutorRead>();

                foreach (var author in _authors)
                {
                    authors.Add(author.AsAuthorRead());
                }

                return authors;
            });
        }
    }
}