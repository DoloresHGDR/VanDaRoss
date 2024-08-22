from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS
from routes import auth
from database import db,FULL_URL_DB


app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.register_blueprint(auth)


db.init_app(app)
migrate=Migrate()
migrate.init_app(app,db)

if __name__ == '__main__':
    app.run(port=5000)

