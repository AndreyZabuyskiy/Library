using Library.DataAccess.Entities;
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
        public Task<IEnumerable<AutorRead>> GetAuthorsAll()
        {
            throw new NotImplementedException();
        }
    }
}
