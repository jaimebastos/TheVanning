
| HTTP Method 	| URI path      	        | Description                                    	| JSON 	|
|-------------	|---------------	        |------------------------------------------------	|---------	|
| GET         	| `/`                   	| Portada de la web        	                            | |
| GET         	| `/vans` 	            | Muestra las furgonetas	| |
| GET         	| `/vans/details/:id` 	| Muestra los detalles de las furgonetas
| GET        	| `/vans/create` 	| Le permite al admin acceder a la pantalla de crear las furgonetas	???????| |
| POST         	| `/vans/create` 	| Enviar furgotetas a BBDD	| |
| GET         	| `/vans/edit/:id`	    | Admin edita furgocampers ???????'|  |
| POST         	| `/vans/edit/:id` 	    | Envía los cambios a la BBDD|  |
| GET         	| `/vans/delete/:id`	    | Borrar furgoneta por diferentes causas |  |
| GET         	| `/budget` 	    | Presupuesto a tiempo real |  |
| POST         	| `/budget` 	    | Envia el presupuesto a la base de datos|  |
| GET         	| `/facilities` 	    | Muestra todas las posibles instalaciones que pueden hacerse|  |
| GET         	| `/facilities/:id` 	    | Detalles de la instalacion en concreto |  |
| GET         	| `/facilities/create` 	    | Crear instalacion |  |
| POST        	| `/facilities/create` 	    | Enviar las instalaciones a la BBDD|  |
| GET         	| `/facilities/edit/:id` 	    | Editar las instalaciones|  |
| POST         	| `/facilities/edit/:id` 	    | Enviar las instalaciones a la BBDD |  |
| GET         	| `/facilities/delete/:id` 	    | Borrar instalacion |  |
| GET         	| `/vans/payment`	    | Comprar la furgoneta a traves de una pasarela de pago?????? | |
| GET         	| `/signup` 	    | Muestra el formulario para registrarse|  |
| POST        	| `/signup` 	    | Envía los datos del nuevo usuario a la BBDD|  |
| GET         	| `/login` 	    | Muestra el formulario para registrarse|  |
| POST        	| `/login` 	    | Envía los datos del usuario a la BBDD
| GET         	| `/logout`	    | Cierra la sesión del usuario


## Install

- Run `npm i` on the root directory

## Run

- Create a `.env` file on the root directory to link the MongoDB URI (`MONGODB_URI`) and port (`PORT`)
- Run `npm run dev` command on the root directory
