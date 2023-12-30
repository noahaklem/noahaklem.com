from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    data = {"message": "Hello from the back end!"}
    return jsonify(data)

@app.route("/sre")
def sre():
    data = {"message": "Hello SRE page!"}
    return jsonify(data)

@app.route("/frontend")
def frontend():
    data = {"message": "Hello front end page!"}
    return jsonify(data)

@app.route("/backend")
def backend():
    data = {"message": "Hello back end page!"}
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)