using Microsoft.EntityFrameworkCore;

namespace MusicalApi.Models;

public class MusicalContext : DbContext{
    public MusicalContext(DbContextOptions<MusicalContext> options) : base(options)
    {
    }

    public DbSet<Musical> Musicals { get; set; } = null!;
}