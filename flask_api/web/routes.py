from flask import Blueprint, jsonify
from flask import url_for
import time
import json

web = Blueprint('web', __name__)

# https://www.youtube.com/watch?v=9N6a-VLBa2I
@web.route('/gallery', methods=['GET', 'POST'])
def gallery():
    d =  {
            "title": "Prime Day",
            "image": "/flask_api/static/images/prime_day//pdc_desktop_hero_image.png",
            "href": "#"
            }

    data = [

         {"title": "Prime Day",
          "image": "/images/prime_day/pdc_desktop_hero_image.png",
          "href": "#"}
    ,
        {"title": "OFT",
         "image": "/images/oprah_fav/oft_desktop_hero_image.png",
         "href": "#"}
         ,
        {"title": "Flair",
         "image": "/images/flair/flair_desktop_hero_image.png",
         "href": "#"}
         ,
        {"title": "Amazon Pets",
         "image": "/images/pets/pets_desktop_hero_image.png",
         "href": "#"}
    ]
    # todo get json object from s3
    for d in data:
        d['image'] = url_for('static', filename=d['image'])
    return {"data": data}

@web.route('/project', methods=['GET', 'POST'])
def static(query):
    print('calling static files')
    asset = url_for('static', query)
    print('asset:  '+ asset)
    return asset

@web.route('/time')
def get_current_time():
    return {'time': time.time()}
