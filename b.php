<?php
session_start();

class ConexionSQL {
    public $conn;

    public function __construct() {
        // ====== DATOS DE CONEXIÓN: CAMBIAR SOLO ESTAS 4 LÍNEAS AL SUBIR AL HOSTING ======
        // En XAMPP (tu compu) déjalos así. En InfinityFree pon los que te da tu panel (MySQL Databases).
         $servername = "sql311.infinityfree.com";   // "MySQL Host Name" del panel
        $database   = "if0_43176402_jkl";          // nombre completo de la base, con el prefijo
        $user       = "if0_43176402";              // "MySQL User Name" del panel
        $pass       = "tYrDW5rvLnd3Gu";                  // en InfinityFree: la contraseña de tu cuenta
        // =================================================================================

        $this->conn = new mysqli($servername, $user, $pass, $database);

        if ($this->conn->connect_error) {
            die("Conexión fallida: " . $this->conn->connect_error);
        }

        $this->conn->set_charset("utf8mb4");
    }

    // Buscar si el usuario ya existe
    public function obtenerUsuario($mail) {
        $stmt = $this->conn->prepare("SELECT * FROM usuarios WHERE correo = ?");
        if (!$stmt) return false;

        $stmt->bind_param("s", $mail);
        $stmt->execute();
        $resultado = $stmt->get_result();
        $usuario = $resultado->fetch_assoc();
        $stmt->close();

        return $usuario;
    }

    // Registrar nuevo usuario
    public function registrarUsuario($mail, $passwor) {
        $passEncriptada = password_hash($passwor, PASSWORD_DEFAULT);

        $stmt = $this->conn->prepare("INSERT INTO usuarios (correo, contraseña) VALUES (?, ?)");
        if (!$stmt) {
            return "Error al preparar la consulta: " . $this->conn->error;
        }

        $stmt->bind_param("ss", $mail, $passEncriptada);

        if ($stmt->execute()) {
            $stmt->close();
            return true;
        } else {
            $error = $stmt->error;
            $stmt->close();
            return "Error al guardar los datos: " . $error;
        }
    }
}

// Procesar el formulario POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mail = trim($_POST['mail'] ?? '');
    $passwor = trim($_POST['passwor'] ?? '');

    if (!empty($mail) && !empty($passwor)) {
        $conexion = new ConexionSQL();
        $usuarioExistente = $conexion->obtenerUsuario($mail);

        if ($usuarioExistente) {
            // El usuario ya existe -> Intentar Iniciar Sesión
            if (password_verify($passwor, $usuarioExistente['contraseña'])) {
                $_SESSION['usuario'] = $mail;
                header("Location: index.html?status=success");
                exit();
            } else {
                echo "<h2 style='color: red; font-family: sans-serif;'>Contraseña incorrecta.</h2>";
                echo "<a href='index.html'>Volver al inicio</a>";
            }
        } else {
            // El usuario no existe -> Registrarlo
            $resultado = $conexion->registrarUsuario($mail, $passwor);

            if ($resultado === true) {
                $_SESSION['usuario'] = $mail;
                header("Location: index.html?status=success");
                exit();
            } else {
                echo "<h2 style='color: red; font-family: sans-serif;'>Error en el registro:</h2><p style='font-family: sans-serif;'>$resultado</p>";
                echo "<a href='index.html'>Volver al inicio</a>";
            }
        }
    } else {
        echo "<h2 style='font-family: sans-serif;'>Por favor, completa todos los campos requeridos.</h2>";
        echo "<a href='index.html'>Volver al inicio</a>";
    }
}
?>