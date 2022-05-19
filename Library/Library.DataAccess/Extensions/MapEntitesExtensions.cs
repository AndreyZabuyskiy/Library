using Library.DataAccess.Entities;
using Library.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.DataAccess.Extensions
{
    internal static class MapEntitesExtensions
    {
        public static AutorRead AsAuthorRead(this Author author)
        {
            return new AutorRead()
            {
                Id = author.Id,
                FirstName = author.FirstName,
                LastName = author.LastName
            };
        }
    }
}
