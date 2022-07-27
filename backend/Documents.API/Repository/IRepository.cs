using Documents.API.Common;

namespace Documents.API.Repository
{
    public interface IRepository<T, TId> where T : class
    {
        Task<IEnumerable<T>> FindEntitiesAsync(List<SearchParameter> searchParameters);

        Task<T> LoadEntityAsync(TId id);

        Task<T> SaveEntityAsync(T entity);

        Task DeleteEntityAsync(TId id);
    }
}
