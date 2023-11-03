using Microsoft.EntityFrameworkCore;

namespace MusicalApi.Data;

public class MusicalContext : DbContext{
    public MusicalContext(DbContextOptions<MusicalContext> options) : base(options)
    {
    }

    public DbSet<Musical> Musicals { get; set; } = null!;
}