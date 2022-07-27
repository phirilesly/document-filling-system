using Documents.API.Application;
using Documents.API.Common;
using Documents.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Documents.API.Controllers
{
    [Route("api/v1/folders")]
    [ApiController]
    public class FoldersController : ControllerBase
    {
        private readonly IDocumentApplication _documentApplication;
        private readonly IDocumentQueryHandler _documentQueryHandler;

        public FoldersController(IDocumentApplication documentApplication, IDocumentQueryHandler documentQueryHandler)
        {
            _documentApplication = documentApplication;
            _documentQueryHandler = documentQueryHandler;
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> SaveFolder([FromBody] Folder folder)
        {

            var result = await _documentApplication.CreateFolder(folder);
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
        public async Task<IActionResult> UpdateFolder([FromBody] Folder folder)
        {

            var result = await _documentApplication.UpdateFolader(folder);
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
        public async Task<IActionResult> GetFolders(Guid? id)
        {
            var searchParameters = new List<SearchParameter>();
            if (id.HasValue)
            {
                searchParameters.Add(new SearchParameter { Name = "ID", Value = id.ToString() });
            }
            var folders = await _documentQueryHandler.GetFolders(searchParameters);
            return Ok(folders);
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteFolder(Guid id)
        {
            _documentApplication.DeleteFolder(id);
            return Ok();
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetFolder(Guid id)
        {

            var folder = _documentQueryHandler.GetFolder(id);


            return Ok(folder);
        }
    }
}
