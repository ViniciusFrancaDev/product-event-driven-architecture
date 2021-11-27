import pika
from pika import connection

params = pika.URLParameters('your_rabbitmq_url')

connection = pika.BlockingConnection(params)

channel = connection.channel()

def publish():
    channel.basic_publish(exchange='', routing_key='main', body='hello main')
