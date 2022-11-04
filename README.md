
# Book-a-Meal

Book-A-Meal is an application that allows customers to 
make food orders and helps the food vendor 
know what the customers want to eat. 

## Demo
To view the application live 
[View Demo](https://documenter.getpostman.com/view/14609137/2s8YRgpuNY#intro)

Design file was created using Figma,
[View Design file](https://www.figma.com/file/xSSSzSPpDHyGfyZz3uyL3a/Food-Delivery-UI-(Community)?node-id=0%3A1)

## Features

- Login/ logout user & admin
- Admin Dashboard
- Full CRUD operations
- Hosts more than one admin


## Run Locally

Clone the project

```bash
  git clone git@github.com:bookameal/bookameal-frontend.git
```  
```bash
  cd bookameal-frontend
```
```bash
  npm install
```
```bash
  npm start
```


## API Reference

#### Get all  /menu-items

```http
  GET /https://bookameal-backend.herokuapp.com/menu_items
```


#### Get menu/:id

```http
  GET /https://bookameal-backend.herokuapp.com/menu_items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of item to fetch |


#### Get all  /orders

```http
  GET /https://bookameal-backend.herokuapp.com/orders
```


#### Get orders/:id

```http
  GET /https://bookameal-backend.herokuapp.com/orders/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer` | **Required**. Id of item to fetch |



## Documentation

[Oficial API Documentation](https://documenter.getpostman.com/view/14609137/2s8YRgpuNY#intro)


## Authors

- [@i-ronoh](https://github.com/i-ronoh)
- [@carlagesa](https://github.com/carlagesa)
- [@VKwamboka](https://github.com/VKwamboka)
- [@Edsey-omenda](https://github.com/Edsey-omenda)
- [@Mary-muriga](https://github.com/Mary-muriga)

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Tech Stack

**Client:** React, Redux, React-bootstrap

**Server:** Ruby on Rails, PostgreSQL


## Related

Here are some related projects

[Book-a-meal Backend](https://github.com/bookameal/bookameal-backend)


## Deployment

This project has been hosted on Netlify

## Feedback

If you have any feedback, please reach out to us at bookameal@gmail.com

