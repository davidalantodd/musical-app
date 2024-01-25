using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MusicalApi.Data;

public class MusicalContext : DbContext{
    public MusicalContext(DbContextOptions<MusicalContext> options) : base(options)
    {
    }

    public DbSet<Musical> Musicals { get; set; } = null!;

    public static void Initialize(MusicalContext context)
    {
        context.Database.EnsureCreated();

        context.Musicals.RemoveRange(context.Musicals);
        context.SaveChanges();

        context.Database.ExecuteSqlRaw("ALTER SEQUENCE \"Musicals_Id_seq\" RESTART WITH 1");

        // Read the file
        var musicalsJson = System.IO.File.ReadAllText("./Data/musicals.json");

        // Deserialize the JSON to Musical array
        var serializerSettings = new JsonSerializerSettings();
        serializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        var musicals = JsonConvert.DeserializeObject<Musical[]>(musicalsJson, serializerSettings);

        // Add each musical to context and save
        foreach (var musical in musicals)
        {
            context.Musicals.Add(musical);
        }

        context.SaveChanges();
    }
}