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
import matplotlib.pyplot as plt
import pickle
from abc import ABC, abstractmethod

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
    def __init__(self, name, start_time, end_time):
        self.name = name
        self.start_time = start_time
        self.end_time = end_time

    def duration(self):
        return self.end_time - self.start_time

class DayInLife:
    def __init__(self, name, available_hours=24):
        self.name = name
        self.activities = []
        self.available_hours = available_hours
        self.self = Self(resilience=2, sensitivity=1, optimism=3)
        self.society = Society()
        self.individual = Individual(['faithful son', 'devoted partner', 'father of two'], ConformingBehavior())

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
        day_parts = {activity.name: activity.duration() for activity in self.activities}
        total_hours = sum(day_parts.values())
        if total_hours != 24:
            return "Oops! The total hours do not add up to a full day (24 hours)."
        else:
            return f"In a typical day, {self.name} spends {day_parts['Family Time']} hours with his family, " \
                   f"{day_parts['Work Time']} hours working, " \
                   f"{day_parts['Self-Reflection Time']} hours reflecting on life, and " \
                   f"{day_parts['Resistance Against Societal Norms']} hours dreaming about the future."

    def resist_conformity(self):
        for i in range(24):  # Simulating day as 24 hours
            self.individual.act(self.society)
            self.self.feel()  # Adding feelings change during resistance

    def summary(self):
        feelings_summary = ", ".join(f"{feeling}: {level[-1]}" for feeling, level in self.self.feelings_over_time.items())
        return f"Summary of {self.name}'s day:\nAvailable Hours: {self.available_hours}\nFinal Feelings: {feelings_summary}"

class Self:
    def __init__(self, resilience: int, sensitivity: int, optimism: int):
        self.attributes = {"resilience": resilience, "sensitivity": sensitivity, "optimism": optimism}
        self.init_feelings_and_desires()
        self.experiences = []
        self.relationships = {}
        self.feelings_over_time = self.init_over_time(self.feelings)
        self.desires_over_time = self.init_over_time(self.desires)

    def init_feelings_and_desires(self):
        init_value = 10
        feelings_keys = ["doubt", "fear", "rejection", "joy", "excitement", "sadness", "anger"]
        desires_keys = ["acceptance", "belonging", "recognition", "achievement"]
        self.feelings = {key: init_value for key in feelings_keys}
        self.desires = {key: init_value for key in desires_keys}

    def init_over_time(self, indicator: dict):
        return {key: [value] for key, value in indicator.items()}

    def calc_delta_and_update(self, indicators: dict, attr_mod: int, over_time: dict):
        attr_mod = abs(attr_mod)
        delta = 0
        while delta == 0:
            delta = random.randint(-attr_mod, attr_mod+1)
        for key, intensity in indicators.items():
            noise = random.gauss(0, 1)  # Add a random noise factor
            indicators[key] = max(0, min(10, intensity + delta + noise))
            over_time[key].append(indicators[key])

    def feel(self):
        attr_mod = self.attributes["resilience"] if self.feelings["fear"] < 5 else self.attributes["sensitivity"]
        self.calc_delta_and_update(self.feelings, attr_mod, self.feelings_over_time)

    def desire(self):
        attr_mod = self.attributes["optimism"] if self.desires["acceptance"] < 5 else -self.attributes["resilience"]
        self.calc_delta_and_update(self.desires, attr_mod, self.desires_over_time)

if __name__ == "__main__":
    # Instantiate and schedule the activities
    family_time = Activity('Family Time', 0, 6)
    work_time = Activity('Work Time', 6, 14)
    reflection_time = Activity('Self-Reflection Time', 14, 20)
    resist_conformity = Activity('Resistance Against Societal Norms', 20, 24)

    mark_day = DayInLife('Mark')
    mark_day.add_activity(family_time)
    mark_day.add_activity(work_time)
    mark_day.add_activity(reflection_time)
    mark_day.add_activity(resist_conformity)

    # Brief the day and start resistance
    print(mark_day.brief_day())
    mark_day.resist_conformity()

    # Save the object in a file using pickle
    with open('day_in_life.pkl', 'wb') as file:
        pickle.dump(mark_day, file)

    # Plot feelings over time using matplotlib
    keys = list(mark_day.self.feelings_over_time.keys())
    values = list(mark_day.self.feelings_over_time.values())
    for i in range(len(keys)):
        plt.plot(values[i], label=keys[i])
    plt.legend()
    plt.show()

    # Load the object back from the file
    with open('day_in_life.pkl', 'rb') as file:
        day_in_life = pickle.load(file)

    # Print a summary of the deserialized day_in_life
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

**Disclaimer:**

The Python code provided is for educational purposes only and should not be used for any commercial or production purposes. The author of the code does not make any warranties, express or implied, regarding the accuracy, completeness, or usefulness of the code or the results of its use. The author is not liable for any damages or losses resulting from the use of the code.

**Additional notes:**

- The code is just a representation on the write-up and may not be an accurate or complete reflection of reality.
- The code is not thoroughly tested and may contain bugs.
- The code is not optimized for performance or scalability.
- The code should be used with caution and should be carefully reviewed before use.

**Usage:**

To use the code, simply run it in a Python interpreter. The code will simulate a day in the life of Mark, a 32-year-old freelance software engineer, father, partner, and dreamer, living in Antipolo, Philippines. The code will print a summary of Mark's day, including the activities he did and how he felt throughout the day.

**Questions?**

If you have any questions about the code, please feel free to ask. You can reach me at [markllego@gmail.com](mailto:markllego@gmail.com).
