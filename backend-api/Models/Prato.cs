using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend_api.Models;

[Table("pratos")]
public class Prato
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    [Column("nome")]
    public string Nome { get; set; } = string.Empty;

    [Required]
    [MaxLength(255)]
    [Column("descricao")]
    public string Descricao { get; set; } = string.Empty;

    [Required]
    [MaxLength(50)]
    [Column("categoria")]
    public string Categoria { get; set; } = string.Empty;

    [Required]
    [Column("preco", TypeName = "decimal(10,2)")]
    public decimal Preco { get; set; }

    [Required]
    [Column("disponivel")]
    public bool Disponivel { get; set; }
}
