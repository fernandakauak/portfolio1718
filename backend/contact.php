<?php
/**
 * Created by PhpStorm.
 * User: javier
 * Date: 7/19/17
 * Time: 9:28 PM
 */
if(isset($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = "De: ".$name." Teléfono: ".$number." Mensaje: ".$_POST['message'];
    return mail('fernanda.kauak@gmail.com', 'Contacto desde el sitio web', $message, $from);
}