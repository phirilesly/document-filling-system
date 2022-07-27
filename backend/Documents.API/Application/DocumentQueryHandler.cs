using Documents.API.Common;
using Documents.API.Models;
using Documents.API.Repository;

namespace Documents.API.Application
{
    public class DocumentQueryHandler : IDocumentQueryHandler
    {
        private readonly IDistrictRepository _districtRepository;
        private readonly IFileDataRepository _fileDataRepository;
        private readonly IFolderRepository _folderRepository;
        private readonly IMinistryRepository _ministryRepository;
        private readonly IProvinceRepository _provinceRepository;

        public DocumentQueryHandler(IDistrictRepository districtRepository, IFileDataRepository fileDataRepository, IFolderRepository folderRepository, IMinistryRepository ministryRepository, IProvinceRepository provinceRepository)
        {
            _districtRepository = districtRepository;
            _fileDataRepository = fileDataRepository;
            _folderRepository = folderRepository;
            _ministryRepository = ministryRepository;
            _provinceRepository = provinceRepository;
        }
        public async Task<IEnumerable<FileData>> GetAllFileData(List<SearchParameter> searchParameters)
        {
            return await _fileDataRepository.FindEntitiesAsync(searchParameters);
        }

        public async Task<District> GetDistrict(Guid id)
        {
         return await _districtRepository.LoadEntityAsync(id);
        }

        public async Task<IEnumerable<District>> GetDistricts(List<SearchParameter> searchParameters)
        {
            return await _districtRepository.FindEntitiesAsync(searchParameters);   
        }

        public async Task<FileData> GetFileData(Guid id)
        {
            return await _fileDataRepository.LoadEntityAsync(id);
        }

        public async Task<Folder> GetFolder(Guid id)
        {
            return await _folderRepository.LoadEntityAsync(id);
        }

        public async Task<IEnumerable<Folder>> GetFolders(List<SearchParameter> searchParameters)
        {
            return await _folderRepository.FindEntitiesAsync(searchParameters);
        }

        public async Task<IEnumerable<Ministry>> GetMinistries(List<SearchParameter> searchParameters)
        {
            return await _ministryRepository.FindEntitiesAsync(searchParameters);
        }

        public async Task<Ministry> GetMinistry(Guid id)
        {
            return await _ministryRepository.LoadEntityAsync(id);
        }

        public async Task<Province> GetProvince(Guid id)
        {
            return await _provinceRepository.LoadEntityAsync(id);
        }

        public async Task<IEnumerable<Province>> GetProvinces(List<SearchParameter> searchParameters)
        {
            return await _provinceRepository.FindEntitiesAsync(searchParameters);
        }
    }
}
