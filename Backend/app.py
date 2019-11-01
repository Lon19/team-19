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

app.counter = 0

@app.route('/', methods=['GET'])
def get_tasks():
    app.counter += 1
    return jsonify(app.counter)




if __name__ == '__main__':
    with app.app_context():
        app.run(debug=True)
