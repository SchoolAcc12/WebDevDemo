from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS

# App initialasing
app = Flask(__name__)
CORS(app)
# Connecting flask API to MySQL server
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'GucciMane123'
app.config['MYSQL_DB'] = 'user_managament'

# Initializing mysql connection
mysql = MySQL(app)

'''
MySQL cursor that allows us to 
make queries to our local db
'''

# Index route for API
@app.route('/users')
def index():
    cursor = mysql.connection.cursor();
    cursor.execute('''SELECT user_id,first_name, last_name FROM users''')
    data = cursor.fetchall()
    return f'{data}'

if __name__ == '__main__':
    app.run(debug=True)