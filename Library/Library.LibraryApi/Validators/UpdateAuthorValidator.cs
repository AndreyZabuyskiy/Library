using FluentValidation;
using Library.BusinessLogic.Dtos;
using Library.Domain;

namespace Library.LibraryApi.Validators;

public class UpdateAuthorValidator : AbstractValidator<AuthorUpdateDto>
{
    public UpdateAuthorValidator()
    {
        RuleFor(p => p.FirstName)
            .Cascade(CascadeMode.StopOnFirstFailure)
            .NotEmpty().WithMessage("{PropertyName} is empty")
            .Length(Settings.MIN_LENGTH_FIRSTNAME_AUTHOR, Settings.MAX_LENGTH_FIRSTNAME_AUTHOR)
            .WithMessage("Length ({TotalLength}) of {PropertyName} Invalid")
            .Must(ValidName).WithMessage("{PropertyName} Contains Invalied Characters");

        RuleFor(p => p.LastName)
            .Cascade(CascadeMode.StopOnFirstFailure)
            .NotEmpty().WithMessage("{PropertyName} is empty")
            .Length(Settings.MIN_LENGTH_LASTNAME_AUTHOR, Settings.MAX_LENGTH_LASTNAME_AUTHOR)
            .WithMessage("Length ({TotalLength}) of {PropertyName} Invalid")
            .Must(ValidName).WithMessage("{PropertyName} Contains Invalied Characters");
    }

    protected bool ValidName(string name)
    {
        name = name.Replace(" ", "");
        name = name.Replace("-", "");
        return name.All(char.IsLetter);
    }
}