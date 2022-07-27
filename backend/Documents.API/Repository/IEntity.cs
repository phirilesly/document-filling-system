namespace Documents.API.Repository
{
    public interface IEntity
    {
        Guid Id { get; set; }

        bool IsDeleted { get; set; }
    }
}
