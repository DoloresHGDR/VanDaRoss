from flask import jsonify,request,Blueprint
from database import db
from models.User import User


auth = Blueprint('auth',__name__,url_prefix='/auth')
@auth.route('/register',methods=['POST'])

def register():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    confirmpassword = request.json['confirmpassword']
    print(name,email,password,confirmpassword)
     
    if User.query.filter_by(email=email).first():
        return jsonify ({'mensaje': 'ya existe un usuario registrado con ese email'})
    else:
        user = User(name=name, email=email, password=password)
        db.session.add(user)
        db.session.commit()

        

        return jsonify({}),200