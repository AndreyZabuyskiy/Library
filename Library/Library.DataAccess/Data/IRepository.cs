using Library.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.DataAccess.Data
{
    public interface IRepository
    {
        public Task<IEnumerable<AuthorRead>> GetAuthorsAll();
    }
}