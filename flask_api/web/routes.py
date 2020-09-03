from flask import Blueprint
import json
import boto3
from flask_api.config import S3_BUCKET, S3_KEY, S3_SECRET



web = Blueprint('web', __name__)
s3_resource = boto3.resource(
        "s3",
        aws_access_key_id=S3_KEY,
        aws_secret_access_key=S3_SECRET
    )

@web.route('/')
def index():
    return web.send_static_file('index.html')
# https://www.youtube.com/watch?v=9N6a-VLBa2I
@web.route('/api/gallery', methods=['GET', 'POST'])
def getGallery():
    s3 = boto3.resource('s3')
    obj = s3.Object(bucket_name=S3_BUCKET, key='Gallery.json')
    response=obj.get()
    data = response['Body'].read()
    data = json.loads(data)

    return {'data': data}


@web.route('/api/pdc', methods=['GET'])
def getPrime():
    s3 = boto3.resource('s3')
    obj = s3.Object(bucket_name=S3_BUCKET, key='PDC.json')
    response = obj.get()
    data = response['Body'].read()
    data = json.loads(data)
    return {'data': data}


@web.route('/api/oft', methods=['GET', 'PUT'])
def getOft():
    s3 = boto3.resource('s3')
    obj = s3.Object(bucket_name=S3_BUCKET, key='OFT.json')
    response = obj.get()
    data = response['Body'].read()
    data = json.loads(data)
    return {'data': data}


@web.route('/api/flair', methods=['GET', 'PUT'])
def getFlair():
    s3 = boto3.resource('s3')
    obj = s3.Object(bucket_name=S3_BUCKET, key='Flair.json')
    response = obj.get()
    data = response['Body'].read()
    data = json.loads(data)
    return {'data': data }


@web.route('/api/pets', methods=['GET', 'PUT'])
def getPets():
    s3 = boto3.resource('s3')
    obj = s3.Object(bucket_name=S3_BUCKET, key='Pet.json')
    response = obj.get()
    data = response['Body'].read()
    data = json.loads(data)
    return {'data': data}