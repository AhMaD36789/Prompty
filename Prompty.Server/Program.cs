using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using Prompty.Server.Models.Interfaces;
using Prompty.Server.Models.Services;
using Prompty.Server.Data;
using Microsoft.EntityFrameworkCore;
using Forge.OpenAI;


    


var builder = WebApplication.CreateBuilder(args);

// Load configuration from appsettings.json
builder.Configuration.AddJsonFile("appsettings.json");

// Add services to the container.
builder.Services.AddSingleton<IOpenAIService, OpenAIService>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddForgeOpenAI(options =>
{
    options.AuthenticationInfo = Environment.GetEnvironmentVariable("OPEN_AI_API_KEY")!;
}
);
// Configure the database context
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<PromptyDbContext>(options =>
    options.UseSqlServer(connectionString));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
