﻿using System.Runtime.Serialization;

namespace Documents.API.Common
{
    [DataContract]
    public class SearchParameter
    {
        [DataMember(Name = "name")]
        public string Name { get; set; }

        [DataMember(Name = "value")]
        public string Value { get; set; }
    }
}
