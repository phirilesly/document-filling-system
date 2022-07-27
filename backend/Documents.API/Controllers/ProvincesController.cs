using Documents.API.Application;
using Documents.API.Common;
using Documents.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Documents.API.Controllers
{
    [Route("api/v1/provinces")]
    [ApiController]
    public class ProvincesController : ControllerBase
    {
        private readonly IDocumentApplication _documentApplication;
        private readonly IDocumentQueryHandler _documentQueryHandler;

        public ProvincesController(IDocumentApplication documentApplication, IDocumentQueryHandler documentQueryHandler)
        {
            _documentApplication = documentApplication;
            _documentQueryHandler = documentQueryHandler;
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> SaveProvince([FromBody] Province province)
        {

            var result = await _documentApplication.CreateProvince(province);
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
        public async Task<IActionResult> UpdateProvince([FromBody]Province province)
        {

            var result = await _documentApplication.UpdateProvince(province);
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
        public async Task<IActionResult> GetProvinces(Guid? id)
        {
            var searchParameters = new List<SearchParameter>();
            if (id.HasValue)
            {
                searchParameters.Add(new SearchParameter { Name = "ID", Value = id.ToString() });
            }
            var provinces = await _documentQueryHandler.GetProvinces(searchParameters);
            return Ok(provinces);
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteProvince(Guid id)
        {
            _documentApplication.DeleteProvince(id);
            return Ok();
        }
        
        [HttpGet]
        [Route("{id}")]
        public IActionResult GetProvince(Guid id)
        {

            var province = _documentQueryHandler.GetProvince(id);


            return Ok(province);
        }
    }
}
