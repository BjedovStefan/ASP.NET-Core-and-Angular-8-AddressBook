using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_AddressBook.Models;

namespace API_AddressBook.Models
{
    public class ContactDbContext : DbContext
    {
        public ContactDbContext()
        {

        }

        public ContactDbContext(DbContextOptions<ContactDbContext> options) : base(options)
        {

        }
        public DbSet<Contacts> Contacts { get; set; }
    }
}
