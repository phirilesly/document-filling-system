namespace Documents.API.Models
{
    public class FileData
    {
        public Guid Id { get; set; }
        public Guid EntityId { get; set; }

        public Guid FolderId { get; set; }

        public string? CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }

        public string? Name { get; set; }

        public string? Type { get; set; }

        public string? Size { get; set; }

        public IFormFile File { get; set; }

    }
}


