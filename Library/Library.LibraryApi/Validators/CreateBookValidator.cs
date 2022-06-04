using FluentValidation;
using Library.BusinessLogic.Dtos;
using Library.Domain;

namespace Library.LibraryApi.Validators;

public class CreateBookValidator : AbstractValidator<BookCreateDto>
{
    public CreateBookValidator()
    {
        RuleFor(p => p.Title)
            .NotEmpty().WithMessage("{PropertyName} is empty")
            .Length(Settings.MIN_LENTGH_TITLE, Settings.MAX_LENGTH_TITLE)
            .WithMessage("Length ({TotalLength}) of {PropertyName} Invalid");

        RuleFor(p => p.AuthorId).NotEmpty().WithMessage("{PropertyName} is empty");
    }
}