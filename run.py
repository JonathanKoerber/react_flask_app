from flask_api import create_app
from flask_api.config import Config, DevConfig

app = create_app(Config)
if __name__ == '__main__':
    app.run(debug=True)
