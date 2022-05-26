using Library.BusinessLogic.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Library.BusinessLogic.UseCases
{
    public interface ICreateAuthor
    {
        public Task<AuthorReadDto> CreateAuthorAsync(AuthorCreateDto author);
    }
}
