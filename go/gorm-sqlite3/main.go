package main

import (
	"encoding/json"
	"fmt"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/sqlite"
)

// The model.
type User struct {
	gorm.Model
	Name string `json:"name"`
}

func main() {
	// Open a new connection to our sqlite database.
	db, err := gorm.Open("sqlite3", "database.db")

	if err != nil {
		panic("Failed to open the SQLite database.")
	}

	// Create the table from our struct.
	db.AutoMigrate(&User{})

	// Create a new user in our database.
	db.Create(&User{
		Name: "Craig",
	})

	// Find all of our users.
	var users []User
	db.Find(&users)

	// Output the users from the DB json encoded
	jsonEncoded, _ := json.Marshal(&users)
	fmt.Println(jsonEncoded)
}
