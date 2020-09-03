import os
from os.path import join, dirname
from dotenv import load_dotenv
import flask_api.app_profile

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

S3_BUCKET = os.getenv("S3_BUCKET")
S3_KEY = os.getenv("S3_KEY")
S3_SECRET = os.getenv("S3_SECRET_ACCESS_KEY")
class Config(object):
    DEBUG = False
    TESTING = False

    BASEDIR = os.path.abspath(os.path.dirname(__file__))
    SECRET_KEY = os.getenv("SECRET_KEY")
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASEDIR, 'site.db')
    SQLALCHEMY_TRACK_MODIFICATIONS =True



class DevConfig(Config):
    DEBUG = True
    TESTING = False

class TestConfig(DevConfig):
    BASEDIR = os.path.abspath(os.path.dirname(__file__))
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(BASEDIR, 'app_test.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    BCRYPT_LOG_ROUNDS = 4
    TESTING = True
    WTF_CSRE_ENABLE = False
