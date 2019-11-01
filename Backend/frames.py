import pandas as pd


def dataframe_from_csv(raw_data_file):
    infile = open(raw_data_file, 'rb')
    mental_health_dict = pd.read_csv(infile)
    infile.close()
    df = pd.DataFrame(data=mental_health_dict)
    return df


def mental_health_dataframe():
    raw_data_file = 'data/mental-health.csv'
    return dataframe_from_csv(raw_data_file)


def adjustments_dataframe():
    raw_data_file = 'data/adjustments.csv'
    return dataframe_from_csv(raw_data_file)


def organisational_culture_dataframe():
    raw_data_file = 'data/organisational-culture.csv'
    return dataframe_from_csv(raw_data_file)


def work_self_confidence_dataframe():
    raw_data_file = 'data/work-self-confidence.csv'
    return dataframe_from_csv(raw_data_file)


class AnswerMappings:
    mental_health = {
        'did not apply to me at all': 0,
        'applied to me to some degree': 1,
        'applied to me to a considerable degree, or a good part of the time': 2,
        'applied to me a good part of the time': 2,
        'applied to me to a considerable degree': 2,
        'applied to me very much, or most of the time': 3,
    }


class MentalHealth:
    # Depression = (sum of questions 3, 5, 10, 16, 17, 21) x 2
    def CalculateDepression(row):
        print(row[0][1])
        # convert to lowercase to score
        return 0

    # Anxiety = (sum of questions 2, 4, 7, 9, 15, 19, 20) x 2
    def CalculateAnxiety():
        return 0

    # Stress = (sum of questions 1, 6, 8, 11, 12, 14, 18) x 2
    def CalculateStress():
        return 0


# Severity ratings
# Severity	Depression	Anxiety	  Stress
# --------|-----------|----------|---------|
# Normal	0-9	        0-7       0-14
# Mild	    10-13   	8-9	      15-18
# Moderate	14-20	    10-14	  19-25
# Severity	21-27	    15-19	  26-33
# Extremely	28+	        20+	      34+
# ...Severe
