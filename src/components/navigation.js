
import React, {Component} from 'react';

class Navigation extends Component{
//Este metodo de los componentes me retornan el hmtl, en este caso el nav
render() {
	/*Asi hago para poder pasarle atributos a la etiqueta creada en APP.js.
    Cuando pongo llaves significa que puedo meter codigo JS entre las etiquetas
    HTML. props es una propiedad JS de los objetos. ESTO EL TROLO LO BORRO POR
    ESO LO DEJO NOMAS PERO NO LO USA MAS */
	return (

		<nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
        	
        	{this.props.titulo}

        </a>
        </nav>

	)																																					

}


}

//Con esto exporto mi componente

export default Navigation;








