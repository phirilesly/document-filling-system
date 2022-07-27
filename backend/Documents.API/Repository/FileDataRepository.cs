using Documents.API.Common;
using Documents.API.Data;
using Documents.API.Models;
using MongoDB.Driver;

namespace Documents.API.Repository
{
    public interface IFileDataRepository : IRepository<FileData, Guid>
    {
    }
    public class FileDataRepository: IFileDataRepository
    {
        private MongoContext _context;
        public FileDataRepository(MongoContext context)
        {
            _context = context;
        }

        public FileDataRepository(string connectionString)
        {
            _context = new MongoContext(connectionString);
        }

        public async Task DeleteEntityAsync(Guid id)
        {
            var filter = Builders<FileData>.Filter.Eq("_id", id);
            await _context.Files.DeleteOneAsync(filter);
        }

        public async Task<IEnumerable<FileData>> FindEntitiesAsync(List<SearchParameter> searchParameters)
        {

            FilterDefinition<FileData> filter = Builders<FileData>.Filter.Ne("isDeleted", true);
            foreach (var parameter in searchParameters.Where(
                    parameter => !string.IsNullOrEmpty(parameter.Name) && !string.IsNullOrEmpty(parameter.Value)))
            {
                var validParameter = Enum.TryParse(parameter.Name.ToUpper(), out SearchOptions option);
                if (!validParameter)
                {
                    continue;
                }
                switch (option)
                {
                    case SearchOptions.ID:
                        if (filter == null)
                        {
                            filter = Builders<FileData>.Filter.Eq(c => c.Id, Guid.Parse(parameter.Value));
                        }
                        else
                        {
                            filter = Builders<FileData>.Filter.Eq(c => c.Id, Guid.Parse(parameter.Value)) & filter;
                        }
                        break;


                }

            }
            if (filter == null) throw new ArgumentException("Invalid search parameters specified");
            List<FileData> result = await _context.Files.Find((FilterDefinition<FileData>)filter).ToListAsync();
            return result;
        }

        public async Task<FileData> LoadEntityAsync(Guid id)
        {
            FilterDefinition<FileData> filter = Builders<FileData>.Filter.Ne("isDeleted", true);

            filter = Builders<FileData>.Filter.Eq("_id", id) & filter;
            if (filter == null)
            {
                throw new ArgumentException("Invalid application search parameters specified");

            }
            var result = (await _context.Files.FindAsync(filter)).FirstOrDefault();
            return result;
        }

        public async Task<FileData> SaveEntityAsync(FileData aggregate)
        {
            FilterDefinition<FileData> filter = Builders<FileData>.Filter.Eq("_id", aggregate.Id);

            var result = await _context.Files.FindAsync(filter);

            if (result.Any())
            {
                await _context.Files.ReplaceOneAsync(filter, aggregate);
            }
            else
            {
                await _context.Files.InsertOneAsync(aggregate);
            }
            return aggregate;
        }
    }
}
