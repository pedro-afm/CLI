export default {
  "tables": {
    "name": "order_items",
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
        "name": "icon_class",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "FaBasketShopping",
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "icon_label",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "Order Item",
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "order_id",
        "type": "object",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "object",
        "extra": "",
        "isObject": true,
        "relationType": "n:1",
        "foreignEntity": "",
        "foreignKey": "order_id"
      },
      {
        "name": "order_item_id",
        "type": "int",
        "primaryKey": true,
        "nullable": true,
        "defaultValue": null,
        "columnType": "int",
        "extra": "auto_increment"
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
        "type": "object",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "object",
        "extra": "",
        "isObject": true,
        "relationType": "n:1",
        "foreignEntity": "",
        "foreignKey": "product_id"
      },
      {
        "name": "quantity",
        "type": "int",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "int",
        "extra": ""
      }
    ]
  }
};