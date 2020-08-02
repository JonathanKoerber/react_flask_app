from flask import Blueprint
from flask import render_template, url_for, flash, redirect, request
import time
import json

web = Blueprint('web', __name__)



@web.route('/hello', methods =['GET', 'PUT'])
def my_index():
    # todo flask_token should be a array of image, title dict
    # this will come through flask-s3

    json_object = {'title': "Amazon Pets", 'image': 'static/images/pets//pets_desktop_hero_image.png', "href": "#"}
    # str = []
    # for c in content:
    #     c = json.dumps(c)
    #     str.append(c)
    # #     content = json.loads(str)
    # flask_token = json.loads(str)
    # # content = json.dumps(content)
    token = json.dumps(json_object)
    return render_template("index.html", flask_token=[{"title":"hello world"}])

@web.route('/Gallery')
def gallery():
    content = [
    {'title': "Prime Day", 'image':  './flask_api/static/images/prime_day//pdc_desktop_hero_image.png', "href": "#"},
    {'title': "OFT", 'image': './flask_apistatic/images/oprah_fav//oft_desktop_hero_image.png', "href": "#"},
    {'title': "Flair", 'image': './flask_apistatic/images/flair//flair_desktop_hero_image.png', "href": "#"},
    {'title': "Amazon Pets", 'image': './flask_apistatic/images/pets//pets_desktop_hero_image.png', "href": "#"}
]
    # todo flask_token = dict{}
    return {'content': content }

@web.route('/time')
def get_current_time():
    return {'time': time.time()}
