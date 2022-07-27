using Documents.API.Common;
using Documents.API.Data;
using Documents.API.Models;
using MongoDB.Driver;

namespace Documents.API.Repository
{
    public interface IMinistryRepository : IRepository<Ministry, Guid>
    {
    }
    public class MinistryRepository: IMinistryRepository
    {
        private MongoContext _context;
        public MinistryRepository(MongoContext context)
        {
            _context = context;
        }

        public MinistryRepository(string connectionString)
        {
            _context = new MongoContext(connectionString);
        }

        public async Task DeleteEntityAsync(Guid id)
        {
            var filter = Builders<Ministry>.Filter.Eq("_id", id);
            await _context.Ministries.DeleteOneAsync(filter);
        }

        public async Task<IEnumerable<Ministry>> FindEntitiesAsync(List<SearchParameter> searchParameters)
        {

            FilterDefinition<Ministry> filter = Builders<Ministry>.Filter.Ne("isDeleted", true);
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
                            filter = Builders<Ministry>.Filter.Eq(c => c.Id, Guid.Parse(parameter.Value));
                        }
                        else
                        {
                            filter = Builders<Ministry>.Filter.Eq(c => c.Id, Guid.Parse(parameter.Value)) & filter;
                        }
                        break;


                }

            }
            if (filter == null) throw new ArgumentException("Invalid search parameters specified");
            List<Ministry> result = await _context.Ministries.Find((FilterDefinition<Ministry>)filter).ToListAsync();
            return result;
        }

        public async Task<Ministry> LoadEntityAsync(Guid id)
        {
            FilterDefinition<Ministry> filter = Builders<Ministry>.Filter.Ne("isDeleted", true);

            filter = Builders<Ministry>.Filter.Eq("_id", id) & filter;
            if (filter == null)
            {
                throw new ArgumentException("Invalid application search parameters specified");

            }
            var result = (await _context.Ministries.FindAsync(filter)).FirstOrDefault();
            return result;
        }

        public async Task<Ministry> SaveEntityAsync(Ministry aggregate)
        {
            FilterDefinition<Ministry> filter = Builders<Ministry>.Filter.Eq("_id", aggregate.Id);

            var result = await _context.Ministries.FindAsync(filter);

            if (result.Any())
            {
                await _context.Ministries.ReplaceOneAsync(filter, aggregate);
            }
            else
            {
                await _context.Ministries.InsertOneAsync(aggregate);
            }
            return aggregate;
        }
    }
}
