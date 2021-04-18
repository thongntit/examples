import socket
import sys

if len(sys.argv) < 2:
    HOST = '127.0.0.1'
else:
    HOST = sys.argv[1]

if len(sys.argv) < 3:
    PORT = 8080
else:
    PORT = int(sys.argv[2])

s= socket.socket(socket.AF_INET,socket.SOCK_STREAM)
s.connect((HOST,PORT))

while True:
	command = input('Enter your command: ')
	s.send(command.encode())
	reply = str(s.recv(1024),'utf-8')
	if reply == 'Terminate':
		break
	print(reply)
