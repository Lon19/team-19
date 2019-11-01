#!flask/bin/python
import frames as f
from flask import Flask, jsonify
from flask import g


app = Flask(__name__)

app.frames = {
        "adjustments_df": f.adjustments_dataframe(),
        "mental_health_df": f.mental_health_dataframe(),
        "organizational_culture_df": f.organisational_culture_dataframe(),
        "work_self_confidence_df": f.work_self_confidence_dataframe()
    }

@app.route('adjustments/count', methods=['GET'])
def get_tasks():
    return jsonify(len(app.frames.adjustments_df))

@app.route('mental-health/count', methods=['GET'])
def get_tasks():
    return jsonify(len(app.frames.mental_health_df))

@app.route('organizational-culture/count', methods=['GET'])
def get_tasks():
    return jsonify(len(app.frames.organizational_culture_df))

@app.route('work-self-confidence/count', methods=['GET'])
def get_tasks():
    return jsonify(len(app.frames.work_self_confidence_df))




if __name__ == '__main__':
    with app.app_context():
        app.run(debug=True)
