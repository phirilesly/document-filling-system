using Documents.API.Application;
using Documents.API.Common;
using Documents.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Documents.API.Controllers
{
    [Route("api/v1/ministries")]
    [ApiController]
    public class MinistriesController : ControllerBase
    {
        private readonly IDocumentApplication _documentApplication;
        private readonly IDocumentQueryHandler _documentQueryHandler;

        public MinistriesController(IDocumentApplication documentApplication, IDocumentQueryHandler documentQueryHandler)
        {
            _documentApplication = documentApplication;
            _documentQueryHandler = documentQueryHandler;
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> SaveMinistry([FromBody] Ministry ministry)
        {

            var result = await _documentApplication.CreateMinistry(ministry);
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
        public async Task<IActionResult> UpdateMinistry([FromBody] Ministry ministry)
        {

            var result = await _documentApplication.UpdateMinistry(ministry);
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
        public async Task<IActionResult> GetMinistries(Guid? id)
        {
            var searchParameters = new List<SearchParameter>();
            if (id.HasValue)
            {
                searchParameters.Add(new SearchParameter { Name = "ID", Value = id.ToString() });
            }
            var ministries = await _documentQueryHandler.GetMinistries(searchParameters);
            return Ok(ministries);
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteMinistry(Guid id)
        {
            _documentApplication.DeleteMinistry(id);
            return Ok();
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetMinistry(Guid id)
        {

            var ministry = _documentQueryHandler.GetMinistry(id);


            return Ok(ministry);
        }
    }
}
