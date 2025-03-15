using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace Mission10.Data
{
    public class Teams
    {
        [Key]
        public int TeamId { get; set; }
        [Required]
        public string TeamName { get; set; }
        [Required]
        public List<BowlingLeague> Bowlers { get; set; }
    }
}
