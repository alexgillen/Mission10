using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Mvc;

namespace Mission10.Data
{
    public class BowlingLeague
    {
        [Key]
        public int BowlerId { get; set; }
        [Required]
        public string BowlerFirstName { get; set; }
        [Required]
        public string BowlerLastName { get; set; }
        public string? BowlerMiddleInit { get; set; }
        [Required]
        public string BowlerAddress { get; set; }
        [Required]
        public string BowlerCity { get; set; }
        [Required]
        public string BowlerState { get; set; }
        [Required]
        public string BowlerZip { get; set; }
        [Required]
        public string BowlerPhoneNumber { get; set; }
        [ForeignKey("TeamId")]
        [Required]
        public int TeamId { get; set; }
        [Required]
        public Teams? Team { get; set; }

    }
}
