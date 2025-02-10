using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Pomelo.EntityFrameworkCore.MySql.Scaffolding.Internal;

namespace TodoApi;

public partial class ToDoDbContext : DbContext
{
    public ToDoDbContext()
    {
    }

    public ToDoDbContext(DbContextOptions<ToDoDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Item> Items { get; set; }

    // protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    //     => optionsBuilder.UseMySql("name=ToDoDb", Microsoft.EntityFrameworkCore.ServerVersion.Parse("8.0.33-mysql"));

public void ConfigureServices(IServiceCollection services)
{
    services.AddDbContext<ToDoDbContext>(options =>
        options.UseMySql("server=b55nqxyhxoysr3ebewur-mysql.services.clever-cloud.com;user=ujlgxe2wvppnf23o;password=h8iFmNELejn5mxXguZbA;database=b55nqxyhxoysr3ebewur;port=3306", 
        ServerVersion.AutoDetect("server=b55nqxyhxoysr3ebewur-mysql.services.clever-cloud.com;user=ujlgxe2wvppnf23o;password=h8iFmNELejn5mxXguZbA;database=b55nqxyhxoysr3ebewur;port=3306")));
}
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder
            .UseCollation("utf8mb4_0900_ai_ci")
            .HasCharSet("utf8mb4");

        modelBuilder.Entity<Item>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("Items");

            entity.Property(e => e.Name).HasMaxLength(100);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
