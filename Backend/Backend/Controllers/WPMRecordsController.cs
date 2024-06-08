using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Model;

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

        // PUT: api/WPMRecords/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWPMRecord(int id, WPMRecord wPMRecord)
        {
            if (id != wPMRecord.RecordId)
            {
                return BadRequest();
            }

            _context.Entry(wPMRecord).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!WPMRecordExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/WPMRecords
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<WPMRecord>> PostWPMRecord(WPMRecord wPMRecord)
        {
            _context.WPMRecords.Add(wPMRecord);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWPMRecord", new { id = wPMRecord.RecordId }, wPMRecord);
        }

        // DELETE: api/WPMRecords/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWPMRecord(int id)
        {
            var wPMRecord = await _context.WPMRecords.FindAsync(id);
            if (wPMRecord == null)
            {
                return NotFound();
            }

            _context.WPMRecords.Remove(wPMRecord);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool WPMRecordExists(int id)
        {
            return _context.WPMRecords.Any(e => e.RecordId == id);
        }
    }
}
