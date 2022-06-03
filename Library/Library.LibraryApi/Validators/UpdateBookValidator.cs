﻿using FluentValidation;
using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.Validators;

public class UpdateBookValidator : AbstractValidator<BookUpdateDto>
{
    public UpdateBookValidator()
    {
        RuleFor(p => p.Title)
            .NotEmpty().WithMessage("{PropertyName} is empty")
            .Length(2, 30).WithMessage("Length ({TotalLength}) of {PropertyName} Invalid");

        RuleFor(p => p.AuthorId).NotEmpty().WithMessage("{PropertyName} is empty");
    }
}