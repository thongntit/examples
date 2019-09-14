package main

import (
	"context"
	"database/sql"
	"errors"
	"strings"

	_ "github.com/go-sql-driver/mysql"
	"github.com/k0kubun/pp"

	proto "github.com/trthong95/login/service/users/proto"
)

type UserHandler struct{}

func dbConn() (db *sql.DB) {
	db, err := sql.Open("mysql", "trthong95:thong46@/usersrv")
	if err != nil {
		panic(err.Error())
	}
	return db
}

func (uh *UserHandler) GetUser(ctx context.Context, req *proto.GetUserReq, resp *proto.GetUserResp) error {
	db := dbConn()
	defer db.Close()
	result, err := db.Query("SELECT id,email,name FROM user WHERE id=?", req.UserId)
	if err != nil {
		return err
	}
	for result.Next() {
		err = result.Scan(&resp.UserId, &resp.UserEmail, &resp.UserName)
		if err != nil {
			return err
		}
		return nil
	}
	return errors.New("User not found")
}

func userExisted(email string) (result bool, err error) {
	db := dbConn()
	defer db.Close()
	res, err := db.Query("select * from user where email=?", email)
	if err != nil {
		return false, err
	}
	result = res.Next()
	return result, nil
}
func getUserID(email string) (ID int, err error) {
	db := dbConn()
	defer db.Close()
	res, err := db.Query("select id from user where email=?", email)
	if err != nil {
		return -1, err
	}
	if res.Next() {
		err = res.Scan(&ID)
		if err != nil {
			return -1, err
		}

	}
	return ID, nil
}

func (uh *UserHandler) CreateUser(ctx context.Context, req *proto.CreUserReq, resp *proto.CreUserResp) error {
	db := dbConn()
	defer db.Close()

	existed, err := userExisted(req.UserEmail)
	if err != nil {
		return err
	}
	if existed {
		return errors.New("User Existed")
	} else {
		_, err := db.Query("INSERT INTO user(email,name,password) value (?,?,?)", req.UserEmail, req.UserName, req.UserPassword)
		Id, _ := getUserID(req.UserEmail)
		resp.UserId = int32(Id)
		return err
	}

	return nil
}

func (uh *UserHandler) GetAllUser(ctx context.Context, req *proto.GetAllUserReq, resp *proto.GetAllUserResp) error {
	db := dbConn()
	defer db.Close()
	user, err := db.Query("Select * from user")
	if err != nil {
		return err
	}
	for user.Next() {
		var u proto.GetUserResp
		var password string
		user.Scan(&u.UserId, &u.UserEmail, &u.UserName, &password)
		resp.User = append(resp.User, &u)
	}
	return nil
}

func (uh *UserHandler) ValidateUser(ctx context.Context, req *proto.ValidReq, resp *proto.ValidRsp) error {
	db := dbConn()
	defer db.Close()
	queryrsp, err := db.Query("SELECT password FROM user WHERE email=?", req.UserEmail)
	if err != nil {
		pp.Println(err)
		return err
	}
	for queryrsp.Next() {
		var password string
		queryrsp.Scan(&password)
		if strings.Compare(password, req.UserPassword) == 0 {
			resp.Status = true
			return nil
		}
	}
	return nil
}
