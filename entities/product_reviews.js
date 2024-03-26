export default {
  "tables": {
    "name": "product_reviews",
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
        "defaultValue": "FaFaceGrinStars",
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "icon_label",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "Product Review",
        "columnType": "string",
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
        "name": "rating",
        "type": "int",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "int",
        "extra": ""
      },
      {
        "name": "review_date",
        "type": "timestamp",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "CURRENT_TIMESTAMP",
        "columnType": "timestamp",
        "extra": "DEFAULT_GENERATED"
      },
      {
        "name": "review_id",
        "type": "int",
        "primaryKey": true,
        "nullable": true,
        "defaultValue": null,
        "columnType": "int",
        "extra": "auto_increment"
      },
      {
        "name": "review_text",
        "type": "text",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "text",
        "extra": ""
      }
    ]
  }
};