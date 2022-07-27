using Documents.API.Models;
using Documents.API.Repository;

namespace Documents.API.Application
{
    public class DocumentApplication : IDocumentApplication
    {
        private readonly IDistrictRepository _districtRepository;
        private readonly IFileDataRepository _fileDataRepository;
        private readonly IFolderRepository _folderRepository;
        private readonly IMinistryRepository _ministryRepository;
        private readonly IProvinceRepository _provinceRepository;

        public DocumentApplication(IDistrictRepository districtRepository, IFileDataRepository fileDataRepository, IFolderRepository folderRepository, IMinistryRepository ministryRepository, IProvinceRepository provinceRepository)
        {
            _districtRepository = districtRepository;
            _fileDataRepository = fileDataRepository;
            _folderRepository = folderRepository;
            _ministryRepository = ministryRepository;
            _provinceRepository = provinceRepository;   
        }

        public async Task<District> CreateDistrict(District district)
        {
            district.Id = Guid.NewGuid();
            return await _districtRepository.SaveEntityAsync(district);
        }

        public async Task<FileData> CreateFileData(FileData fileData)
        {
            fileData.Id = Guid.NewGuid();
            return await _fileDataRepository.SaveEntityAsync(fileData);
        }

        public async Task<Folder> CreateFolder(Folder folder)
        {  folder.Id = Guid.NewGuid();
            return await _folderRepository.SaveEntityAsync(folder);
        }

        public async Task<Ministry> CreateMinistry(Ministry ministry)
        {   ministry.Id = Guid.NewGuid();
            return await _ministryRepository.SaveEntityAsync(ministry);
        }

        public async Task<Province> CreateProvince(Province province)
        {    province.Id = Guid.NewGuid();
            return await _provinceRepository.SaveEntityAsync(province);
        }

        public async Task DeleteDistrict(Guid id)
        {
          await _districtRepository.DeleteEntityAsync(id);
            
        }

        public async Task DeleteFileData(Guid id)
        {
            await _fileDataRepository.DeleteEntityAsync(id);
        }

        public async Task DeleteFolder(Guid id)
        {
            await _folderRepository.DeleteEntityAsync(id);
        }

        public async Task DeleteMinistry(Guid id)
        {
            await _ministryRepository.DeleteEntityAsync(id);
        }

        public async Task DeleteProvince(Guid id)
        {
            await _provinceRepository.DeleteEntityAsync(id);
        }

        public async Task<District> UpdateDistrict(District district)
        {
            return await _districtRepository.SaveEntityAsync(district);
        }

        public async Task<FileData> UpdateFileData(FileData fileData)
        {
            return await _fileDataRepository.SaveEntityAsync(fileData);
        }

        public async Task<Folder> UpdateFolader(Folder folder)
        {
            return await _folderRepository.SaveEntityAsync(folder);
        }

        public async Task<Ministry> UpdateMinistry(Ministry ministry)
        {
            return await _ministryRepository.SaveEntityAsync(ministry);
        }

        public async Task<Province> UpdateProvince(Province province)
        {
            return await _provinceRepository.SaveEntityAsync(province);
        }
    }
}
