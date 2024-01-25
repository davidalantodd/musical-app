using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;
using MusicalApi.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

//route points to "api/Musical" -- whatever the name of the Controller class is minus "Controller"
[Route("api/[Controller]")]
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
        return CreatedAtAction("GetMusical", new {id = musical.id}, musical);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> PutMusical(long id, Musical musical)
    {
        // if (id != musical.Id)
        // {
        //     return BadRequest();
        // }

        var foundMusical = await _context.Musicals.FindAsync(id);
        if (foundMusical == null)
        {
            return NotFound();
        }

        foundMusical.name = musical.name;
        foundMusical.openDate = musical.openDate;
        foundMusical.closeDate = musical.closeDate;
        foundMusical.location = musical.location;
        foundMusical.spotifyAlbum = musical.spotifyAlbum;
        foundMusical.albumCover = musical.albumCover;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!MusicalExists(id))
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

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMusical(long id)
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

        _context.Musicals.Remove(musical);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool MusicalExists(long id)
    {
        return (_context.Musicals?.Any(e => e.id == id)).GetValueOrDefault();
    }



}