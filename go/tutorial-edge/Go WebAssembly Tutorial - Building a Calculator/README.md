Step1: build main.go to wasm

```bash
GOOS=js GOARCH=wasm go build -o main.wasm
```

Step2: Run simple http server to serve index.html, wasm_exec.js, main.wasm

```bash
# install goexec: go install github.com/shurcooL/goexec
goexec 'http.ListenAndServe(`:8080`, http.FileServer(http.Dir(`.`)))'
```