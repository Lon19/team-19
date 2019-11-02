import csv

def dataframe_from_csv(raw_data_file):
    infile = open(raw_data_file, 'r')
    reader = csv.reader(infile)
    a = []
    for row in reader:
        a.append(row)
    infile.close()
    return a


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
        'Did not apply to me at all': 0,
        'Applied to me to some degree': 1,
        'Applied to me to a considerable degree, or a good part of the time': 2,
        'Applied to me a good part of the time': 2,
        'Applied to me to a considerable degree': 2,
        'Applied to me very much, or most of the time': 3,
        'Applied to me very much': 3,
    }

    organisational_culture = {
        'Strongly disagree': 0,
        'Somewhat disagree': 1,
        'Somewhat agree': 2,
        'Strongly agree': 3,
    }

    work_self_confidence = {
        'Not confident at all': 1,
        'A little': 2,
        'Moderate': 3,
        'A lot': 4,
        'Completely confident': 5,
    }


mental_health_questions = {
    1: "I found it hard to wind down",
    2: "I was aware of dryness of my mouth",
    3: "I couldn't seem to experience any postive feelings at all",
    4: "I experienced breathing difficulty (e.g. excessively rapid breathing, breathlessness in the absence of physical exertion)",
    5: "I found it difficult to work up the initiative to do things",
    6: "I tended to over-react to situations",
    7: "I experienced trembling (e.g. in the hands)",
    8: "I felt that I was using a lot of nervous energy",
    9: "I was worried about situations in which I might panic and make a fool of myself",
    10: "I felt that I had nothing to look forward to",
    11: "I found myself getting agitated",
    12: "I found it difficult to relax",
    13: "I felt down-hearted and blue",
    14: "I was intolerant of anything that kept me from getting on with what I was doing",
    15: "I felt I was close to panic",
    16: "I was unable to become enthusiastic about anything",
    17: "I felt I wasn't worth much as a person",
    18: "I felt that I was rather touchy",
    19: "I was aware of the actions of my heart in the absence of physical exertion (e.g. sense of heart rate increase, heart missing a beat)",
    20: "I felt scared without any good reason",
    21: "I felt that life was meaningless",
}

# Depression = (sum of questions 3, 5, 10, 16, 17, 21) x 2
# Anxiety = (sum of questions 2, 4, 7, 9, 15, 19, 20) x 2
# Stress = (sum of questions 1, 6, 8, 11, 12, 14, 18) x 2


def getMentalHealthSummary(rows, id):
    # foreach row:
    # timestamp as key :
    # calculate values

    for row in rows:
        if row[2] == id:
            depression = ((int(row[3]) + int(row[5]) + int(row[10]) +
                           int(row[16]) + int(row[17]) + int(row[21])) * 2)
            return depression
        #print("" + str(key) + " : " + str(depression))
    return 0

# Severity ratings
# Severity  Depression  Anxiety   Stress
# --------|-----------|----------|---------|
# Normal    0-9         0-7       0-14
# Mild      10-13       8-9       15-18
# Moderate  14-20       10-14     19-25
# Severity  21-27       15-19     26-33
# Extremely 28+         20+       34+
# ...Severe
