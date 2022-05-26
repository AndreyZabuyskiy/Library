﻿using Library.BusinessLogic.Dtos;
using Library.DataAccess.Entities;

namespace Library.BusinessLogic.Extensions
{
    internal static class MapModelExtensions
    {
        public static AuthorReadDto AsAuthorReadDto(this AuthorRead author, int count)
        {
            return new AuthorReadDto
            {
                Id = author.Id,
                FirstName = author.FirstName,
                LastName = author.LastName,
                NumberOfBooks = count
            };
        }

        public static BookReadDto AsBookReadDto(this BookRead book)
        {
            return new BookReadDto
            {
                Id = book.Id,
                Title = book.Title,
                Price = book.Price,
            };
        }

        public static AuthorViewDto AsAuthorViewDto(this AuthorView author)
        {
            var books = new List<BookOverviewInfoDto>();

            foreach (var book in author.Books)
            {
                books.Add(new BookOverviewInfoDto()
                {
                    Id = book.Id,
                    Title = book.Title
                });
            }

            return new AuthorViewDto()
            {
                Id = author.Id,
                FirstName = author.FirstName,
                LastName = author.LastName,
                Books = books
            };
        }

        public static BookViewDto AsBookViewDto(this BookView book)
        {
            return new BookViewDto()
            {
                Id = book.Id,
                Title = book.Title,
                Description = book.Description,
                Price = book.Price,
                NumberOfPages = book.NumberOfPages,
                YearOfPublication = book.YearOfPublication,
                Author = new AuthorOverviewInfoDto()
                {
                    Id = book.Author.Id,
                    FirstName = book.Author.FirstName,
                    LastName = book.Author.LastName
                }
            };
        }

        public static AuthorCreate AsAuthorCreate(this AuthorCreateDto author)
        {
            return new AuthorCreate
            {
                FirstName = author.FirstName,
                LastName = author.LastName
            };
        }

        public static AuthorUpdate AsAuthorUpdate(this AuthorUpdateDto author)
        {
            return new AuthorUpdate
            {
                FirstName = author.FirstName,
                LastName = author.LastName
            };
        }
    }
}