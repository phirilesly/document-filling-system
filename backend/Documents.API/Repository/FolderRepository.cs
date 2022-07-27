using Documents.API.Common;
using Documents.API.Data;
using Documents.API.Models;
using MongoDB.Driver;

namespace Documents.API.Repository
{
    public interface IFolderRepository : IRepository<Folder, Guid>
    {
    }
    public class FolderRepository:IFolderRepository
    {
        private MongoContext _context;
        public FolderRepository(MongoContext context)
        {
            _context = context;
        }

        public FolderRepository(string connectionString)
        {
            _context = new MongoContext(connectionString);
        }

        public async Task DeleteEntityAsync(Guid id)
        {
            var filter = Builders<Folder>.Filter.Eq("_id", id);
            await _context.Folders.DeleteOneAsync(filter);
         

        }

        public async Task<IEnumerable<Folder>> FindEntitiesAsync(List<SearchParameter> searchParameters)
        {

            FilterDefinition<Folder> filter = Builders<Folder>.Filter.Ne("isDeleted", true);
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
                            filter = Builders<Folder>.Filter.Eq(c => c.Id, Guid.Parse(parameter.Value));
                        }
                        else
                        {
                            filter = Builders<Folder>.Filter.Eq(c => c.Id, Guid.Parse(parameter.Value)) & filter;
                        }
                        break;


                }

            }
            if (filter == null) throw new ArgumentException("Invalid search parameters specified");
            List<Folder> result = await _context.Folders.Find((FilterDefinition<Folder>)filter).ToListAsync();
            return result;
        }

        public async Task<Folder> LoadEntityAsync(Guid id)
        {
            FilterDefinition<Folder> filter = Builders<Folder>.Filter.Ne("isDeleted", true);

            filter = Builders<Folder>.Filter.Eq("_id", id) & filter;
            if (filter == null)
            {
                throw new ArgumentException("Invalid application search parameters specified");

            }
            var result = (await _context.Folders.FindAsync(filter)).FirstOrDefault();
            return result;
        }

        public async Task<Folder> SaveEntityAsync(Folder aggregate)
        {
            FilterDefinition<Folder> filter = Builders<Folder>.Filter.Eq("_id", aggregate.Id);

            var result = await _context.Folders.FindAsync(filter);

            if (result.Any())
            {
                await _context.Folders.ReplaceOneAsync(filter, aggregate);
            }
            else
            {
                await _context.Folders.InsertOneAsync(aggregate);
            }
            return aggregate;
        }
    }
}
