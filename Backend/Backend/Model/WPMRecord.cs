using System.ComponentModel.DataAnnotations;

namespace Backend.Model
{
    public class WPMRecord
    {
        [Key]
        public int RecordId { get; set; }
        public int WPM { get; set; }
        public string UserName { get; set; }
        public DateTime inputDate { get; set; }
    }
}
