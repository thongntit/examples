package main

import (
	"log"

	"github.com/micro/go-micro"

	proto "github.com/trthong95/login/service/users/proto"
)

func main() {
	service := micro.NewService(
		micro.Name("login.srv.users"),
	)
	service.Init()
	proto.RegisterUsersHandler(service.Server(), new(UserHandler))

	if err := service.Run(); err != nil {
		log.Fatal(err)
	}
}
