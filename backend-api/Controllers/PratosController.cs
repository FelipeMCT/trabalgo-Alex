using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend_api.Data;
using backend_api.Models;

namespace backend_api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PratosController : ControllerBase
{
    private readonly AppDbContext _context;

    public PratosController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var pratos = await _context.Pratos.ToListAsync();
        return Ok(pratos);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        var prato = await _context.Pratos.FindAsync(id);
        if (prato == null) return NotFound();
        return Ok(prato);
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Prato prato)
    {
        _context.Pratos.Add(prato);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = prato.Id }, prato);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, [FromBody] Prato prato)
    {
        if (id != prato.Id) return BadRequest();
        _context.Entry(prato).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var prato = await _context.Pratos.FindAsync(id);
        if (prato == null) return NotFound();
        _context.Pratos.Remove(prato);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
