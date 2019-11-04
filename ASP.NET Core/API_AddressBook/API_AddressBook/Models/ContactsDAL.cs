using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_AddressBook.Models;
using Microsoft.EntityFrameworkCore;

namespace API_AddressBook.Models
{
    public class ContactsDAL
    {
        public ContactDbContext _context;

        public ContactsDAL(ContactDbContext context)
        {
            _context = context;
        }

        //returns list of all contacts from database
        public async Task<IEnumerable<Contacts>> GetContactList()
        {
            try
            {
                return await _context.Contacts.ToListAsync();
            }
            catch
            {
                throw;
            }
        }

        //add new contact to database 
        public int AddContact(Contacts con)
        {
            try
            {
                _context.Contacts.Add(con);
                _context.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //edit selected contact and update record to database
        public int UpdateContact(Contacts con)
        {
            try
            {
                _context.Entry(con).State = EntityState.Modified;
                _context.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //get contact details throught contact ID
        public Contacts GetContact(int conID)
        {
            try
            {
                Contacts con = _context.Contacts.Find(conID);
                return con;
            }
            catch
            {
                throw;
            }
        }

        //delete contact with provided ID
        public int DeleteContact(int conID)
        {
            try
            {
                Contacts con = _context.Contacts.Find(conID);
                _context.Contacts.Remove(con);
                _context.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
