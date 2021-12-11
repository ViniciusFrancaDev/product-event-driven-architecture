# Product management
Project that performs CRUD operation for product management using an event-oriented structure.

## Requirements
* [Docker desktop](https://www.docker.com/products/docker-desktop)
* [RabbitMQ](https://www.rabbitmq.com/) environment

## Installation
1. Clone the repository

2. Change to the directory was created by the clone

3. Use your RabbitMQ URL to configure the consumers and producers

* Producers: `main/producer.py` and `admin/products/producer.py`

* Consumers: `main/consumer.py` and `admin/consumer.py`

```python
params = pika.URLParameters('your_rabbitmq_url')
```

4. Run each app's docker-compose file individually:

```bash
cd admin/ && docker-compose up -d
```

```bash
cd main/ && docker-compose up -d
```

```bash
cd frontend/ && docker-compose up -d
```

## Usage
### Interface
The interface will be accessible via the URL `http://localhost:8080`

You can manage the products through `http://localhost:8080/admin/products` and view and like the products in `http://localhost:8080`.

### API
The API is available through `http://localhost:8000` with the endpoints:

#### Products
**HTTP Method**|**URI Path**|**Description**
:--|:--|:--
GET|/api/products|Returns all products
GET|/api/products/{id}|Returns product by id
POST|/api/products|Creates product
PUT|/api/products/{id}|Updates product
DELETE|/api/products/{id}|Deletes product by id

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
