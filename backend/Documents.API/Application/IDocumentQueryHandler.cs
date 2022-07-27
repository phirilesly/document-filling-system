using Documents.API.Common;
using Documents.API.Models;

namespace Documents.API.Application
{
    public interface IDocumentQueryHandler
    {
        Task<IEnumerable<District>> GetDistricts(List<SearchParameter> searchParameters);
        Task<District> GetDistrict(Guid id);


        Task<IEnumerable<Folder>> GetFolders(List<SearchParameter> searchParameters);
        Task<Folder> GetFolder(Guid id);



        Task<IEnumerable<FileData>> GetAllFileData(List<SearchParameter> searchParameters);
        Task<FileData> GetFileData(Guid id);


        Task<IEnumerable<Ministry>> GetMinistries(List<SearchParameter> searchParameters);
        Task<Ministry> GetMinistry(Guid id);


        Task<IEnumerable<Province>> GetProvinces(List<SearchParameter> searchParameters);
        Task<Province> GetProvince(Guid id);
    }
}
