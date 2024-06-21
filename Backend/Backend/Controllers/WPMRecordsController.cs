using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Model;
using Microsoft.VisualBasic;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WPMRecordsController : ControllerBase
    {
        private readonly WPMRecordDbContext _context;

        public WPMRecordsController(WPMRecordDbContext context)
        {
            _context = context;
        }

        // GET: api/WPMRecords use when getting ALL records from database
        [HttpGet]
        public async Task<ActionResult<IEnumerable<WPMRecord>>> GetWPMRecords()
        {
            return await _context.WPMRecords.ToListAsync();
        }

        // GET: api/WPMRecords/5
        [HttpGet("{id}")]
        public async Task<ActionResult<WPMRecord>> GetWPMRecord(int id)
        {
            var wPMRecord = await _context.WPMRecords.FindAsync(id);

            if (wPMRecord == null)
            {
                return NotFound();
            }

            return wPMRecord;
        }


        // POST: api/WPMRecords
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<WPMRecord>> PostWPMRecord(WPMRecord wPMRecord)
        {
            WPMRecord record = new WPMRecord
            {
                UserName = wPMRecord.UserName,
                WPM = wPMRecord.WPM,
                inputDate = DateTime.Now,
            };
            _context.WPMRecords.Add(record);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWPMRecord", new { id = record.RecordId }, record);
        }

        private bool WPMRecordExists(int id)
        {
            return _context.WPMRecords.Any(e => e.RecordId == id);
        }
    }
}
