using Documents.API.Application;
using Documents.API.Common;
using Documents.API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Documents.API.Controllers
{
    [Route("api/v1/files")]
    [ApiController]
    public class FilesController : ControllerBase
    {
        private readonly IDocumentApplication _documentApplication;
        private readonly IDocumentQueryHandler _documentQueryHandler;

        public FilesController(IDocumentApplication documentApplication, IDocumentQueryHandler documentQueryHandler)
        {
            _documentApplication = documentApplication;
            _documentQueryHandler = documentQueryHandler;
        }

        [HttpPost]
        [Route("")]
        public async Task<IActionResult> SaveFile([FromBody] FileData file)
        {

            var result = await _documentApplication.CreateFileData(file);
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
        public async Task<IActionResult> UpdateFileData([FromBody] FileData file)
        {

            var result = await _documentApplication.UpdateFileData(file);
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
        public async Task<IActionResult> GetFiles(Guid? id)
        {
            var searchParameters = new List<SearchParameter>();
            if (id.HasValue)
            {
                searchParameters.Add(new SearchParameter { Name = "ID", Value = id.ToString() });
            }
            var districts = await _documentQueryHandler.GetAllFileData(searchParameters);
            return Ok(districts);
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteFile(Guid id)
        {
            _documentApplication.DeleteFileData(id);
            return Ok();
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetFile(Guid id)
        {

            var district = _documentQueryHandler.GetFileData(id);


            return Ok(district);
        }
    }
}
