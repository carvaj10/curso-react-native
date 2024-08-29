import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../components/icons";
import { Screen } from "../components/Screen";

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <Pressable>
            <HomeIcon />
          </Pressable>
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>

        <Text className="text-white">
          Nombre del Proyecto: Game Metacritic Dashboard Descripción General: El
          proyecto tiene como objetivo desarrollar una aplicación que recopile y
          muestre puntuaciones de Metacritic para diferentes juegos. La
          aplicación permitirá a los usuarios ver las calificaciones de juegos y
          detalles adicionales, facilitando la toma de decisiones sobre qué
          juegos jugar. Características Clave: Recopilación de Datos: Fuentes:
          Utiliza la API de Metacritic (si está disponible) o extrae datos de
          sitios web de críticas de juegos. Frecuencia de Actualización:
          Actualiza los datos en intervalos regulares o cuando el usuario lo
          solicite. Visualización de Datos: Interfaz de Usuario (UI): Muestra
          una lista de juegos con sus puntuaciones y detalles. Detalles del
          Juego: Incluye información como el título del juego, la puntuación de
          Metacritic, la plataforma, y una breve reseña. Búsqueda y Filtros:
          Búsqueda: Permite a los usuarios buscar juegos por título. Filtros:
          Ofrece opciones para filtrar los juegos por plataforma, género, o
          calificación. Calificaciones y Reseñas: Puntuaciones: Muestra las
          puntuaciones de Metacritic (crítica y usuario). Reseñas: Proporciona
          un resumen de las reseñas y comentarios de los usuarios.
          Interactividad: Favoritos: Permite a los usuarios marcar juegos como
          favoritos para acceso rápido. Comparaciones: Facilita la comparación
          entre diferentes juegos. Tecnologías y Herramientas: Frontend: React
          Native para una aplicación móvil o React.js para una aplicación web.
          Backend: Node.js o cualquier otro framework que permita la recolección
          y gestión de datos. API/ Web Scraping: Herramientas para obtener datos
          de Metacritic o sitios similares. Base de Datos: Para almacenar datos
          de juegos, calificaciones, y preferencias de los usuarios.
          Implementación: Configuración del Entorno: Configura el proyecto con
          npx expo init para una aplicación móvil con Expo o crea una aplicación
          web con Create React App. Implementación del Frontend: Crea
          componentes para la lista de juegos, detalles del juego y búsqueda.
          Usa react-navigation para gestionar la navegación entre pantallas (si
          es una app móvil). Implementación del Backend: Configura un servidor
          que maneje las solicitudes para obtener datos de Metacritic.
          Implementa funciones para almacenar y actualizar la información de los
          juegos. Integración y Pruebas: Prueba la aplicación para asegurar que
          los datos se muestran correctamente y que la interfaz de usuario es
          intuitiva. Realiza pruebas de usabilidad para verificar la experiencia
          del usuario.
        </Text>
      </ScrollView>
    </Screen>
  );
}
