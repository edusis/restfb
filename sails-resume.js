
Url Github:
https://github.com/rcronald/varitech/

Mongo Interfaz: RoboMongo

Install sails
sudo npm install sails -g

How to know if we have sails
sails -v

Create new sails project
sails new <project>

Generate an API that includes: Model, Controller and API rest
sails generate api <api name>

Generate a Model
sails generate model <model name>

Generate a Controller
sails generate controller <controller name>

Start sails project
sails lift

Start sails project to navigato on data
sails console

Search model data
<ModelName>.find().exec(console.log)
Mascotas.find().populate("dueno").exec(console.log)

Create model data
Duenos.create({nombre : "Ronald", apellido : "Requena"}).exec(console.log)
Duenos.create({nombre : "Ronald", apellido : "Requena", sexo : "hombre", estadoCivil : 1, educacion : "Ingeniero Informatico 1234567"}).exec(console.log)
Duenos.create({nombre : "Juan", apellido : "Pulido", sexo : "hombre", estadoCivil : 1}).exec(console.log)

Update model data
Mascotas.update({idMascota : 2}, {dueno : 1}).exec(console.log)


Configuration for data model
1 Nothing -> Safe
2 Update model -> Alter
3 Delete and create model -> Drop





Pasarela de Pago
<script src="https://integ-pago.culqi.com/js/v1"></script>
<script>  
   Culqi.codigoComercio = 'pk_test_Vd6FhyEXkQDb0pke';
</script>  

<script>  
    Culqi.configurar({
        nombre: 'Regala Sonrisas', 
        orden: '', 
        moneda: 'PEN',
        descripcion: 'Donación de Sonrisas',
        monto: 1000
    });
</script>

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js">
</script>

 <a id="miBoton" href="#" >Pagar</a>
 <script>
    $('#miBoton').on('click', function (e) {
        // Abre el formulario con las opciones de Culqi.configurar
        console.log("abri")
        Culqi.abrir();
        e.preventDefault();
    });
</script> 

<script>  
// Recibimos Token del Culqi.js
function culqi() {

    if (Culqi.token) {
      // Imprimir Token
      console.log(Culqi.token.id);
    }

    else{
      // Hubo un problema...
      // Mostramos JSON de objeto error en consola
      console.log(Culqi.error);
      alert(Culqi.error.mensaje);
    }

};
</script>
