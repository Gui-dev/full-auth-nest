<h1 align="center">
  Full Authentication with Nestjs and JWT
</h1>
<p align="center">
  <img
    src="./.screens/1.png"
    alt="Full Authentication with Nestjs and JWT"
    title="Full Authentication with Nestjs and JWT"
  />
</p>

# 💻 Project

<p>
Autenticação usando Nestjs com Typescript e JWT
</p>

## ✨ Technologies used

- [Node](https://nodejs.org)
- [Nest](https://docs.nestjs.com)
- [Typescript](https://www.typescriptlang.org)
- [Passport-JWT](http://www.passportjs.org/packages/passport-jwt)

# 🚀 How to run

## Install dependencies

npm install

## Run the app

npm run start:dev

### Request

<p>Authentication</p>

```bash
POST /auth/signup
```

<span>Datas</span>

```bash
{
	"username": "bruce@emai.com",
	"password": "123456"
}
```

```bash
POST /auth/signin
```

<span>Datas</span>

```bash
{
	"username": "bruce@emai.com",
	"password": "123456"
}
```

<p>Return</p>

```bash
{
	"user": {
    "id": "307b8032-9ff1-4a4e-9ae8-26c8cb25ada1"
		"username": "bruce@email.com"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwidXNlcm5hbWUiOiJicnVjZUBlbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzM0MTc2MjEsImV4cCI6MTY3MzQxNzY4MX0.6SM7SrQrA8_p_EujG80jX7flv-LW0D4gPLRtbaClQB4"
}
```

```bash
GET /auth/signout
```

<p>Users</p>

```bash
GET /users/:id
```

<p>Return</p>

```bash
{
	"user": {
		"id": "307b8032-9ff1-4a4e-9ae8-26c8cb25ada1",
		"email": "bruce@email.com",
		"createdAt": "2023-01-17T06:48:35.239Z"
	}
}
```

```bash
GET /users
```

<p>Return</p>

```bash
{
	"users": [
		{
			"id": "307b8032-9ff1-4a4e-9ae8-26c8cb25ada1",
			"email": "bruce@email.com",
			"createdAt": "2023-01-17T06:48:35.239Z"
		}
	]
}
```

## 📄 Licença

This project is under the MIT license. See the file [LICENSE](LICENSE.md) for
more details
