const columns = [];

function generateEntityRelation(column, table) {
  const object = {
    //file: `${column.COLUMN_NAME}.js`,
    name: `${table}`,
    type: "object",
    primaryKey: false,
    nullable: column.IS_NULLABLE ? true : "",
    defaultValue: column.COLUMN_DEFAULT,
    columnType: "object",
    extra: "MUL",
    isObject: true,
    relation: "",
    foreignEntity: `${table}`,
    foreignKey: `${column.COLUMN_NAME}`,
  };

  columns.push(object);
  //console.log(columns, table);
  return columns;
}

export { generateEntityRelation };
