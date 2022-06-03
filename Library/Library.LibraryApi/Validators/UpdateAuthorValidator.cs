using FluentValidation;
using Library.BusinessLogic.Dtos;

namespace Library.LibraryApi.Validators;

public class UpdateAuthorValidator : AbstractValidator<AuthorUpdateDto>
{
    public UpdateAuthorValidator()
    {
        RuleFor(p => p.FirstName)
           .Cascade(CascadeMode.StopOnFirstFailure)
           .NotEmpty().WithMessage("{PropertyName} is empty")
           .Length(2, 30).WithMessage("Length ({TotalLength}) of {PropertyName} Invalid")
           .Must(ValidName).WithMessage("{PropertyName} Contains Invalied Characters");

        RuleFor(p => p.LastName)
            .Cascade(CascadeMode.StopOnFirstFailure)
            .NotEmpty().WithMessage("{PropertyName} is empty")
            .Length(2, 30).WithMessage("Length ({TotalLength}) of {PropertyName} Invalid")
            .Must(ValidName).WithMessage("{PropertyName} Contains Invalied Characters");
    }

    protected bool ValidName(string name)
    {
        name = name.Replace(" ", "");
        name = name.Replace("-", "");
        return name.All(char.IsLetter);
    }
}