"use strict";

const Model = use("Model");

class Project extends Model {
  user() {
    return this.belongsTo("App/Models/User"); //projeto pertence a um usuario
  }

  tasks() {
    return this.hasMany("App/Models/Task"); // um projeto pode ter varias tarefas
  }
}

module.exports = Project;
