using Microsoft.EntityFrameworkCore;

namespace Backend.Model
{
    public class WPMRecordDbContext : DbContext
    {
        public WPMRecordDbContext(DbContextOptions<WPMRecordDbContext> options) : base(options) { }
        public DbSet<WPMRecord> WPMRecords { get; set; }
    }
}
