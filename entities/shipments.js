export default {
  "tables": {
    "name": "shipments",
    "database": "mysql",
    "columns": [
      {
        "name": "icon_class",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "FaTruckFast",
        "columnType": "string",
        "extra": ""
      },
      {
        "name": "icon_label",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "Shipment",
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
        "name": "shipment_date",
        "type": "timestamp",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": "CURRENT_TIMESTAMP",
        "columnType": "timestamp",
        "extra": "DEFAULT_GENERATED"
      },
      {
        "name": "shipment_id",
        "type": "int",
        "primaryKey": true,
        "nullable": true,
        "defaultValue": null,
        "columnType": "int",
        "extra": "auto_increment"
      },
      {
        "name": "tracking_number",
        "type": "string",
        "primaryKey": false,
        "nullable": true,
        "defaultValue": null,
        "columnType": "string",
        "extra": ""
      }
    ]
  }
};