package db

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

// Variables definidas de manera GLOBAL
var DSN = "host=localhost user=sebas5158r password=mysecretpassword dbname=gorm port=5433"
var DB *gorm.DB

func DBConnection() {
	var error error
	DB, error = gorm.Open(postgres.Open(DSN), &gorm.Config{})

	if error != nil {
		log.Fatal(error)
	} else {
		log.Println("Db Connected")
	}
}
