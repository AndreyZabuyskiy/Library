using Library.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.BusinessLogic.UseCases
{
    public interface IGetAllAuthors
    {
        public Task<IEnumerable<AuthorRead>> GetAllAutors();
    }
}
