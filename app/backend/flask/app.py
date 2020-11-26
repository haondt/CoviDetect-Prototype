from flask import Flask, request, Response, jsonify
from flask_restful import Resource, Api, abort, reqparse

# App setup
app = Flask(__name__)
api = Api(app)

class Test(Resource):
    def get(self):
        return "GET"

    def put(self):
        return "PUT"

    def post(self):
        return "POST2"

    def delete(self):
        return "DELETE"

# Route views
api.add_resource(Test, "/api/test/")

# Run app
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
