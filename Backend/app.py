#!flask/bin/python
import frames as f
from flask import Flask, jsonify
from flask import g


app = Flask(__name__)

app.frames = {"adjustments_df": f.adjustments_dataframe(),
              "mental_health_df": f.mental_health_dataframe(),
              "organisational_culture_df": f.organisational_culture_dataframe(),
              "work_self_confidence_df": f.work_self_confidence_dataframe()}

app.organisational_culture_df_quantitative = app.frames["organisational_culture_df"].applymap(
    lambda data: f.AnswerMappings.organisational_culture[data] if data in f.AnswerMappings.organisational_culture else data)

app.mental_health_df_quantitative = app.frames["mental_health_df"].applymap(
    lambda data: f.AnswerMappings.mental_health[str(data).lower()] if str(data).lower() in f.AnswerMappings.mental_health else data)


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
