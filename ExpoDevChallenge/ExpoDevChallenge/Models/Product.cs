namespace ExpoDevChallenge.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Product
    {
        public int Id { get; set; }

        public int? Price { get; set; }

        public int? SupplierId { get; set; }

        public int? ProductCategoryId { get; set; }

        public virtual ProductCategory ProductCategory { get; set; }

        public virtual Supplier Supplier { get; set; }
    }
}
