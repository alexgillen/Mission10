using Microsoft.EntityFrameworkCore;
using Mission10.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<BowlerDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"
    )));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(x => x.WithOrigins("http://localhost:3000"));

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

