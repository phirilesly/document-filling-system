using Documents.API.Models;

namespace Documents.API.Application
{
    public interface IDocumentApplication
    {
        Task<District> CreateDistrict(District district);
        Task<District> UpdateDistrict(District district);
        Task DeleteDistrict(Guid id);

        Task<FileData> CreateFileData(FileData fileData);
        Task<FileData> UpdateFileData(FileData fileData);
        Task DeleteFileData(Guid id);


        Task<Folder> CreateFolder(Folder folder);
        Task<Folder> UpdateFolader(Folder folder);
        Task DeleteFolder(Guid id);


        Task<Ministry> CreateMinistry(Ministry ministry);
        Task<Ministry> UpdateMinistry(Ministry ministry);
        Task DeleteMinistry(Guid id);


        Task<Province> CreateProvince(Province province);
        Task<Province> UpdateProvince(Province province);
        Task DeleteProvince(Guid id);
    }
}
