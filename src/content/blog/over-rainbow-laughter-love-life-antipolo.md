---
author: Mark Anthony Llego
pubDatetime: 2023-09-17T14:25:31Z
title: "Over the Rainbow: Of Laughter, Love, and Life in Antipolo"
postSlug: over-rainbow-laughter-love-life-antipolo
featured: true
draft: false
tags:
  - personal
ogImage: "https://llego.dev/assets/6cbad534-9ee2-4edd-b2a6-8f12bfb83627.jpg"
description: "Experience life's symphony through the lens of Mark, a multi-dimensional dreamer, partner, and father. Through laughter, struggles, and dreams, discover the portrait of his life painted against the vibrant cityscape backdrop of Antipolo. Dive into this narrative that mirrors not just one man's journey but the harmonious dance of universal experiences."
---

```python
import random
import matplotlib.pyplot as plt
import pickle
from abc import ABC, abstractmethod

class EmotionModel:
    def __init__(self, resilience: int =2, sensitivity: int =1, optimism: int =3):
        self.attributes = {"resilience": resilience, "sensitivity": sensitivity, "optimism": optimism}
        self.init_feelings_and_desires()
        self.feelings_over_time = self.init_over_time(self.feelings)
        self.desires_over_time = self.init_over_time(self.desires)

    def init_feelings_and_desires(self):
        feelings_keys = ["doubt", "fear", "rejection", "joy", "excitement", "sadness", "anger", "irritation", "stress", "calm", "love", "loneliness", "concern", "pride","disappointment"]
        desires_keys = ["acceptance", "belonging", "recognition", "achievement"]
        self.feelings = {key: random.uniform(5, 15) for key in feelings_keys}
        self.desires = {key: random.uniform(5, 15) for key in desires_keys}

    def init_over_time(self, indicator: dict):
        return {key: [value] for key, value in indicator.items()}

    def calc_delta_and_update(self, indicators: dict, attr_mod: int, over_time: dict):
        delta = random.gauss(0, attr_mod)
        noise = random.uniform(-1, 1)
        for key, intensity in indicators.items():
            indicators[key] = max(0, min(10, intensity + delta + noise))
            over_time[key].append(indicators[key])

    def feel(self, time):
        attr_mod = self.attributes["resilience"] if self.feelings["fear"] < 5 else self.attributes["sensitivity"]
        self.calc_delta_and_update(self.feelings, attr_mod, self.feelings_over_time)

        if 6 <= time < 18:  # Daytime adjustment
            self.feelings["excitement"] += 0.1
            self.feelings["sadness"] -= 0.1
        else:  # Nighttime adjustment
            self.feelings["excitement"] -= 0.1
            self.feelings["sadness"] += 0.1

    def apply_feeling_effect(self, feeling_effect):
        for feeling, effect in feeling_effect.items():
            self.feelings[feeling] = max(0, min(10, self.feelings[feeling] + effect))

    def desire(self):
        attr_mod = self.attributes["optimism"] if self.desires["acceptance"] < 5 else -self.attributes["resilience"]
        self.calc_delta_and_update(self.desires, attr_mod, self.desires_over_time)

    def major_event(self):
        negative_feelings = ["doubt", "fear", "rejection", "sadness", "anger"]
        positive_feelings = ["joy", "excitement"]
        negative_feeling = random.choice(negative_feelings)
        positive_feeling = random.choice(positive_feelings)
        self.feelings[negative_feeling] = min(10, self.feelings[negative_feeling] + random.uniform(0, 2))
        self.feelings[positive_feeling] = max(0, self.feelings[positive_feeling] - random.uniform(0, 2))
        self.feelings_over_time[negative_feeling].append(self.feelings[negative_feeling])
        self.feelings_over_time[positive_feeling].append(self.feelings[positive_feeling])

    def update_feelings(self, emotion_changes):
        for emotion, change in emotion_changes.items():
            self.feelings[emotion] = max(0, min(10, self.feelings[emotion] + change))

class Child:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.emotion_model = EmotionModel()

    def random_event(self):
        emotions = {'joy': random.uniform(-1, 1), 'sadness': random.uniform(-1, 1), 'anger': random.uniform(-1, 1)}
        self.emotion_model.update_feelings(emotions)

class Partner:
    def __init__(self, name):
        self.name = name
        self.emotion_model = EmotionModel()
        self.out_of_town = False

    def random_event(self):
        emotions = {'joy': random.uniform(-1, 1), 'concern': random.uniform(-1, 1), 'anger': random.uniform(-1, 1)}
        self.emotion_model.update_feelings(emotions)

class Behavior(ABC):
    @abstractmethod
    def act(self, identity, society):
        pass

class ConformingBehavior(Behavior):
    def act(self, identity, society):
        return identity

class RebelliousBehavior(Behavior):
    def act(self, identity, society):
        non_conforming_aspects = ['vibrant colors', 'tender laughter of children', 'single strokes of defiance', 'subtle rebellion with partner', 'introspective growth']
        identity += non_conforming_aspects
        identity = [aspect for aspect in identity if aspect not in society.expectations]
        return identity

class Society:
    def __init__(self):
        self.expectations = ['faithful son', 'devoted partner', 'father of two', 'mechanical existence', 'suppressing individuality']

class Individual:
    def __init__(self, identity, behavior):
        self.identity = identity
        self.behavior = behavior

    def modify_behavior(self, new_behavior):
        self.behavior = new_behavior

    def act(self, society):
        if set(self.identity).issubset(set(society.expectations)):
            print("\nConforming to societal norms. Starting resistance...\n")
            self.modify_behavior(RebelliousBehavior())
        self.identity = self.behavior.act(self.identity, society)
        print("Identity Updated: ", self.identity)
        if not isinstance(self.behavior, ConformingBehavior):
            print("\nSuccessfully resisted conformity and dismantled the oppressive bricks of societal norms.")
            print("Final Identity revealed: ", self.identity)

class Activity:
    def __init__(self, name, start_time, end_time, feeling_effect=None):
        self.name = name
        self.start_time = start_time
        self.end_time = end_time
        self.feeling_effect = feeling_effect

    def duration(self):
        return self.end_time - self.start_time

class Weather:
    def __init__(self, weather_type):
        self.weather_type = weather_type

    def get_weather_effect(self):
        weather_effects = {
            'sunny': {'joy': 0.2, 'sadness': -0.2},
            'rainy': {'joy': -0.2, 'sadness': 0.2},
            'hot': {'irritation': 0.3, 'joy': -0.1},
            'cloudy': {'joy': -0.1, 'sadness': 0.1},
        }
        return weather_effects.get(self.weather_type, {})

class Self:
    def __init__(self):
        self.emotion_model = EmotionModel()
        self.children = [Child("Desmond", 6), Child("Argi", 11)]
        self.partner = Partner("Arlene")

    def child_events(self):
        for child in self.children:
            child.random_event()
            self.emotion_model.update_feelings(child.emotion_model.feelings)

    def partner_event(self):
        self.partner.random_event()
        self.emotion_model.update_feelings(self.partner.emotion_model.feelings)

class DayInLife:
    def __init__(self, name, available_hours=24, weather=None):
        self.name = name
        self.activities = []
        self.available_hours = available_hours
        self.self = Self()
        self.society = Society()
        self.individual = Individual(['faithful son', 'devoted partner', 'father of two'], ConformingBehavior())
        self.weather = weather

    def add_activity(self, activity):
        if self.available_hours - activity.duration() < 0:
            return "Not enough time available for this activity."
        else:
            self.activities.append(activity)
            self.available_hours -= activity.duration()

    def adjust_schedule(self, activity_name, start_time, end_time):
        for activity in self.activities:
            if activity.name == activity_name:
                self.available_hours += activity.duration()
                activity.start_time = start_time
                activity.end_time = end_time
                self.available_hours -= activity.duration()
                return f"The schedule for {self.name}'s day was updated."

    def brief_day(self):
        return f"In a typical day, {self.name} spends {self.activities[0].duration()} hours with family, {self.activities[1].duration()} hours working, {self.activities[2].duration()} hours reflecting, and {self.activities[3].duration()} hours dreaming."

    def resist_conformity(self):
        self.self.child_events()
        self.self.partner_event()
        for i in range(24):  # Simulating the day
            self.individual.act(self.society)
            if i % 4 == 0: # major events
                self.self.emotion_model.major_event()
            else:
                self.self.emotion_model.feel(i)
            if self.weather:
                self.self.emotion_model.apply_feeling_effect(self.weather.get_weather_effect())
            for activity in self.activities:
                if activity.start_time <= i < activity.end_time and activity.feeling_effect:
                    self.self.emotion_model.apply_feeling_effect(activity.feeling_effect)

    def summary(self):
        feelings_summary = ", ".join(f"{feeling}: {round(level[-1], 1)}" for feeling, level in self.self.emotion_model.feelings_over_time.items())
        return f"Summary of {self.name}'s day:\nAvailable Hours: {self.available_hours}\nFinal Feelings: {feelings_summary}"

class Simulation:
    def __init__(self, individuals: list):
        self.individuals = individuals

    def run(self):
        for individual in self.individuals:
            individual.resist_conformity()

if __name__ == "__main__":

    family_time = Activity('Family Time', 0, 6, {'joy': 0.1, 'sadness': -0.1})
    work_time = Activity('Work Time', 6, 14, {'stress': 0.3})
    reflection_time = Activity('Self-Reflection Time', 14, 20, {'calm': 0.2, 'anger': -0.2})
    resist_conformity = Activity('Resistance Against Societal Norms', 20, 24, {'excitement': 0.2})

    play_with_son = Activity("Play with Desmond", 10, 12, {'joy': 1})
    study_with_daughter = Activity("Study with Argi", 16, 18, {'pride': 2})

    dinner_with_partner = Activity("Dinner with Arlene", 18, 20, {'love': 1, 'joy': 1})

    weather = Weather('hot')

    mark_day = DayInLife('Mark', weather=weather)

    mark_day.add_activity(family_time)
    mark_day.add_activity(work_time)
    mark_day.add_activity(reflection_time)
    mark_day.add_activity(resist_conformity)
    mark_day.add_activity(play_with_son)
    mark_day.add_activity(study_with_daughter)
    mark_day.add_activity(dinner_with_partner)

    print(mark_day.brief_day())

    simulation = Simulation([mark_day])
    simulation.run()

    with open('day_in_life.pkl', 'wb') as file:
        pickle.dump(mark_day, file)

    keys = list(mark_day.self.emotion_model.feelings_over_time.keys())
    values = list(mark_day.self.emotion_model.feelings_over_time.values())
    for i in range(len(keys)):
        plt.plot(values[i], label=keys[i])
    plt.legend()
    plt.show()

    with open('day_in_life.pkl', 'rb') as file:
        day_in_life = pickle.load(file)

    print(day_in_life.summary())
```

