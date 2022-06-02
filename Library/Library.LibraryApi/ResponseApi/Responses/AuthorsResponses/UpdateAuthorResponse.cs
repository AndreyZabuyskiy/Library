﻿using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.ResponseApi.Responses.AuthorsResponses;

public class UpdateAuthorResponse : IResponseApi<AuthorReadDto>
{
    public StatusResponse Status { get; set; }
    public AuthorReadDto? Data { get; set; }
    public string Messages { get; set; }
}