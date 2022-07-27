using Documents.API.Application;
using Documents.API.Common;
using Documents.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Documents.API.Controllers
{
    [Route("api/v1/districts")]
    [ApiController]
    public class DistrictsController : ControllerBase
    {
        private readonly IDocumentApplication _documentApplication;
        private readonly IDocumentQueryHandler _documentQueryHandler;

        public DistrictsController(IDocumentApplication documentApplication, IDocumentQueryHandler documentQueryHandler)
        {
            _documentApplication = documentApplication;
            _documentQueryHandler = documentQueryHandler;
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> SaveDistrict([FromBody] District district)
        {

            var result = await _documentApplication.CreateDistrict(district);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }

        }

        [HttpPut]
        [Route("")]
        public async Task<IActionResult> UpdateDistrict([FromBody] District district)
        {

            var result = await _documentApplication.UpdateDistrict(district);
            if (result != null)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }

        }
        [HttpGet]
        [Route("")]
        public async Task<IActionResult> GetDistricts(Guid? id )
        {
            var searchParameters = new List<SearchParameter>();
            if (id.HasValue)
            {
                searchParameters.Add(new SearchParameter { Name = "ID", Value = id.ToString() });
            }
            var districts = await _documentQueryHandler.GetDistricts(searchParameters);
            return Ok(districts);
        }
      
        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteDetails(Guid id)
        {
           _documentApplication.DeleteDistrict(id);
            return Ok();
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetDistrict(Guid id)
        {

            var district = _documentQueryHandler.GetDistrict(id);
           

            return Ok(district);
        }
    }
}
