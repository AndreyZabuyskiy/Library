using Library.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.BusinessLogic.UseCases
{
    internal interface IGetAllAuthors
    {
        public Task<IEnumerable<AutorRead>> GetAllAutors();
    }
}
