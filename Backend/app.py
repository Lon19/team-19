#!flask/bin/python
import frames
from flask import Flask, jsonify
from flask import g
app = Flask(__name__)

mental_health_df = frames.mental_health_dataframe()
work_self_confidence_df = frames.work_self_confidence_dataframe()
adjustments_df = frames.adjustments_dataframe()
organisational_culture_df = frames.organisational_culture_dataframe()

tasks = [
    {
        'id': 1,
        'title': u'Buy groceries',
        'description': u'Milk, Cheese, Pizza, Fruit, Tylenol', 
        'done': False
    },
    {
        'id': 2,
        'title': u'Learn Python',
        'description': u'Need to find a good Python tutorial on the web', 
        'done': False
    }
]


@app.route('/', methods=['GET'])
def get_tasks():
    return jsonify({'tasks': tasks})


if __name__ == '__main__':
    app.run(debug=True)