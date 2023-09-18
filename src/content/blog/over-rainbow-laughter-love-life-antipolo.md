---
author: Mark Anthony Llego
pubDatetime: 2023-09-17T14:25:31Z
title: "Over the Rainbow: Of Laughter, Love, and Life in Antipolo"
postSlug: over-rainbow-laughter-love-life-antipolo
featured: false
draft: false
tags:
  - personal
ogImage: "https://llego.dev/assets/6cbad534-9ee2-4edd-b2a6-8f12bfb83627.jpg"
description: "Experience life's symphony through the lens of Mark, a multi-dimensional dreamer, partner, and father. Through laughter, struggles, and dreams, discover the portrait of his life painted against the vibrant cityscape backdrop of Antipolo. Dive into this narrative that mirrors not just one man's journey but the harmonious dance of universal experiences."
---

```python
import random
import pickle
from abc import ABC, abstractmethod
import matplotlib.pyplot as plt
from typing import Dict, List, Union

# Constants
MIN_EMOTION_INTENSITY = 0
MAX_EMOTION_INTENSITY = 10
DAY_HOURS = 24


class EmotionModel:
    """
    Class EmotionModel simulates the emotional model of a being with certain attributes, feelings, and desires.
    """

    @staticmethod
    def clamp_emotion(intensity: float) -> float:
        """
        Clamp the emotion intensity between the minimum and maximum values.
        """
        return max(MIN_EMOTION_INTENSITY, min(MAX_EMOTION_INTENSITY, intensity))

    def __init__(self, resilience: int = 2, sensitivity: int = 1, optimism: int = 3):
        self.attributes = {"resilience": resilience, "sensitivity": sensitivity, "optimism": optimism}
        self.init_feelings_and_desires()
        self.feelings_over_time = self.init_over_time(self.feelings)
        self.desires_over_time = self.init_over_time(self.desires)

    def init_feelings_and_desires(self):
        """
        Initializes feelings and desires to initial random values.
        """
        feelings_keys = ["doubt", "fear", "rejection", "joy", "excitement", "sadness", "anger", "irritation", "stress", "calm", "love", "loneliness", "concern", "pride", "disappointment", "surprise", "disgust", "anticipation", "trust", "envy", "guilt"]
        desires_keys = ["acceptance", "belonging", "recognition", "achievement"]
        self.feelings = {key: random.uniform(5, 15) for key in feelings_keys}
        self.desires = {key: random.uniform(5, 15) for key in desires_keys}

    def init_over_time(self, indicator: Dict[str, float]) -> Dict[str, List[float]]:
        """
        Initialize the time series result of an indicator with its initial value.
        """
        return {key: [value] for key, value in indicator.items()}

    def calc_delta_and_update(self, indicators: Dict[str, float], attr_mod: int, over_time: Dict[str, List[float]]):
        """
        Calculates new values for each indicator, updates their current state, and stores the outcome to their time series.
        """
        delta = random.gauss(0, attr_mod)
        noise = random.uniform(-1, 1)
        for key, intensity in indicators.items():
            indicators[key] = EmotionModel.clamp_emotion(intensity + delta + noise)
            over_time[key].append(indicators[key])

    def feel(self, time: int):
        """
        Simulates feelings and their change over time.
        """
        attr_mod = self.attributes["resilience"] if self.feelings["fear"] < 5 else self.attributes["sensitivity"]
        self.calc_delta_and_update(self.feelings, attr_mod, self.feelings_over_time)

        if 6 <= time < 18:  # Daytime adjustment
            self.feelings["excitement"] += 0.1
            self.feelings["sadness"] -= 0.1
        else:  # Nighttime adjustment
            self.feelings["excitement"] -= 0.1
            self.feelings["sadness"] += 0.1

    def apply_feeling_effect(self, feeling_effect: Dict[str, float]):
        """
        Changes feelings according to a particular feeling_effect.
        """
        for feeling, effect in feeling_effect.items():
            self.feelings[feeling] = EmotionModel.clamp_emotion(self.feelings[feeling] + effect)

    def desire(self):
        """
        Simulates desires and their change over time.
        """
        attr_mod = self.attributes["optimism"] if self.desires["acceptance"] < 5 else -self.attributes["resilience"]
        self.calc_delta_and_update(self.desires, attr_mod, self.desires_over_time)

    def major_event(self):
        """
        Simulates a major event where one negative and one positive feeling are affected.
        """
        negative_feelings = ["doubt", "fear", "rejection", "sadness", "anger"]
        positive_feelings = ["joy", "excitement"]
        negative_feeling = random.choice(negative_feelings)
        positive_feeling = random.choice(positive_feelings)
        self.feelings[negative_feeling] = EmotionModel.clamp_emotion(self.feelings[negative_feeling] + random.uniform(0, 2))
        self.feelings[positive_feeling] = EmotionModel.clamp_emotion(self.feelings[positive_feeling] - random.uniform(0, 2))
        self.feelings_over_time[negative_feeling].append(self.feelings[negative_feeling])
        self.feelings_over_time[positive_feeling].append(self.feelings[positive_feeling])

    def update_feelings(self, emotion_changes: Dict[str, float]):
        """
        Updates feelings according to some changes (common in interactions with other people).
        """
        for emotion, change in emotion_changes.items():
            self.feelings[emotion] = EmotionModel.clamp_emotion(self.feelings[emotion] + change)


class Human:
    """
    A simple class to encapsulate common attributes and behaviors of Child and Partner classes.
    """

    def __init__(self, name: str):
        self.name = name
        self.emotion_model = EmotionModel()

    def __str__(self):
        return f'{self.__class__.__name__}(name={self.name})'

    def random_event(self, emotions: List[str]):
        """
        A random event that changes certain feelings a Human has.
        """
        emotion_changes = {emotion: random.uniform(-1, 1) for emotion in emotions}
        self.emotion_model.update_feelings(emotion_changes)


class Child(Human):
    """
    Child, a type of Human, with a simple method to simulate a random event.
    """

    def __init__(self, name: str, age: int):
        super().__init__(name)
        self.age = age


class Partner(Human):
    """
    Partner, a type of Human, with a simple method to simulate a random event.
    Also keeps track of availability with a boolean out_of_town.
    """

    def __init__(self, name: str):
        super().__init__(name)
        self.out_of_town = False


class Behavior(ABC):
    """
    Abstract class Behavior offers a structure on how a certain behavior must be implemented.
    """

    @abstractmethod
    def act(self, identity, society):
        pass


class ConformingBehavior(Behavior):
    """
    Type of Behavior where the individual does not change identity and hence conforms to the society.
    """

    def act(self, identity: List[str], society: 'Society') -> List[str]:
        return identity


class RebelliousBehavior(Behavior):
    """
    Type of Behavior where the individual does not conform to the society and changes their identity.
    """

    def act(self, identity: List[str], society: 'Society') -> List[str]:
        non_conforming_aspects = ['vibrant colors', 'tender laughter of children', 'single strokes of defiance', 'subtle rebellion with partner', 'introspective growth']
        identity += non_conforming_aspects
        identity = [aspect for aspect in identity if aspect not in society.expectations]
        return identity


class Society:
    """
    Society class represents society's expectations on the Individual.
    """

    def __init__(self):
        self.expectations = ['faithful son', 'devoted partner', 'father of two', 'mechanical existence', 'suppressing individuality']


class Individual:
    """
    An Individual with a certain identity and behavior.
    """

    def __init__(self, identity: List[str], behavior: 'Behavior'):
        self.identity = identity
        self.behavior = behavior

    def modify_behavior(self, new_behavior: 'Behavior'):
        """
        Change the behavior of an individual.
        """
        self.behavior = new_behavior

    def act(self, society: 'Society'):
        """
        An individual acts (either conforming or rebelling, depending on behavior type) and changes the identity accordingly.
        """
        if set(self.identity).issubset(set(society.expectations)):
            print("\nConforming to societal norms. Starting resistance...\n")
            self.modify_behavior(RebelliousBehavior())
        self.identity = self.behavior.act(self.identity, society)
        print("Identity Updated: ", self.identity)
        if not isinstance(self.behavior, ConformingBehavior):
            print("\nSuccessfully resisted conformity and dismantled the oppressive bricks of societal norms.")
            print("Final Identity revealed: ", self.identity)


class Activity:
    """
    Activity encapsulates a certain activity happening in a day, with starting and ending times.
    """

    def __init__(self, name: str, start_time: int, end_time: int, feeling_effect: Dict[str, float] = None):
        self.name = name
        self.start_time = start_time
        self.end_time = end_time
        self.feeling_effect = feeling_effect

    def duration(self) -> int:
        """
        Calculate the duration of the activity.
        """
        return self.end_time - self.start_time


class Weather:
    """
    Weather class represents the daily weather and its effect on the Individual.
    """

    def __init__(self, weather_type: str):
        self.weather_type = weather_type

    def get_weather_effect(self) -> Dict[str, float]:
        """
        Return a dict representing the change in feelings due to the weather effect.
        """
        weather_effects = {
            'sunny': {'joy': 0.2, 'sadness': -0.2},
            'rainy': {'joy': -0.2, 'sadness': 0.2},
            'hot': {'irritation': 0.3, 'joy': -0.1},
            'cloudy': {'joy': -0.1, 'sadness': 0.1},
        }
        return weather_effects.get(self.weather_type, {})


class Self:
    """
    Self represents the feelings of the user of the system. It includes relationships with partner and children.
    """

    def __init__(self):
        self.emotion_model = EmotionModel()
        self.children = [Child("Desmond", 6), Child("Argi", 11)]
        self.partner = Partner("Arlene")

    def child_events(self):
        """
        Simulate events involving children, update their feelings, and affect the user's feelings.
        """
        for child in self.children:
            child.random_event(['joy', 'sadness', 'anger'])
            self.emotion_model.update_feelings(child.emotion_model.feelings)
        # Assuming having children makes you feel loved but a bit lonely
        self.emotion_model.feelings["love"] += 0.1
        self.emotion_model.feelings["loneliness"] += 0.1

    def partner_event(self):
        """
        Simulate events involving the partner, update their feelings, and affect the user's feelings.
        """
        self.partner.random_event(['joy', 'concern', 'anger'])
        self.emotion_model.update_feelings(self.partner.emotion_model.feelings)
        # Assuming being with the partner makes you feel loved but less lonely
        if not self.partner.out_of_town:
            self.emotion_model.feelings["love"] += 0.1
            self.emotion_model.feelings["loneliness"] -= 0.1


class DayInLife:
    """
    DayInLife represents a day in life simulation.
    """

    def __init__(self, name: str, available_hours=DAY_HOURS, weather=None):
        self.name = name
        self.activities = []
        self.available_hours = available_hours
        self.self = Self()
        self.society = Society()
        self.individual = Individual(['faithful son', 'devoted partner', 'father of two'], ConformingBehavior())
        self.weather = weather

    def add_activity(self, activity: 'Activity'):
        """
        Check if an activity fits into the day schedule. If yes, add it to activities.
        """
        if self.available_hours - activity.duration() < 0:
            raise ValueError("Not enough time available for this activity.")
        else:
            self.activities.append(activity)
            self.available_hours -= activity.duration()

    def adjust_schedule(self, activity_name: str, start_time: int, end_time: int) -> str:
        """
        Allow changing the schedule of the day, updating timings of a certain activity.
        """
        for activity in self.activities:
            if activity.name == activity_name:
                self.available_hours += activity.duration()
                activity.start_time = start_time
                activity.end_time = end_time
                self.available_hours -= activity.duration()
                return f"The schedule for {self.name}'s day was updated."
        raise ValueError(f"Activity {activity_name} does not exist.")

    def brief_day(self) -> str:
        """
        Provide a brief summary of time spent in each activity.
        """
        return f"In a typical day, {self.name} spends {self.activities[0].duration()} hours with family, {self.activities[1].duration()} hours working, {self.activities[2].duration()} hours reflecting, and {self.activities[3].duration()} hours dreaming."

    def resist_conformity(self):
        """
        Visualize human emotions, apply the weather effect, and other events (either normal or major)
        throughout the 24 hours of a day.
        """
        self.self.child_events()
        self.self.partner_event()
        for i in range(DAY_HOURS):  # Simulating the day
            self.individual.act(self.society)
            # major events occurring at hours divisible by 4 (0, 4, 8, 12....)
            if i % 4 == 0:
                self.self.emotion_model.major_event()
            else:  # normal event on other hours
                self.self.emotion_model.feel(i)
            # Apply the weather effect
            if self.weather:
                self.self.emotion_model.apply_feeling_effect(self.weather.get_weather_effect())
            # Apply the effect of all activities happening at the current hour
            for activity in self.activities:
                if activity.start_time <= i < activity.end_time and activity.feeling_effect:
                    self.self.emotion_model.apply_feeling_effect(activity.feeling_effect)

    def summary(self) -> str:
        """
        A summary of the day's events, feelings, and available time.
        """
        feelings_summary = ", ".join(f"{feeling}: {round(level[-1], 1)}" for feeling, level in self.self.emotion_model.feelings_over_time.items())
        return f"Summary of {self.name}'s day:\nAvailable Hours: {self.available_hours}\nFinal Feelings: {feelings_summary}"


# Simulation
class Simulation:
    """
    Simulation class enables simulating emotions and behavior of many individuals in parallel.
    """

    def __init__(self, individuals: List[DayInLife]):
        self.individuals = individuals

    def run(self):
        """
        Run the simulation for all individuals.
        """
        for individual in self.individuals:
            individual.resist_conformity()


if __name__ == "__main__":
    # Activities
    family_time = Activity('Family Time', 0, 6, {'joy': 0.1, 'sadness': -0.1})
    work_time = Activity('Work Time', 6, 14, {'stress': 0.3})
    reflection_time = Activity('Self-Reflection Time', 14, 16, {'calm': 0.2, 'anger': -0.2})
    play_with_son = Activity("Play with Desmond", 16, 18, {'joy': 1})
    study_with_daughter = Activity("Study with Argi", 18, 20, {'pride': 2})
    dinner_with_partner = Activity("Dinner with Arlene", 20, 22, {'love': 1, 'joy': 1})
    resist_conformity = Activity('Resistance Against Societal Norms', 22, 24, {'excitement': 0.2})
    # Weather
    weather = Weather('hot')
    # Mark's day in life
    mark_day = DayInLife('Mark', weather=weather)
    mark_day.add_activity(family_time)
    mark_day.add_activity(work_time)
    mark_day.add_activity(reflection_time)
    mark_day.add_activity(resist_conformity)
    mark_day.add_activity(play_with_son)
    mark_day.add_activity(study_with_daughter)
    mark_day.add_activity(dinner_with_partner)
    print(mark_day.brief_day())
    # Simulation
    simulation = Simulation([mark_day])
    simulation.run()
    # Save the simulation state
    with open('day_in_life.pkl', 'wb') as file:
        pickle.dump(mark_day, file)
    # Plot feelings over time
    keys = list(mark_day.self.emotion_model.feelings_over_time.keys())
    values = list(mark_day.self.emotion_model.feelings_over_time.values())

    for i in range(len(keys)):
        plt.plot(values[i], label=keys[i])

    plt.xlabel('Time')
    plt.ylabel('Intensity')
    plt.title('Feelings Over Time')
    plt.legend(title='Feelings')
    plt.show()
    # Load the simulation state and print summary
    with open('day_in_life.pkl', 'rb') as file:
        day_in_life = pickle.load(file)
    print(day_in_life.summary())
```

