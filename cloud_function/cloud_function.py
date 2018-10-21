import json
import requests
from flask import make_response, jsonify

def dali_data(request):
    response = requests.get("http://mappy.dali.dartmouth.edu/members.json")
    dict_resp = json.loads(response.text)
    if request.method == "OPTIONS":
        response = make_response(jsonify(dict_resp), 204)
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Access-Control-Allow-Headers"] = 'Content-Type'
        return response
    response = make_response(jsonify(dict_resp), 200)
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = 'Content-Type'
    return response
