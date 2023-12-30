import json
from app import app

def test_root_route():
    client = app.test_client()
    response = client.get('/')
    assert response.status_code == 200

    if "application/json" in response.content_type:
        data = response.get_json()
        assert "message" in data
        assert data["message"] == "Hello from the back end!"
    else:
        assert False, f"Expected JSON but receive: {response.content_type}"

def test_sre_route():
    client = app.test_client()
    response = client.get('/sre')
    assert response.status_code == 200

    if "application/json" in response.content_type:
        data = response.get_json()
        assert "message" in data
        assert data["message"] == "Hello SRE page!"
    else:
        assert False, f"Expected JSON but receive: {response.content_type}"

def test_backend_route():
    client = app.test_client()
    response = client.get('/backend')
    assert response.status_code == 200

    if "application/json" in response.content_type:
        data = response.get_json()
        assert "message" in data
        assert data["message"] == "Hello back end page!"
    else:
        assert False, f"Expected JSON but receive: {response.content_type}"

def test_frontend_route():
    client = app.test_client()
    response = client.get('/frontend')
    assert response.status_code == 200

    if "application/json" in response.content_type:
        data = response.get_json()
        assert "message" in data
        assert data["message"] == "Hello front end page!"
    else:
        assert False, f"Expected JSON but receive: {response.content_type}"