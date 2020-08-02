import os
import flask_api.app_profile

class Config(object):
    DEBUG = False
    TESTING = False

    BASEDIR = os.path.abspath(os.path.dirname(__file__))
    SECRET_KEY = flask_api.app_profile.app_key.get("SECRET_KEY")
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
