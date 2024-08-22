from database import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250))
    email = db.Column(db.String(250))
    password = db.Column(db.String(250))
    confirmpassword = db.Column(db.String(250))
    role = db.Column(db.String(250))

    def str(self):
        return(
            f'id: {self.id}, '
            f'name: {self.name}, '
            f'email: {self.email}'
            f'password: {self.password}, '
            f'confirmpassword: {self.confirmpassword}'
            f'role: {self.role}'
        )