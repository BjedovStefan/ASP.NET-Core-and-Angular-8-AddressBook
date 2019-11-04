using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API_AddressBook.Models
{
    public class Contacts
    {
        [Key]
        public int ID { get; set; }

        
        [Required]
        public string FirstName { get; set; }

        
        [Required]
        public string LastName { get; set; }

        
        [Required]
        public string Address { get; set; }

        
        [Required]
        public string PhoneNo { get; set; }

    }
}
