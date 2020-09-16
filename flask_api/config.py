import os
from os.path import join, dirname
import flask_api.app_env as env
import json


S3_BUCKET = env.constants.get("S3_BUCKET")
S3_KEY = env.constants.get("S3_KEY")
S3_SECRET = env.constants.get("S3_SECRET_ACCESS_KEY")
class Config(object):
    S3_BUCKET = env.constants.get("S3_BUCKET")
    S3_KEY = env.constants.get("S3_KEY")
    S3_SECRET = env.constants.get("S3_SECRET_ACCESS_KEY")
    DEBUG = False
    TESTING = False
    SECRET_KEY = env.constants.get("SECRET_KEY")

class DevConfig(Config):
    DEBUG = True
    TESTING = False

class TestConfig(DevConfig):
    BASEDIR = os.path.abspath(os.path.dirname(__file__))
    BCRYPT_LOG_ROUNDS = 4
    TESTING = True
    WTF_CSRE_ENABLE = False
