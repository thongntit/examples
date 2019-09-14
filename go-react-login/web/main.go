package main

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/micro/go-grpc/client"
	"github.com/micro/go-log"
	userSrv "github.com/trthong95/login/service/users/proto"
)

func serveLogin(c *gin.Context) {
	c.HTML(http.StatusOK, "login.html", gin.H{})
	return
}

func serveRegister(c *gin.Context) {
	c.HTML(http.StatusOK, "register.html", gin.H{})
	return
}

func validate(c *gin.Context) {
	var postData struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	err := c.BindJSON(&postData)
	if err != nil {
		log.Fatal(err)
		return
	}

	client := userSrv.NewUsersService("login.srv.users", client.DefaultClient)
	rsp, err := client.ValidateUser(context.Background(), &userSrv.ValidReq{
		UserEmail:    postData.Email,
		UserPassword: postData.Password,
	})

	var jrsp struct {
		Rsp string `json:"rsp"`
	}
	if rsp.Status {
		jrsp.Rsp = "Login Success"
	} else {
		jrsp.Rsp = "Login Failed"
	}
	c.JSON(http.StatusOK, jrsp)
	return
}

func register(c *gin.Context) {
	var postData struct {
		Email    string `json:"email"`
		Username string `json:"username"`
		Password string `json:"password"`
	}
	err := c.BindJSON(&postData)
	if err != nil {
		log.Fatal(err)
	}

	client := userSrv.NewUsersService("login.srv.users", client.DefaultClient)
	rsp, err := client.CreateUser(context.Background(), &userSrv.CreUserReq{
		UserEmail:    postData.Email,
		UserName:     postData.Username,
		UserPassword: postData.Password,
	})
	var jrsp struct {
		Rsp string `json:"rsp"`
	}
	if rsp != nil {
		jrsp.Rsp = "Register Success"
	} else {
		jrsp.Rsp = "Register Failed"
	}
	c.JSON(http.StatusOK, jrsp)
	return
}

func main() {

	router := gin.Default()
	router.StaticFile("/static/main.css", "./html/static/main.css")
	router.LoadHTMLGlob("./html/*.html")
	router.GET("/", serveLogin)
	router.GET("/register", serveRegister)
	router.POST("/register", register)
	router.POST("/validate", validate)
	router.Run()
}
