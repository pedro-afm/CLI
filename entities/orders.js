export default {
  "tables": {
    "name": "orders",
    "database": "mysql",
    "columns": [
      {
        "name": "customer_id",
        "type": "object",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "object",
        "extra": "",
        "isObject": true,
        "relationType": "n:1",
        "foreignEntity": "",
        "foreignKey": "customer_id"
      },
      {
        "name": "icon_class",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "FaCartShopping",
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "icon_label",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "Order",
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "order_date",
        "type": "timestamp",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "CURRENT_TIMESTAMP",
        "columnType": "timestamp",
        "extra": "DEFAULT_GENERATED"
      },
      {
        "name": "order_id",
        "type": "int",
        "primaryKey": true,
        "nullable": true,
        "defaultValue": null,
        "columnType": "int",
        "extra": "auto_increment"
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
        "foreignKey": "order_id"
      },
      {
        "name": "shipments",
        "type": "object",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "object",
        "extra": "MUL",
        "isObject": true,
        "relation": "",
        "foreignEntity": "shipments",
        "foreignKey": "order_id"
      }
    ]
  }
};