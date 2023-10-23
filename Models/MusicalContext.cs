using Microsoft.EntityFrameworkCore;

namespace Musical.Models;

public class MusicalContext : DbContext{
    public MusicalContext(DbContextOptions<MusicalContext> options) : base(options)
    {
    }

    public DbSet<Musical> Musicals { get; set; } = null!;
}