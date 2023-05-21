from flask import Flask, request, jsonify
import joblib

app = Flask(_name_)

model = joblib.load('crop_recommendation_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    prediction = model.predict([[data['N'], data['P'], data['K'], data['temperature'], data['humidity'], data['ph'], data['rainfall']]])
    output = prediction[0]
    return jsonify(output)

if _name_ == '_main_':
    app.run(port=5000, debug=True)