import mysql.connector

def query():
    conn = mysql.connector.connect(
            user='',
            password='',
            host='dev-db.cxxf4wm3uvs7.us-west-2.rds.amazonaws.com',
            database='dev',
            port='3306')
    cur = conn.cursor()
    query = ('SELECT * FROM tests WHERE id="1"')
    cur.execute(query)
    message = ''
    for (id, msg) in cur:
        message = msg
    conn.close()
    return message

print(query())