<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        @page {
            margin: 100px 25px;
        }
        header {
            position: fixed;
            top: -60px;
            left: 0px;
            right: 0px;
            height: 50px;
            background-color: #f8f8f8;
            text-align: center;
            line-height: 35px;
        }
        footer {
            position: fixed;
            bottom: -60px;
            left: 0px;
            right: 0px;
            height: 50px;
            background-color: #f8f8f8;
            text-align: center;
            line-height: 35px;
        }
        .content {
            margin-top: 60px;
        }   
        table {
            min-width: 100%;
            border-collapse: collapse;
        }

        thead {
            background-color: #6B7289;
            color: #FFFFFF;
            text-transform: uppercase;
        }

        td {
            border: 1px solid;
            border-color: #6B7289;
        }

        img {
            width: 64px;
            height: 64px;
        }
        h1 {
            color: #3888E8;
        }
    </style>

</head>
<header>
        Encabezado del Documento
    </header>
    <footer>
        Pie de Página del Documento
    </footer>
<body>
    <div>
        <img src="img/product_defecto.png" />
        <h1>REPORTE DE STOCK DE PRODUCTOS</h1>
    </div>
    <table>
        <thead>
            <tr>
                <th>Productos</th>
                <th>Cantidad</th>
                <th>Categoría</th>
            </tr>
        </thead>
        <tbody>
            @foreach ( $products as $product)
            <tr>
                <td>{{$product->name}}</td>
                <td>{{$product->quantity}}</td>
                <td>{{$product->category->name}}</td>
            </tr>
            @endforeach

        </tbody>
    </table>

    <br>
    <h1>PRUEBA</h1>
    <table>
        <thead>
            <tr>
                <th>Productos</th>
                <th>Cantidad</th>
                <th>Categoría</th>
            </tr>
        </thead>
        <tbody>
            @foreach ( $products as $product)
            <tr>
                <td>{{$product->name}}</td>
                <td>{{$product->quantity}}</td>
                <td>{{$product->category->name}}</td>
            </tr>
            @endforeach

        </tbody>
    </table>
</body>

</html>