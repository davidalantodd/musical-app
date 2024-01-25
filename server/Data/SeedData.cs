using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MusicalApi.Data;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var serviceScope = serviceProvider.CreateScope())
        {
            var context = serviceScope.ServiceProvider.GetService<MusicalContext>();
            if (context != null)
            {
                MusicalContext.Initialize(context);
            }
        }
    }
}