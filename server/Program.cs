using Microsoft.EntityFrameworkCore;
using MusicalApi.Data;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddDbContext<MusicalContext>(options =>
            options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

if (true){  //change this to true to reseed the database upon server restart
    SeedData.Initialize(app.Services);
}

app.UseCors(policy => 
    policy.WithOrigins("http://localhost:4200")
          .AllowAnyMethod()
          .AllowAnyHeader());

// app.UseHttpsRedirection();

// app.UseCors("AllowAllOrigins");

app.UseAuthorization();

app.MapControllers();

app.Run();
