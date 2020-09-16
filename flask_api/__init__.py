from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate



migrate = Migrate()
bcrypt = Bcrypt()


def create_app(Config):
    app = Flask(__name__, static_folder='..REACT-UI/build', static_url_path='/')
    app.config.from_object(Config)
    bcrypt.init_app(app)


    from flask_api.web.routes import web
    app.register_blueprint(web)
    return app
