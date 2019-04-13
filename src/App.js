import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//Aca estoy importando mi navBar
//import Navigation from './components/navigation'; 

/*
ESTO DE ACA EL PUTO LO BORRA POR ESO DEJO EL EJEMPLO DE NAVIGATION PARA ENTENDER
COMO GARCHA SE HACE LO DE LAS PROPIEDADES Y ESO

//Este es un componente, se llama App y extiende de Component que lo importe desde react
class App extends Component {
  render() {
    //Asi hago que me muestre el navBar que estoy importando arriba, es como qu cree una 
    //nueva etiqueta, esa propiedad titulo que pongo ahi es la que cree en el navigation.js
    //asi se la usaria
    return (
      <div className="App">


        <Navigation titulo="Algo"/>
        <img src={logo} className="App-logo" alt="logo" />

                  
      </div>
    );
  }
}
*/

import {tasks} from './tasks.json';
import TaskForm from './components/TaskForm.js'

class App extends Component {
  constructor(){

    super();
    this.state={

      tasks

    }

    this.handleAddTask = this.handleAddTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }


  removeTask(index){

    if(window.confirm('Estas Seguro de borrar la Tarea?')){
    this.setState({

      tasks: this.state.tasks.filter((e,i) => {

        return i !== index


      })

    });


  }
}


  handleAddTask(task){

    this.setState({

      tasks:[...this.state.tasks, task]

  })
  }

  render() {


    const tareas = this.state.tasks.map((task,i) => {

      return(

        <div className="col-md-4" key="{i}">

        <div className="card mt-4">
          <div className="card-header">

            <h3>{task.titulo}</h3>
            <span className="badge bage-pill badge-danger ml-2">{task.prioridad}</span>

          </div>

          <div className="card-body">

            <p>{task.descripcion}</p>
            <p><mark>{task.responsable}</mark></p>

          </div>

          <div className="card-footer">
            
            <button className="btn btn-danger" onClick={this.removeTask.bind(this,i)}>
            
            Borrar

            </button>
          
          </div>  

        </div>

        </div>

        )

    });
   
    console.log(tareas);

    return (
      <div className="App">


        <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
          
          Tasks
          <span className="badge badge-pill badge-light ml-2">

            {this.state.tasks.length}

          </span>

        </a>
        </nav>

        <div className="container">
        
        <div className="row mt-4">
        <div className="col-md-3">
        
          <img src={logo} className="App-logo" alt="logo" />
          <TaskForm onAddTask={this.handleAddTask} />

        </div>

        <div className="col-md-9">
          <div className="row">

          {
            //ACA MUESTRO LAS CARDS QUE CREE MAS ARRIBA Y QUE TIENEN EL TITULO DE CADA TAREA
            tareas

          }

          </div>
        
        </div>


        </div>

        </div>



                  
      </div>
    );
}
}
export default App;
