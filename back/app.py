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

    @app.route('/api/weather/<city>', methods=['GET'])

def get_weather(city):
    api_key = "c4fc1c0c9a8bacabdd5f3f4fe5de6368"  # Reemplaza con tu clave de OpenWeatherMap
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric&lang=es"
    response = requests.get(url)
    data = response.json()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)