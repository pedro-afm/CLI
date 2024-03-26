export default {
  "tables": {
    "name": "customers",
    "database": "mysql",
    "columns": [
      {
        "name": "customer_id",
        "type": "int",
        "primaryKey": true,
        "nullable": true,
        "defaultValue": null,
        "columnType": "int",
        "extra": "auto_increment"
      },
      {
        "name": "customer_name",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "email",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "icon_class",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "FaUsers",
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "icon_label",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "Customer",
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "orders",
        "type": "object",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "object",
        "extra": "MUL",
        "isObject": true,
        "relation": "",
        "foreignEntity": "orders",
        "foreignKey": "customer_id"
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
        "foreignKey": "customer_id"
      }
    ]
  }
};