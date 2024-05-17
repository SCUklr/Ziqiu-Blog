from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/posts', methods=['GET'])
def get_posts():
    posts = [
        {"id": 1, "title": "First Post"},
        {"id": 2, "title": "Second Post"},
        {"id": 3, "title": "Third Post"}
    ]
    return jsonify({"posts": posts})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
