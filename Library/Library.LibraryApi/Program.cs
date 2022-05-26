using Library.BusinessLogic.Services;
using Library.BusinessLogic.UseCases;
using Library.DataAccess.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options => options.AddDefaultPolicy(
    builder => builder.WithOrigins("http://localhost:3000")
                            .AllowAnyHeader()
                            .AllowAnyMethod()
));

builder.Services.AddScoped<IRepository, MemoryRepository>();

builder.Services.AddScoped<IGetAllAuthors, AuthorsService>();
builder.Services.AddScoped<IGetAuthorById, AuthorsService>();
builder.Services.AddScoped<IDeleteAuthor, AuthorsService>();
builder.Services.AddScoped<ICreateAuthor, AuthorsService>();
builder.Services.AddScoped<IUpdateAuthor, AuthorsService>();

builder.Services.AddScoped<IGetAllBooks, BookService>();
builder.Services.AddScoped<IGetBookById, BookService>();
builder.Services.AddScoped<IDeleteBook, BookService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();