﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyTech.Domain.Entities
{
    public class Provider
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public Provider(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
