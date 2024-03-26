export default {
  "tables": {
    "name": "categories",
    "database": "mysql",
    "columns": [
      {
        "name": "category_id",
        "type": "int",
        "primaryKey": true,
        "nullable": true,
        "defaultValue": null,
        "columnType": "int",
        "extra": "auto_increment"
      },
      {
        "name": "category_name",
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
        "defaultValue": "FaTags",
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "icon_label",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "Category",
        "columnType": "string",
        "extra": ""
      }
    ]
  }
};