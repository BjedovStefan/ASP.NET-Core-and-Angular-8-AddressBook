using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_AddressBook.Models;

namespace API_AddressBook.Controllers
{
    [Route("api/Contacts")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
       
        private readonly ContactsDAL _DAL;

        public ContactsController(ContactsDAL dal)
        {
            _DAL = dal;
        }

        // GET: api/Contacts
        [HttpGet]
        [Route ("GetContacts")]
        public async Task <IEnumerable<Contacts>> GetContacts()
        {
            return await _DAL.GetContactList();
        }

        // GET: api/Contacts/5
        [HttpGet]
        [Route("GetContactDetail/{conID}")]
        public Contacts GetContactDetail( int conID )
        {
            return _DAL.GetContact(conID);
        }

        // PUT: api/Contacts/5
        [HttpPut]
        [Route("EditContact")]
        public int EditContact([FromBody] Contacts contacts)
        {
            return _DAL.UpdateContact(contacts);
        }

        // POST: api/Contacts
        [HttpPost]
        [Route ("AddContact")]
        public int AddContact([FromBody] Contacts contacts)
        {
            
            return _DAL.AddContact(contacts);
        }

        // DELETE: api/Contacts/5
        [HttpDelete]
        [Route("DeleteContact/{conID}")]
        public int DeleteContacts( int conID)
        {
            return _DAL.DeleteContact(conID);
        }

        
    }
}