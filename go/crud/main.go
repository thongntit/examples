package main

import (
	"CRUD/db"
	"CRUD/router"
)

func main() {
	r := router.New()

	d := db.New()
	db.AutoMigrate(d)

	r.Logger.Fatal(r.Start(":8585"))
}
