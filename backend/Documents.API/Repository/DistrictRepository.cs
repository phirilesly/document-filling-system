using Documents.API.Common;
using Documents.API.Data;
using Documents.API.Models;
using MongoDB.Driver;

namespace Documents.API.Repository
{
    public interface IDistrictRepository : IRepository<District, Guid>
    {
    
    }
    public class DistrictRepository: IDistrictRepository
    {
        private MongoContext _context;
        public DistrictRepository(MongoContext context)
        {
            _context = context;
        }

        public DistrictRepository(string connectionString)
        {
            _context = new MongoContext(connectionString);
        }

        public async Task DeleteEntityAsync(Guid id)
        {
            var filter = Builders<District>.Filter.Eq("_id", id);
            await _context.Districts.DeleteOneAsync(filter);
        }

        public async Task<IEnumerable<District>> FindEntitiesAsync(List<SearchParameter> searchParameters)
        {

            FilterDefinition<District> filter = Builders<District>.Filter.Ne("isDeleted", true);
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
                            filter = Builders<District>.Filter.Eq(c => c.Id, Guid.Parse(parameter.Value));
                        }
                        else
                        {
                            filter = Builders<District>.Filter.Eq(c => c.Id, Guid.Parse(parameter.Value)) & filter;
                        }
                        break;

                  
                }

            }
            if (filter == null) throw new ArgumentException("Invalid search parameters specified");
            List<District> result = await _context.Districts.Find((FilterDefinition<District>)filter).ToListAsync();
            return result;
        }

        public async Task<District> LoadEntityAsync(Guid id)
        {
            FilterDefinition<District> filter = Builders<District>.Filter.Ne("isDeleted", true);

            filter = Builders<District>.Filter.Eq("_id", id) & filter;
            if (filter == null)
            {
                throw new ArgumentException("Invalid application search parameters specified");

            }
            var result = (await _context.Districts.FindAsync(filter)).FirstOrDefault();
            return result;
        }

        public async Task<District> SaveEntityAsync(District aggregate)
        {
            FilterDefinition<District> filter = Builders<District>.Filter.Eq("_id", aggregate.Id);

            var result = await _context.Districts.FindAsync(filter);

            if (result.Any())
            {
                await _context.Districts.ReplaceOneAsync(filter, aggregate);
            }
            else
            {
                await _context.Districts.InsertOneAsync(aggregate);
            }
            return aggregate;
        }
    }
}
