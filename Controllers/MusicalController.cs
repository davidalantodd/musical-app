using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicalApi.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
        return await _context.Musicals.ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Musical>> PostMusical(Musical musical)
    {
        _context.Musicals.Add(musical);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetMusical", new {id = musical.Id}, musical);
    }


}