using FluentValidation.Results;
using Library.BusinessLogic.Dtos;
using Library.LibraryApi.ResponseApi;
using Library.LibraryApi.ResponseApi.Responses.AuthorsResponses;
using Library.LibraryApi.Validators;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Library.LibraryApi.Filters;

[AttributeUsage(AttributeTargets.All)]
public class AuthorCreateValidationFilterAttribute : Attribute, IAsyncActionFilter
{
    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
        var itemObject = context.ActionArguments.SingleOrDefault(a => a.Value is AuthorCreateDto);
        var autor = itemObject.Value as AuthorCreateDto;

        var validator = new CreateAuthorValidator();
        ValidationResult results = validator.Validate(autor);
        var errors = new List<string>();

        if (results.IsValid)
        {
            await next();
        }
        else
        {
            foreach (ValidationFailure failure in results.Errors)
            {
                errors.Add($"{ failure.PropertyName }: { failure.ErrorMessage }");
            }

            var response = new AuthorCreateResponse()
            {
                Status = StatusResponse.NotValid,
                Messages = errors,
                Data = null
            };

            context.Result = new BadRequestObjectResult(response);
        }
    }
}