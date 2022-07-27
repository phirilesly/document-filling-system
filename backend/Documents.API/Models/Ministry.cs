﻿namespace Documents.API.Models
{
    public class Ministry
    {
        public Guid Id { get; set; }

        public string? Name { get; set; }
        public string? Description { get; set; }

        public string? Location { get; set; }

        public string? CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }
    }
}
