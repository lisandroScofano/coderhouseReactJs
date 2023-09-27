# E-Commerce Coderhouse - ReactJs

Proyecto desarrollado con ReactJS, Bootstrap y Firebase.

Es una tienda online de venta de vinos, donde en su pagina principal se encuentra el catalogo completo de productos ofrecidos. A traves del menu superior se pueden filtrar los resultados por categoria (varietal de uva). En cualquier producto se puede hacer click para ver detalles del producto y en este detalle nos muestra la opcion de agregar ese producto al carrito de compras. Con los botones - y + se pueden cambiar las cantidades a agregar al carrito hasta el maximo de stock que cada producto tiene guardado en la base de datos y con un minimo de 1 item.

EL carro de compras nos muestra un detalle de los items seleccionados, su importe y el total de la compra. Desde el carrito podemos eliminar items del mismo y tambien vaciarlo por completo.

En caso de querer confirmar la compra, se ingresan los datos personales, validadndo que el email ingresado sea igual ala confirmacion de email y en tal caso, se genera una orden que se guarda en Firebase y se devuelve al usuario el ID de la orden.

# Librerias utilizadas:

- Vite
- Firebase: Para integrarar con la base de datos de Firebase. Leer y escribir.
- React-loader-spinner: Para agregar efecto de loader en ItemDetail.jsx
- React-router-dom: Para usar Router para el ruteo de los componentes
