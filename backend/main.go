package main

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/sebas5158r/prueba-rest-api-gorm/db"
	"github.com/sebas5158r/prueba-rest-api-gorm/models"
	"github.com/sebas5158r/prueba-rest-api-gorm/routes"
)

func main() {

	db.DBConnection()

	db.DB.AutoMigrate(models.Task{})
	db.DB.AutoMigrate(models.User{})

	router := mux.NewRouter()

	router.HandleFunc("/", routes.HomeHandler)
	router.HandleFunc("/users", routes.GetUsersHandler).Methods("GET")
	router.HandleFunc("/user/{id}", routes.GetUserHandler).Methods("GET")
	router.HandleFunc("/users", routes.PostUserHandler).Methods("POST")
	router.HandleFunc("/user/{id}", routes.DeleteUserHandler).Methods("DELETE")
	router.HandleFunc("/tasks", routes.GetTasksHandler).Methods("GET")
	router.HandleFunc("/task/{id}", routes.GetTaskHandler).Methods("GET")
	router.HandleFunc("/tasks", routes.PostTaskHandler).Methods("POST")
	router.HandleFunc("/task/{id}", routes.DeleteTaskHandler).Methods("DELETE")

	http.ListenAndServe(":8181", router)
}
