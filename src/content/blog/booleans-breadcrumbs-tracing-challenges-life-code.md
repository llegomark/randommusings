---
author: Mark Anthony Llego
pubDatetime: 2023-09-16T02:36:47Z
title: "Booleans and Breadcrumbs: Tracing Challenges through Life and Code"
postSlug: booleans-breadcrumbs-tracing-challenges-life-code
featured: false
draft: false
tags:
  - personal
ogImage: "https://llego.dev/assets/b02084ad-436e-4a9e-994a-c5778cafca33.jpg"
description: "Dive into 'Booleans and Breadcrumbs: Tracing Challenges through Life and Code', a profound narrative exploring the intersection of life's burdens within the sphere of coding. Walk through a software engineer's genuine experiences of solving life's complex problems, mirrored in a creative Python code analogy."
---

```python
import networkx as nx
from random import choice, randint

class Burden:

    def __init__(self, tasks, subtasks, name):
        self.dag = nx.DiGraph()
        self.name = name
        self.dag.add_nodes_from(tasks)
        self.subtasks = subtasks  # Subtasks representing underlying complexities

        # Add edges to graph
        for task in tasks:
            n_edges = randint(1, len(tasks) // 2)
            edges = [(task, choice(tasks)) for _ in range(n_edges)]
            self.dag.add_edges_from(edges)

        if not nx.is_directed_acyclic_graph(self.dag):
            raise ValueError('The tasks form a cyclic graph!')


class Person:

    def __init__(self, name, abilities):
        self.burdens = []
        self.name = name
        self.abilities = abilities

    def add_burden(self, burden):
        self.burdens.append(burden)
        print(f"{self.name} has a new burden: {burden.name}.")

    def carry_burdens(self):
        for burden in self.burdens:
            print(f"{self.name} is carrying the burden {burden.name}.")
            solved_tasks = []
            for task in nx.topological_sort(burden.dag):
                if task in self.abilities:
                    solved_tasks.append(task)
            print(f"{self.name} managed to solve {len(solved_tasks)} tasks from {burden.name}.")
            print(f"But, there are still {len(burden.subtasks)} subtasks underlying, making it a complex burden.")

tasks_work = ["debug", "design", "test", "document"]
tasks_life = ["play_with_Desmond", "help_Argi_Denise", "support_Arlene"]

subtasks_work = ["optimize_code", "rewrite_script", "retest"]
subtasks_life = ["understand_Desmond", "talk_to_Argi_Denise", "comfort_Arlene"]

work_burden = Burden(tasks_work, subtasks_work, "Work Burden")
life_burden = Burden(tasks_life, subtasks_life, "Life Burden")

mark_abilities = ["debug", "design", "play_with_Desmond", "support_Arlene"]

mark = Person("Mark", mark_abilities)

mark.add_burden(work_burden)
mark.add_burden(life_burden)

mark.carry_burdens()
```

As I step out of the rambling jeepney, I find myself standing before the streets of Pleasant in Antipolo City. The city's nocturnal symphony, composed of the distant chatter of street vendors, the occasional rumbling tricycles, and the somber whisper of leaves rustling in the night breeze greets me — its harmonious cacophony strangely akin to an age-old lullaby. I'm bone-tired, feeling like I've hauled the weight of the world on my shoulder; the day's coding problems and the responsibility of feeding and keeping my family safe, weighing heavier than the heaviest metal.

Rows of houses, commercial spaces, and two-story apartments intermingling with schools unfold into a living cityscape. Each place humming with its own rhythm, each carrying a unique narrative of everyday life — comfort and conflict, love and loss, accomplishment and struggle. Amidst this vibrant backdrop, I find myself looking for respite, longing for some place to unburden the weight of my responsibilities.

I trudge towards a nearby alley and spot an old man, drowsily manning a sari-sari store counter, engulfed in the warm glow of a solitary fairy light. Between his unkempt beard and tired, narrowed eyes, he seems to be another soul lost in the maze of his ordinary existence. Seeking guidance, I muster up my strength to ask, "Hey, mister, can you tell me where a man might find some peace?" The man lethargically lifts his eyes, gives me a pale grin, and shakes his head — a silent declination. Perhaps, he too carries his own burdens.

Heading home to our rented apartment, the vibrant laughter of my son Desmond, and the sweet, mature calmness of my daughter Argi Denise pull me out of my weariness. Arlene, their mother, my partner, my rock, welcomes me home with warmed dinner and a comforting smile, a subtle reminder to take a load off and breathe. To her, it feels like a free release, but to me - each laughter, each comforting smile - they're burdens of their own, ones I invite, ones I welcome.

In the light of day and in the ['darkness of reality'](https://llego.dev/posts/embracing-dark-fathers-ode-love-acceptance/), life becomes an incessantly heavy load I can't unload. Heavier by the day, by the hour, by experiences, by responsibilities. These external burdens, just like the worries coded into the deep recesses of my mind, only seem to multiply, setting dominoes of thoughts tumbling. But with every strain, every screaming muscle, every code that refuses to work, every tear Desmond sheds, every worry in Argi Denise's eyes, every strain in Arlene's smile — I take those burdens and like an old friend, I put them on my back.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/FFqb1I-hiHE?si=kFEG4gPhC3rMeNGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Late at night, wrecked by woes and ['battling demons of my own'](https://llego.dev/posts/echoes-evolution-dance-inner-demons/), I plunge into thought. Drawn towards the unknown, I find myself ['facing life's Carmen and the Deviling challenge side by side'](https://www.youtube.com/watch?v=FFqb1I-hiHE). Sirens of temptations ring in my ears; each code I write, each embraces challenge. Each quiet disappointment Arlene masks with a smile is a reminder of the devil lurking within my inadequacies. I choose to face them, said "hey, Carmen, come on", but just like life's challenges, Carmen has her own path and leaves me alone to face mine.

Some days, in the midst of ['solving complex coding problems'](https://llego.dev/posts/nocturnal-code-whimsy-everyday-magic-software-engineers-life/), a fleeting shadow seems to accompany me. This shadow, akin to Crazy Chester, follows me in the labyrinth of endless lines of code in my little workspace, or amidst the chaos of family responsibilities, whispering, "I will fix your servers if you take care of my queries, my bugs." I hesitantly approach, replying, "Wait a minute, Chester, you know I'm a peaceful man." Despite my hopeful denial, the request remains hanging in the digital air, another weight added to my load.

Life throws cannonballs and I catch them, hoping to stagger and recollect, hoping to ease my burdens on the inside ride down the road. Yet, to let go of even one, feels like failing Arlene, Argi Denise, and Desmond. Sinking low, knowing Arlene awaits, I strive to carry them, for Arlene sent me into this day with the soft regards of her kiss, her confiding whispers, her unwavering support, her reminder of my strength.

Carrying burdens is a paradoxical element of human life, where the weight makes you stagger yet makes you human. It's a constant act of balancing the weights down the line of existence, bound to the mundanity of the everyday. You help and you get helped. You support and you get supported. Perhaps, carrying that weight is what life is about. Perhaps that's how we learn. Perhaps that's how we grow. So, if you knock on my door, don't worry, there's space on this back of mine, space for your burdens, space for you, for me, and for all who journey alongside us.
