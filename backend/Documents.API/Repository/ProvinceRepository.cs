using Documents.API.Common;
using Documents.API.Data;
using Documents.API.Models;
using MongoDB.Driver;

namespace Documents.API.Repository
{
    public interface IProvinceRepository : IRepository<Province, Guid>
    {
    }
    public class ProvinceRepository: IProvinceRepository
    {
        private MongoContext _context;
        public ProvinceRepository(MongoContext context)
        {
            _context = context;
        }

        public ProvinceRepository(string connectionString)
        {
            _context = new MongoContext(connectionString);
        }

        public async Task DeleteEntityAsync(Guid id)
        {
            var filter = Builders<Province>.Filter.Eq("_id", id);
            await _context.Provinces.DeleteOneAsync(filter);
        }

        public async Task<IEnumerable<Province>> FindEntitiesAsync(List<SearchParameter> searchParameters)
        {

            FilterDefinition<Province> filter = Builders<Province>.Filter.Ne("isDeleted", true);
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
                            filter = Builders<Province>.Filter.Eq(c => c.Id, Guid.Parse(parameter.Value));
                        }
                        else
                        {
                            filter = Builders<Province>.Filter.Eq(c => c.Id, Guid.Parse(parameter.Value)) & filter;
                        }
                        break;


                }

            }
            if (filter == null) throw new ArgumentException("Invalid search parameters specified");
            List<Province> result = await _context.Provinces.Find((FilterDefinition<Province>)filter).ToListAsync();
            return result;
        }

        public async Task<Province> LoadEntityAsync(Guid id)
        {
            FilterDefinition<Province> filter = Builders<Province>.Filter.Ne("isDeleted", true);

            filter = Builders<Province>.Filter.Eq("_id", id) & filter;
            if (filter == null)
            {
                throw new ArgumentException("Invalid application search parameters specified");

            }
            var result = (await _context.Provinces.FindAsync(filter)).FirstOrDefault();
            return result;
        }

        public async Task<Province> SaveEntityAsync(Province aggregate)
        {
            FilterDefinition<Province> filter = Builders<Province>.Filter.Eq("_id", aggregate.Id);

            var result = await _context.Provinces.FindAsync(filter);

            if (result.Any())
            {
                await _context.Provinces.ReplaceOneAsync(filter, aggregate);
            }
            else
            {
                await _context.Provinces.InsertOneAsync(aggregate);
            }
            return aggregate;
        }
    }
}
