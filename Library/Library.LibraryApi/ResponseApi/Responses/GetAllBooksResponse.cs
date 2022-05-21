﻿using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.ResponseApi.Responses
{
    public class GetAllBooksResponse : IResponseApi<IEnumerable<BookReadDto>>
    {
        public StatusResponse Status { get; set; }
        public IEnumerable<BookReadDto> Data { get; set; }
    }
}