package api

import (
	"fmt"

	"github.com/labstack/echo/v4"
)

func GetCustomer(c echo.Context) (err error) {
	fmt.Println("GetCustomer")
	return nil
}

func GetCustomers(c echo.Context) (err error) {
	fmt.Println("GetCustomers")
	return nil
}

func CreateCustomers(c echo.Context) (err error) {
	fmt.Println("CreateCustomers")
	return nil
}
