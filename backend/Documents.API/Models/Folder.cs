namespace Documents.API.Models
{
    public class Folder
    {
        public Guid Id { get; set; }

        public Guid EntityId { get; set; }

        public string? DepartmentId { get; set; }
        public string? Name { get; set; }
        public string? CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime ModifiedAt { get; set; }

        public string? ModifiedBy { get; set; }

        public string? Type { get; set; }

        public string? Size { get; set; }

    }


   


}
