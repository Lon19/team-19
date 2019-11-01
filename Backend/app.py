#!flask/bin/python
import frames as f
from flask import Flask, jsonify
from flask import g


app = Flask(__name__)

app.frames = {"adjustments_df": f.adjustments_dataframe(),
              "mental_health_df": f.mental_health_dataframe(),
              "organisational_culture_df": f.organisational_culture_dataframe(),
              "work_self_confidence_df": f.work_self_confidence_dataframe()}

d = {'Strongly disagree': 0, 'Somewhat disagree': 1,
     'Somewhat agree': 2, 'Strongly agree': 3}
app.organisational_culture_df_quantitative = app.frames["organisational_culture_df"].applymap(lambda data: d[data] if data in d else data)


@app.route('/adjustments/count', methods=['GET'])
def get_adjustments_count():
    return jsonify(len(app.frames["adjustments_df"]))


@app.route('/mental-health/count', methods=['GET'])
def get_mental_health_count():
    return jsonify(len(app.frames["mental_health_df"]))


@app.route('/organisational-culture/count', methods=['GET'])
def get_organizational_culture_count():
    return jsonify(len(app.frames["organisational_culture_df"]))


@app.route('/work-self-confidence/count', methods=['GET'])
def get_work_self_confidence_count():
    return jsonify(len(app.frames["work_self_confidence_df"]))


if __name__ == '__main__':
    with app.app_context():
        app.run(debug=True)
