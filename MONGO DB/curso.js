//Create user

db.createUser({
    user: 'Josue',
    pwd: 'asd123',
    roles: ['readWrite', 'dbAdmin']
})

//Create Collections using Insert
//db.nombreDeLaColeccion.insert({})
db.users.insert ({
    nombre: 'Pepe',
    apellido: 'Perez'
})

//Insertar varios documentos a la coleccion
db.users.insert([
    {nombre: 'Pep', apellido:'Guardiola'},
    {nombre:'Harry', apellido:'Kane'},
    {nombre: 'Leo', apellido:'Messi'}
])

//Busquedas de los documentos
db.users.find({nombre: 'Pep'})

//Update en un documento
db.users.update({nombre:'Pepe'} , 
{apellido:'Pereira'})

db.users.update({_id: ObjectId("5edeebb8aa44f5d0b32a4be8")})

//Agregar un solo dato
db.users.update({_id: ObjectId("5edeebb8aa44f5d0b32a4be8")},
{
    $set: {nombre:'Juan'}
})

//$inc incrementa el valor de un campo numerico
//$rename cambia el nombre a un dato ejem $rename {nombre: 'Billy'}
//$unset disminuye la cantidad de un campo numerico


//Remover elementos
db.users.remove({nombre:'Pep'})
//Si hay dos documentos iguales 
db.users.remove({nombre:'Pep'},{justOne: true})


//Consultas mas complejas

//Devuelve todos los documentos que tengan Pep o Juan
db.users.find({$or: [{nombre: 'Pep'},{nombre:'Juan'}]})

//$gt mayor que 
//$lt menor que
//Se puede incluir al mismo tiempo


//Ordenar los objetos de forma ascendete o descendente 
db.users.find().sort({apellido: 1})//ascendente
db.users.find().sort({apellido: -1})//descendente

//Contar cuantos datos se tienen
db.users.find().count()


