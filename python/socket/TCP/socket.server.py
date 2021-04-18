import socket
import sys

HOST= socket.gethostbyname("localhost")

if len(sys.argv) < 2:
    PORT= 12345
else:
    PORT = int(sys.argv[1])
s= socket.socket(socket.AF_INET,socket.SOCK_STREAM)
print('Socket Created at %s'%HOST)

try:
    s.bind((HOST,PORT))
except socket.error:
    print('Bind failed')

s.listen(1)
print('Socket awaiting messanges')
(conn,addr) = s.accept()
print('Connected')

while True:
    data = str(conn.recv(1024),'utf-8')
    if data == "Hello":
        reply ='Hi,back!'
    elif data == "quit":
        conn.send('Terminate'.encode())
        break
    elif data == "":
        print("Client disconnected")
        break
    else:
        reply = data
    print("I sent a message back in response to: "+ data)
    conn.send(reply.encode())


