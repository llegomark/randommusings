---
author: Mark Anthony Llego
pubDatetime: 2023-09-16T17:10:11Z
title: "The Silent Symphony of Alienation: A Tale of Self-Acceptance"
postSlug: silent-symphony-alienation-tale-self-acceptance
featured: true
draft: false
tags:
  - personal
ogImage: "https://llego.dev/assets/8634f1a7-4b35-4487-960a-8fce80472fd9.jpg"
description: "Explore the raw, emotional voyage of a man wrestling with feelings of estrangement and self-doubt. This powerful narrative delves into the intricacies of the human emotional sphere, invoking the spirit of Radiohead's 'Creep'. Discover the complexities of yearning, rejection, resilience, and the eventual epiphany of self-acceptance."
---

```python
import random
import matplotlib.pyplot as plt
import pickle

class Self:
    def __init__(self, resilience: int, sensitivity: int, optimism: int):
        self.attributes = {
            "resilience": resilience,
            "sensitivity": sensitivity,
            "optimism": optimism
        }
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
        attr_mod = abs(attr_mod)  # ensure attr_mod is non-negative
        delta = 0
        while delta == 0:  # Avoid delta is zero
            delta = random.randint(-attr_mod, attr_mod+1)

        for key, intensity in indicators.items():
            indicators[key] = max(0, min(10, intensity + delta))
            print(f"{key.capitalize()} intensity: {indicators[key]}")
            over_time[key].append(indicators[key])

    def feel(self):
        attr_mod = self.attributes["resilience"] if self.feelings["fear"] < 5 else self.attributes["sensitivity"]
        self.calc_delta_and_update(self.feelings, attr_mod, self.feelings_over_time)

    def desire(self):
        attr_mod = self.attributes["optimism"] if self.desires["acceptance"] < 5 else -self.attributes["resilience"]
        self.calc_delta_and_update(self.desires, attr_mod, self.desires_over_time)

    def experience(self, event):
        self.experiences.append(event)
        for item in event.impacts:
            if item in self.feelings:
                self.feelings[item] += event.intensity
            elif item in self.desires:
                self.desires[item] -= event.intensity

    def change_states(self, states: dict):
        for experience in self.experiences[-5:]:
            for impact in experience.impacts:
                if impact in states:
                    states[impact] += random.randint(-2, 2)

    def interact(self, other):
        relationship = self.relationships.get(other, {"positivity": 5})
        positivity = relationship["positivity"]
        interaction_effect = {'self': 'joy', 'other': 'joy'} if positivity >= 5 else {'self': 'sadness', 'other': 'joy'}

        for role, emotion in interaction_effect.items():
            person = self if role == 'self' else other
            person.feelings[emotion] += positivity if emotion == 'joy' else -positivity

        self.relationships[other] = {"positivity": positivity + 1}
        other.relationships[self] = {"positivity": positivity + 1}

    def plot_feelings_and_desires(self):
        fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 5))
        for ax, obj_in_dict, title_in_plot in zip((ax1, ax2), (self.feelings_over_time, self.desires_over_time), ('Feelings Over Time', 'Desires Over Time')):
            for item, values in obj_in_dict.items():
                ax.plot(values, label=item)
            ax.set_xlabel('Day')
            ax.set_ylabel('Intensity')
            ax.set_title(title_in_plot)
            ax.legend()
        plt.subplots_adjust(left=0.1, right=0.9, top=0.9, bottom=0.1)  # avoid overlap
        plt.show()
        return fig, None  # return fig to handle it in the save_state method

    def save_state(self, filename: str):
        fig, _ = self.plot_feelings_and_desires()
        plt.close(fig)  # close figure before dumping
        with open(filename, 'wb') as f:
            pickle.dump(self, f)

    @staticmethod
    def load_state(filename: str):
        with open(filename, 'rb') as f:
            return pickle.load(f)

    def __repr__(self):
        return f"Self(resilience={self.attributes['resilience']}, sensitivity={self.attributes['sensitivity']}, optimism={self.attributes['optimism']})"

class Event:
    def __init__(self, name: str, impacts: list, intensity: int):
        self.name = name
        self.impacts = impacts
        self.intensity = intensity

life_events = [
    Event("self-analysis", ["doubt", "fear"], 2),
    Event("wearing_mask", ["acceptance"], 3),
    Event("door_closed", ["rejection"], 5),
    Event("realization", ["acceptance", "belonging"], -5)
]

people = [Self(resilience=2, sensitivity=1, optimism=3) for _ in range(5)]

for index, person in enumerate(people):
    print(f"\nNew day for person with resilience {person.attributes['resilience']}, sensitivity {person.attributes['sensitivity']}, and optimism {person.attributes['optimism']}.")

    random_events = random.sample(life_events, 2)
    for event in random_events:
        print(f"\nExperiencing: {event.name}")
        person.experience(event)
        person.feel()
        person.desire()

    interaction = random.choice(people)
    if interaction != person:
        print(f"\nInteracting with another.")
        person.interact(interaction)
        person.feel()
        person.change_states(person.feelings)
        person.change_states(person.desires)

    fig, _ = person.plot_feelings_and_desires()

    person.save_state(f'person_{index}_state.pickle')
```

