#!flask/bin/python
import frames
from flask import Flask, jsonify
app = Flask(__name__)

mental_health_df = frames.mental_health_dataframe()
work_self_confidence_df = frames.work_self_confidence_dataframe()
adjustments_df = frames.adjustments_dataframe()
organisational_culture_df = frames.organisational_culture_dataframe()
d = {'Strongly disagree': 0, 'Somewhat disagree': 1, 'Somewhat agree': 2, 'Strongly agree': 3}
organisational_culture_df_quantitative = organisational_culture_df.applymap(lambda data: d[data] if data in d else data)

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
    return mental_health_df.count()


if __name__ == '__main__':
    app.run(debug=True)