<a href="https://colab.research.google.com/drive/1sDjZZV96ERij97TLh86emmIb_c8ir8r3?usp=sharing" target="_blank">Run the code on Google Colab</a>

As dawn breaks and the first sunrays touch the vibrant cityscape of Antipolo, I, Mark, a 32-year-old freelance software engineer, father, partner, and dreamer, awake to the ballet of life. Some days, life unfolds just as erratically as the tides of traffic along Marcos Highway. Still, the rhythmic predictability provides comfort and a melody to my life's background score.

My fingers dance across the keyboard, crafting virtual worlds enshrined within lines of intricate code. Yet, the true symphony of my existence resounds through the rooms of our humble abode, orchestrated by the laughter of my children - Argi Denise, a thoughtful, brilliant 11-year-old, and playful Desmond, 6, whose energies transcend the limitations of age.

Engulfed in the laughter-echoed halls, time almost stands still, as if the hovering notes of Kamakawiwoʻole's beautifully stitched medley ['Over the Rainbow/What a Wonderful World'](https://www.youtube.com/watch?v=V1bFr2SWP1I&ab_channel=MountainAppleCompanyInc) were frozen in mid-air.

The complete embodiment of wonder is found not in grandeur but in the simplest moments – the joyful cacophony of Desmond chasing after Argi in the park, the perpetual dance of shadows and light on the Mango trees surrounding us as the sun takes its nightly bow, and the embrace of Arlene's comforting hand, stirring a sense of rootedness amidst the winds of change. Life here in Antipolo, far from perfection, is a testament to resilience, the power of dreams, and the romantic dance between struggle and hope painted by Israel's song.

