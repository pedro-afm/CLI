export default {
  "tables": {
    "name": "products",
    "database": "mysql",
    "columns": [
      {
        "name": "currency_type",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "EUR",
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "description",
        "type": "text",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "text",
        "extra": ""
      },
      {
        "name": "icon_class",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "FaBoxOpen",
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "icon_label",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "Product",
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "price",
        "type": "decimal",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "decimal",
        "extra": ""
      },
      {
        "name": "product_id",
        "type": "int",
        "primaryKey": true,
        "nullable": true,
        "defaultValue": null,
        "columnType": "int",
        "extra": "auto_increment"
      },
      {
        "name": "product_name",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "order_items",
        "type": "object",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "object",
        "extra": "MUL",
        "isObject": true,
        "relation": "",
        "foreignEntity": "order_items",
        "foreignKey": "product_id"
      },
      {
        "name": "product_reviews",
        "type": "object",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "object",
        "extra": "MUL",
        "isObject": true,
        "relation": "",
        "foreignEntity": "product_reviews",
        "foreignKey": "product_id"
      }
    ]
  }
};