from flask import jsonify,request,Blueprint
from database import db
from models.User import User
import requests


auth = Blueprint('auth',__name__,url_prefix='/auth')
@auth.route('/register',methods=['POST'])

def register():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    confirmpassword = request.json['confirmpassword']
    role = '2'
    print(name,email,password,confirmpassword)
     
    if User.query.filter_by(email=email).first():
        return jsonify ({'mensaje': 'ya existe un usuario registrado con ese email'})
    else:
        user = User(name=name, email=email, password=password, role=role)
        db.session.add(user)
        db.session.commit()

        return jsonify(role=role),200

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    emailDb = User.query.filter_by(email=email).first()
    role = emailDb.role
    print('role', role)

    if emailDb and emailDb.password == password:
        print('logueado correctamente')
        return jsonify(role=role),200
    else:
        response = {'Mensaje': 'Error'}
        print('error de contraseña')
        return jsonify(response), 401