As volatile and unpredictable as life can be, there is power and beauty in its constancy. The somnolent lull succeeding the lively hunts of the day brings a quiet symphony, the unvoiced whispers of the city. I see a silent canvas – painted with dreams of a farther horizon, the longed-for tomorrow. This city, my home, living its narrative, is a silent actor in the tale of our lives, shaping us with an indelible mark each day.

Antipolo – with its pulsating heart, warmed by the tropical sun, teeming with kindred souls – is more than just a city. It's an anchor, tethering me to my roots under the shadow of the grand Cathedral, shaping my identity, and fostering a place of belonging. The same streets that nurture Desmond's laughter, the markets enriching our daily table, and the very air we breathe each form a paragraph in the story of our existence.

Joy, hope, and dreams adorn the landscape, as do struggles, fears, and unfulfilled yearnings. As I look at the starlit sky over Antipolo, Desmond's laughter syncopating with Argi's poetic musing, the narrative of Kamakawiwo'ole's song echoes through my heart. It's a tuneful recognition of life's dazzling moments interwoven with its somber shades of grey – much like the city enveloping us, much like life itself, each poignant note reverberating, whispering our collective affirmation, "Yes. What a wonderful world it is."

Ultimately, the symphony of laughter and tears, triumphs and tribulations, dreams realized and unfulfilled tell our story. And through the chapters, across the verses, the city of Antipolo remains our silent companion, reflecting the universal harmonies of life's ever-changing song.
