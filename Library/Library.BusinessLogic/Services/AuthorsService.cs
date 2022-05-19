using Library.BusinessLogic.UseCases;
using Library.DataAccess.Data;
using Library.DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.BusinessLogic.Services
{
    public class AuthorsService : IGetAllAuthors
    {
        private readonly IRepository _repository;

        public AuthorsService(IRepository repository)
        {
            _repository = repository;
        }

        public Task<IEnumerable<AutorRead>> GetAllAutors()
        {
            return _repository.GetAuthorsAll();
        }
    }
}
