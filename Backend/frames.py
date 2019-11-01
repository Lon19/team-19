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
    raw_data_file = 'data/adjustments-health.csv'
    return dataframe_from_csv(raw_data_file)


def organisational_culture_dataframe():
    raw_data_file = 'data/organisational-culture.csv'
    return dataframe_from_csv(raw_data_file)


def work_self_confidence_dataframe():
    raw_data_file = 'data/work-self-confidence.csv'
    return dataframe_from_csv(raw_data_file)


