from flask import Blueprint, jsonify
from flask import url_for
import time
from flask_api.static.Flair_JSON import flair
from flask_api.static.PDC_JSON import pdc
from flask_api.static.PET_JSON import pet
from flask_api.static.OFT_JSON import oft


web = Blueprint('web', __name__)

# https://www.youtube.com/watch?v=9N6a-VLBa2I
@web.route('/api/gallery', methods=['GET', 'POST'])
def gallery():
    d =  {
            "title": "Prime Day",
            "image": "/flask_api/static/images/prime_day//pdc_desktop_hero_image.png",
            "href": "#"
            }

    data = [

         {"title": "Prime Day",
          "image": "/images/prime_day/pdc_desktop_hero_image.png",
          "href": "/PrimeDayConcerts"}
    ,
        {"title": "OFT",
         "image": "/images/oprah_fav/oft_desktop_hero_image.png",
         "href": "/OprahFavoriteThings"}
         ,
        {"title": "Flair",
         "image": "/images/flair/flair_desktop_hero_image.png",
         "href": "/Flair"}
         ,
        {"title": "Amazon Pets",
         "image": "/images/pets/pets_desktop_hero_image.png",
         "href": "/AmazonPets"}
    ]
    # todo get json object from s3
    for d in data:
        d['image'] = url_for('static', filename=d['image'])
    return {"data": data}

@web.route('/time')
def get_current_time():
    return {'time': time.time()}


@web.route('/api/pdc', methods=['GET', 'PUT'])
def getPrime():

    return {'data':pdc}

@web.route('/api/oft', methods=['GET', 'PUT'])
def getOft():

    return {'data':oft}

@web.route('/api/flair', methods=['GET', 'PUT'])
def getFlair():

    return {'data': flair }

@web.route('/api/pets', methods=['GET', 'PUT'])
def getPets():

    return {'data': pet}