<a href="https://colab.research.google.com/drive/1sDjZZV96ERij97TLh86emmIb_c8ir8r3?usp=sharing" target="_blank">Run the code on Google Colab</a>

As dawn breaks and the first sunrays touch the vibrant cityscape of Antipolo, I, Mark, a 32-year-old freelance software engineer, father, partner, and dreamer, awake to the ballet of life. Some days, life unfolds just as erratically as the tides of traffic along Marcos Highway, but the rhythmic predictability provides comfort, offers a melody to the background score of my life.

My fingers dance across the keyboard, crafting virtual worlds enshrined within lines of intricate code. Yet, the true symphony of my existence resounds through the rooms of our humble abode, orchestrated by the laughter of my children - Argi Denise, a thoughtful, brilliant 11-year-old, and playful Desmond, 6, whose energies transcend the limitations of age.

Engulfed in the laughter-echoed halls, time almost stands still, as if the hovering notes of Kamakawiwoʻole's beautifully stitched medley ['Over the Rainbow/What a Wonderful World'](https://www.youtube.com/watch?v=V1bFr2SWP1I&ab_channel=MountainAppleCompanyInc) were frozen in mid-air.

The complete embodiment of wonder is found not in grandeur, but in the simplest moments – the joyful cacophony of Desmond chasing after Argi in the park, the perpetual dance of shadows and light on the Mango trees surrounding us as the sun takes its nightly bow, and the embrace of Arlene's comforting hand, stirring a sense of rootedness amidst the winds of change. Life here in Antipolo, far from perfection, is a testament to resilience, to the power of dreams, to the romantic dance between struggle and hope painted by Israel's song.

