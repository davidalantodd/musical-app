using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicalApi.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

//route points to "api/Musical" -- whatever the name of the Controller class is minus "Controller"
[Route("API/[Controller]")]
[ApiController]
public class MusicalController: ControllerBase
{
    private readonly MusicalContext _context;

    public MusicalController(MusicalContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Musical>>> GetMusicals()
    {
        if (_context.Musicals == null)
        {
            return NotFound();
        }
        return await _context.Musicals.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Musical>>
    GetMusical(long id)
    {
        if (_context.Musicals == null)
        {
            return NotFound();
        }
        var musical = await _context.Musicals.FindAsync(id);
        if (musical == null)
        {
            return NotFound();
        }
        return musical;
    }

    [HttpPost]
    public async Task<ActionResult<Musical>> PostMusical(Musical musical)
    {
        _context.Musicals.Add(musical);

        await _context.SaveChangesAsync();
        return CreatedAtAction("GetMusical", new {id = musical.Id}, musical);
    }


}