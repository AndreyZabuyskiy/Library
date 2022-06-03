using FluentValidation.Results;
using Library.BusinessLogic.Dtos;
using Library.LibraryApi.ResponseApi;
using Library.LibraryApi.ResponseApi.Responses.BooksResponses;
using Library.LibraryApi.Validators;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Library.LibraryApi.Filters;

[AttributeUsage(AttributeTargets.All)]
public class BookCreateValidationFilterAttribute : Attribute, IAsyncActionFilter
{
    public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
    {
        var itemObject = context.ActionArguments.SingleOrDefault(a => a.Value is BookCreateDto);
        var autor = itemObject.Value as BookCreateDto;

        var validator = new CreateBookValidator();
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

            var response = new CreateBookResponse()
            {
                Status = StatusResponse.NotValid,
                Messages = errors,
                Data = null
            };

            context.Result = new BadRequestObjectResult(response);
        }
    }
}