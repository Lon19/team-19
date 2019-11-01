
from textblob import TextBlob

sentiment_string = '''
Hey I hate you and I want to die!
But also I am very glad and happy.
My name Jeff.'''

opinion = TextBlob(sentiment_string)

print("Overall sentiment: " + str(opinion.sentiment))

for sentence in opinion.sentences:
    print(sentence + " " + str(sentence.sentiment))