<a href="https://colab.research.google.com/drive/11aeZXJq14LPMWe-iKOPkQfsOevUHKXHQ?usp=sharing" target="_blank">Run the code on Google Colab</a>

Every day felt like a quest, an agonizing journey towards self-acceptance and belonging. I was treading on a path that seemed more like quicksand than solid ground, each cautious step drawing me deeper into the icy chasm of self-doubt, loneliness, and alienation. A chasm where comfort was a foreign concept, and emulating the melody of <a href="https://www.youtube.com/watch?v=XFkzRNyygfk" target="_blank">Radiohead's "Creep,"</a> my heart echoed, "I'm a creep, I'm a weirdo. What the hell am I doing here? I don't belong here."

My eyes darted from face to face, each one a stark reminder of a world I didn't belong to. A world that seemed to glide effortlessly in sunshine, while my existence trailed behind in shadows. Everyone seemed so radiant, so enviably perfect that their brilliance numbed my vision. I was a mere silhouette within their spectral glow, ['yearning to be seen, to be noticed'](https://llego.dev/posts/unseen-tapestry-souls-quest-authentic-recognition/). However, my anxieties continuously buried me within unseen corners.

I often found myself standing in front of the mirror, analyzing my reflection through a shattered lens of self-worth. My skin turned into a repellent canvas of self-rejection that made me cry; I desired a metamorphosis. A perfect body that could shoulder a perfect soul, to finally validate my existence, to stir the momentum of my life towards control. Such was the impact of the ['societal puppet strings'](https://llego.dev/posts/dismantling-bricks-conformity-unyielding-resistance-societal-norms/) that I wanted to dance according to their tune rather than orchestrate my symphony.

These puppet strings tugged at my heartstrings every day, playing a melancholic symphony of consequent disappointment. My chest was a hollow cavity echoing with unfulfilled dreams. I wore masks, veiling my true self behind layers of pretentious flamboyance — a facade to fit in, to melt into the crowd. But the masks felt heavy, weighing down my true identity, muffling my authenticity beneath their grimacing smiles.

Trapped within this facade, I craved to be noticed when I was absent — a desire equally giving birth to an overpowering fear. The fear of rejection, of being overlooked, of being left to rot in my shell of perceived imperfection. The words "I wish you would notice when I'm not around," playing on an infinite loop within the confines of my mind, were a tangible manifestation of that silent plea.

Every door that closed behind someone I wished to connect with was a dagger to my isolated existence. The echoes of footsteps moving away from me overpowered the throbbing silence within me, fueling the already ablaze torch of self-rejection. Each departure felt like an affirmation of my insecurities, of my peculiarities that didn't resonate with the symphonies of the world outside.

There were times when I found myself nearly drowned within this abyss of desolation. But in those moments, a glimmer of bitter acceptance surfaced. They had the right to walk their way, chase their happiness, even if it wasn't aligned with me. It was a harsh realization, a harsher acceptance, choking me with the brutal truth of my alienation within my creepiness. Of not being what they wanted or needed.

Nevertheless, this acceptance harbored a strangely powerful grit—an epitome of resilience amidst the chaos of emotions. Like the ceaseless character in Radiohead's "Creep," I was caught in an endless orbit of frustration, self-deprecation, and desperation. An orbit that seemed dauntingly infinite, yet held a promise of an unfamiliar territory beyond the horizon—an elusive realm of self-love and self-acceptance.

In this orbit, the echo "I don't belong here" gradually transformed into a query rather than a statement—a question I believed I was on the path to find an answer to, delving deep into the endless uncertainty of existence, riding the rough waves of the hauntingly beautiful melody of Radiohead's "Creep."

> You should always be yourself. Unless you can be Batman. Then always be Batman.
>
> \- Unknown

**Disclaimer:**

The Python code and accompanying narrative provided here are for educational and illustrative purposes only. The code represents a fictional and simplified scenario of a person's emotional experiences and interactions. It does not provide professional or psychological advice, and its accuracy in modeling human emotions is limited. This code should not be used as a basis for making real-life decisions or assessments of mental health.

**Additional notes:**

- The code includes random events, interactions, and emotional changes that are fictional and simplified for demonstration purposes.
- The narrative contains personal reflections and emotions, which are fictional and created for the storytelling aspect of the code.

**Usage:**

You are encouraged to explore and modify the code for learning and experimentation. However, please remember that it is not suitable for making real-life assessments of emotions, mental health, or relationships.

**Questions?**

If you have any questions about the code, please feel free to ask. You can reach me at [markllego@gmail.com](mailto:markllego@gmail.com).
