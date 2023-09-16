---
author: Mark Anthony Llego
pubDatetime: 2023-09-17T00:41:17Z
title: "Dismantling the Bricks of Conformity: An Unyielding Resistance Against Societal Norms"
postSlug: dismantling-bricks-conformity-unyielding-resistance-societal-norms
featured: false
draft: false
tags:
  - personal
ogImage: "https://llego.dev/assets/95aaec2e-0980-4bbe-b39d-34ff00a54562.jpg"
description: "Embark on a personal journey exploring societal pressures and the power of individuality. Drawing inspiration from Pink Floyd's 'Another Brick in The Wall,' we reflect on resisting conformity, one brick at a time."
---

```python
from abc import ABC, abstractmethod

class Behavior(ABC):
    @abstractmethod
    def act(self, identity, society):
        pass

class ConformingBehavior(Behavior):
    def act(self, identity, society):
        # All aspects of identity exists in society, so no need to change the identity.
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
        if set(self.identity).issubset(set(society.expectations)):  # Checking for conformity
            print("\nConforming to societal norms. Starting resistance...\n")
            self.modify_behavior(RebelliousBehavior())

        self.identity = self.behavior.act(self.identity, society)

        print("Identity Updated: ", self.identity)

        if not isinstance(self.behavior, ConformingBehavior):
            print("\nSuccessfully resisted conformity and dismantled the oppressive bricks of societal norms.")
            print("Final Identity revealed: ", self.identity)

if __name__ == "__main__":
    society = Society()
    narrator = Individual(['faithful son', 'devoted partner', 'father of two'], ConformingBehavior())
    narrator.act(society)

```

As the golden hues of the day surrender to twilight, I find myself caught in a constant battle. The expectations placed upon me by societal norms weigh heavily—being a faithful son, a devoted partner and a father of two. Yet beneath these labels, a sea of rebellion surges within me, resisting the perpetual pressure to conform to the prefabricated mold that society has drawn for me.

The phantasm of my children, weaving innocent tales amidst shadows of laughter, echoes in my heart. Their unbroken spirit, unmarred by societal orthodoxies, brings forth an ['image of myself'](https://llego.dev/posts/silent-symphony-alienation-tale-self-acceptance/) before life added bricks — birthed forth by redundant societal norms.

In the midst of this internal turmoil, I have started to wonder: are these bricks entirely oppressive? Or could they be seen otherwise...

These bricks that my heart bears the weight of are emblematic of an oppressive education system—a system devoid of creativity, fostering a mechanical existence at the cost of individuality. Each brick—forged in classrooms, defined by abiding boxes ticked with prefabricated notions—finds a place in the wall I've built.

Defined by societal yardsticks, every milestone adds another brick to my wall, each one further suppressing my individuality—the vibrant colors I bring to life. Amidst the conforming monotones, my life echoes the ashen refrain of Pink Floyd's <a href="https://www.youtube.com/watch?v=HrxX9TBj2zY" target="_blank">"Another Brick in The Wall (Part II)"</a>, 'we don't need no education,' a chorus that reverberates in my soul.

These moments of rebellion spark when I watch my five-year-old son and eleven-year-old daughter immerse themselves in the idiosyncratic realms of Minecraft. Simultaneously, visits to SM Masinag with my partner, the ebb and flow of contemporary life sandwiched between purchased commodities and stolen kisses, steer our lives towards a subtle rebellion.

The oppressive education system, mirrored in society's insatiable penchant for control, is represented in the wall I've built brick by brick. As I acknowledge this paradox, I realize I am teetering on the border of revolt. By daring to strip bare societal masks and listening to the dulcet tones of defiant individuality, I begin to dismantle my bricks—the bricks that fortify my fortress of conformity.

My introspection serves as the compass for this rebellion, guiding me to embrace the tender laughter of my children as a symbolic song of resilience against the system. Their innocence helps redefine my bricks, each brick a testament to personal growth and ['authentic existence'](https://llego.dev/posts/unseen-tapestry-souls-quest-authentic-recognition/), instead of oppressive milestones.

Perhaps the wall is a canvas — a testament to our personal narrative and individualistic journey, not the milestones dictated by societal treats. By embracing a paradigm shift in perception, it's possible to morph the wall of oppression into a testament of our unique journeys.

Brick by brick, I've built a barrier for myself—a fortress against the inquisitive eyes of society. As I stand tall within these self-tailored walls, I sense a stirring rebellion. Can I dismantle these walls brick by brick, embracing authenticity and individuality to rewrite this narrative?

I am not just another brick succumbing to the shadows of societal norms. I am an individual vibrant with colorful strokes, daring to resist the monochrome tones of conformity. We aren't mere bricks lined in life's oppressive wall. We are vibrant, audacious hues, staining societal grey with our rebellion. Hence, brick by brick, we dismantle imposed walls of conformity, revealing the brilliant aurora of individuality against the monochrome sky of societal norms.