As volatile and unpredictable as life can be, there is power and beauty in its constancy. The somnolent lull succeeding the lively hunts of the day brings with it a quiet symphony, the unvoiced whispers of the city. I see a silent canvas – painted with dreams of a farther horizon, the longed-for tomorrow. This city, my home, living its own narrative, is a silent actor in the tale of our lives, shaping us with an indelible mark each day.

Antipolo – with its pulsating heart, warmed by the tropical sun, teeming with kindred souls – is more than just a city. It's an anchor, tethering me to my roots, under the shadow of the grand Cathedral, shaping my identity, fostering a place of belonging. The same streets that nurture Desmond's laughter, the markets enriching our daily table, the very air we breathe, each form a paragraph in the story of our existence.

Joy, hope, dreams adorn the landscape, but so do struggles, fears, and unfulfilled yearnings. As I look at the starlit sky over Antipolo, Desmond's laughter syncopating with Argi's poetic musing, the narrative of Kamakawiwo'ole’s song echoes through my heart. It’s a tuneful recognition of life's dazzling moments interwoven with its somber shades of grey – much like the city enveloping us, much like life itself, each poignant note reverberating, whispering our collective affirmation, "Yes. What a wonderful world it is."

In the end, it's the symphony of laughter and tears, triumphs and tribulations, dreams realized and unfulfilled that tell our story. And through the chapters, across the verses, the city of Antipolo remains our silent companion, reflecting the universal harmonies of life's ever-changing song.