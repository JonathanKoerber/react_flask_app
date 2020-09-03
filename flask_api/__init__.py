from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
# from flask_login import LoginManager
from flask_migrate import Migrate
#from flask_authorize import Authorize


db = SQLAlchemy()
migrate = Migrate()
bcrypt = Bcrypt()

# login_manager = LoginManager()
# todo add login add cookie handler
# login_manager.login_view = 'users.login'
# login_manager.login_message_category = 'info

def create_app(Config):
    app = Flask(__name__, static_folder='./REACT-UI/build', static_url_path='/')

    app.config.from_object(Config)

    db.init_app(app)
    bcrypt.init_app(app)


    # login_manager.init_app(app)

    from flask_api.web.routes import web
    app.register_blueprint(web)

    return app
