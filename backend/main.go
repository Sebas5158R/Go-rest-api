package main

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"github.com/sebas5158r/prueba-rest-api-gorm/db"
	"github.com/sebas5158r/prueba-rest-api-gorm/models"
	"github.com/sebas5158r/prueba-rest-api-gorm/routes"
)

func main() {

	// Conexión a la base de datos
	db.DBConnection()

	// Migración de las tablas
	db.DB.AutoMigrate(models.Task{})
	db.DB.AutoMigrate(models.User{})

	// Crear un nuevo router mux
	router := mux.NewRouter()

	// Configuración CORS
	c := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:5173"},        // Origen permitido (El frontend)
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"}, // Métodos permitidos
		AllowedHeaders: []string{"Content-Type", "Accept"},       // Encabezados permitidos
	})

	// Definir las rutas
	router.HandleFunc("/", routes.HomeHandler)
	router.HandleFunc("/api/users", routes.GetUsersHandler).Methods("GET")
	router.HandleFunc("/api/user/{id}", routes.GetUserHandler).Methods("GET")
	router.HandleFunc("/api/users", routes.PostUserHandler).Methods("POST")
	router.HandleFunc("/api/user/{id}", routes.DeleteUserHandler).Methods("DELETE")
	router.HandleFunc("/api/tasks", routes.GetTasksHandler).Methods("GET")
	router.HandleFunc("/api/task/{id}", routes.GetTaskHandler).Methods("GET")
	router.HandleFunc("/api/tasks", routes.PostTaskHandler).Methods("POST")
	router.HandleFunc("/api/task/{id}", routes.DeleteTaskHandler).Methods("DELETE")

	// Aplicar CORS al router
	handlerWithCors := c.Handler(router)

	// Iniciar el servidor
	http.ListenAndServe(":8181", handlerWithCors)
}
