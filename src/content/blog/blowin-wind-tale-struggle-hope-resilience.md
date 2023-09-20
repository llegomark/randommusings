---
author: Mark Anthony Llego
pubDatetime: 2023-09-20T15:58:55Z
title: "Whispers in the Wind: Unveiling the Struggles and Aspirations of a Nation"
postSlug: whispers-wind-unveiling-struggles-aspirations-nation
featured: true
draft: false
tags:
  - personal
ogImage: "https://llego.dev/assets/02117dd2-19f2-4715-8f7f-30bdf2b45ea1.jpg"
description: 'Explore the complex socio-political landscape of the Philippines through the eyes of a resilient 32-year-old man. Delve into the pressing issues of poverty, corruption, and the erosion of freedom, intertwined with the timeless melodies of Bob Dylan''s "Blowin'' in the Wind". Discover how the quest for justice, peace, and equality resonates with the struggles of everyday people in this thought-provoking narrative.'
---

```python
import time
import collections
from nltk.sentiment import SentimentIntensityAnalyzer
from typing import List, Dict, Tuple
import logging

logging.basicConfig(level=logging.INFO)

class Song:
    """
    Represents a song with its themes, lyrics, and questions for discussion.
    """

    def __init__(self, name: str, themes: List[str], lyrics: List[str],
                 questions: List[str]) -> None:
        """
        Initialize a Song object with its name, themes, lyrics, and questions.
        """
        self.name = name
        self.themes = themes
        self.lyrics = lyrics
        self.questions = questions
        self.user_responses = {}  # Store user responses in a dict
        self.sia = SentimentIntensityAnalyzer()

    def prompt_question(self, question: str) -> str:
        """
        Prompts the user with a question and returns their response.
        """
        print(question)
        time.sleep(2)
        user_input = input("Your answer: ")
        self.user_responses[question] = user_input  # Update user responses dict
        logging.info(f"User completed the question: {question}")
        return user_input

    def analyze_response(self, response: str, question: str) -> Tuple[int, Dict, int, bool]:
        """
        Analyze a single response and return the score, sentiment, interactivity, and relevance.

        """
        score = 0
        response_text = response.lower()

        # Makes the checks and scoring for the individual response.
        if any(theme in response_text for theme in self.themes):
            score += 2
        sentiment_score = self.sia.polarity_scores(response_text)
        interactivity_score = len(response_text.split())
        relevance_score = any(word in question.lower() for word in response_text.split())

        return score, sentiment_score, interactivity_score, relevance_score

    def analyze_answers(self) -> Tuple[int, List[Dict], List[int], List[bool]]:
        """
        Analyzes the user responses and returns the scores.
        """
        total_score = 0
        sentiment_scores = []
        interactivity_scores = []
        relevance_scores = []

        for question, response in self.user_responses.items():
            score, sentiment_score, interactivity_score, relevance_score = self.analyze_response(
                response, question)
            total_score += score
            sentiment_scores.append(sentiment_score)
            interactivity_scores.append(interactivity_score)
            relevance_scores.append(relevance_score)

        logging.info("User responses are analyzed.")
        return total_score, sentiment_scores, interactivity_scores, relevance_scores

    def generate_analysis(self, total_score: int, sentiment_scores: List[Dict],
                          interactivity_scores: List[int],
                          relevance_scores: List[bool]) -> str:
        """
        Generates the analysis message based on the given scores.
        """
        sentiment = 'positive' if sum([score['compound'] for score in sentiment_scores]) / len(self.user_responses) > 0 else 'negative'
        interactivity = sum(interactivity_scores) / len(self.user_responses)
        relevance = collections.Counter(relevance_scores)
        count_relevant = relevance.get(True, 0)

        analysis_msg = f"You have an average response length of {interactivity:.2f} words. "
        analysis_msg += f"{count_relevant} out of {len(self.user_responses)} of your responses contained key terms from our questions. "

        if total_score >= 6:
            analysis_msg += f"Your responses reflect a deep understanding and sincere concern for the themes of this song, presenting a general {sentiment} sentiment. "
            analysis_msg += "Keep exploring the themes around justice, freedom, and equality."
        elif total_score >= 3:
            analysis_msg += f"Your responses suggest an awareness and recognition of the themes of this song with a slightly more {sentiment} sentiment. "
            analysis_msg += "Further reflection and exploration can deepen your understanding of the themes."
        else:
            analysis_msg += f"Consider engaging with the song's themes more holding a slightly {sentiment} sentiment. Reflection on themes can help a lot."

        logging.info("Analysis message is generated.")
        return analysis_msg

    def discuss_song_themes(self) -> None:
        """
        Initiates the discussion and analysis of the song based on the provided questions.
        """
        for question in self.questions:
            self.prompt_question(question)
        total_score, sentiment_scores, interactivity_scores, relevance_scores = self.analyze_answers()
        analysis = self.generate_analysis(total_score, sentiment_scores, interactivity_scores, relevance_scores)
        print(analysis)

# Song-specific questions for understanding of the themes
questions = [
    "Can you give a brief summary of 'Blowin' In the Wind' in your own words?",
    "What does the phrase 'blowin' in the wind' mean to you in the context of this song?",
    "Can you relate 'Blowin' In the Wind' with a real-world social justice issue?",
    "How do the lyrics of 'Blowin' in the Wind' resonate with concepts of freedom?",
    "In your understanding, how does this song reinforce the theme of 'equality'?"
]

song_blowinInTheWind = Song(
    "Blowin' In the Wind",
    ['justice', 'freedom', 'equality'],
    ["How many roads must a man walk down / Before you call him a man?"],
    questions
)

# Initiate the discussion and analysis of the song
song_blowinInTheWind.discuss_song_themes()
```

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/MMFj8uDubsE?si=2UAun4BF4ZpYrfAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Dawn breaks, bathing my humble neighborhood in hues of gold. I stand at my front door, bearing witness to another day. The sun's modest warmth embraces my worn-out skin as the relentless strife for survival begins anew.

The faint echoes of Bob Dylan's 'Blowin' in the Wind' ply my ears from a forgotten radio perched on a ledge. I hum the melody, my heart resonating with the moral and social questions it poses—questions that, every day, grow even more pressing in the world around me.

On the cracked pavement, barefoot children with ragged clothes and shining eyes chase a makeshift plastic bottle ball. Their laughter echoes in the narrow, unpaved alleys of my world. They find joy amid the scarcity, an innocence unfettered by the lurking shadows of poverty. Yet, I can't help but wonder, **how many roads must a man walk down before you call him a man?**.

![Leni Robredo](/assets/44xH6ae2voCsrDPGR8qf.jpg)

Just then, a luxury car drives by, cutting a stark contrast against the dilapidated homes and a humble street vendor peddling his fishballs; it whizzes past. The vendor, clad in simple clothing and bearing the sweat of his honest efforts, is a stark counter-image to the car's occupant. Inside the vehicle, a man peruses a newspaper with stoic calm, unaware, or perhaps indifferent, to the glaring injustices his sheltered, air-conditioned haven conceals.

The street scene paints a vivid juxtaposition of society's extremes, from the hardworking fishball vendor confronting life's struggles firsthand to the car's insulated inhabitant. The gap between the wealthy few and the embedded many is as wide as the sea. I can't help but ponder, **how many seas must a white dove sail before she sleeps in the sand?**

![Leni Robredo](/assets/7iuzVrHpto8vw3XQJfZ2.jpg)

News of corruption seeps into my consciousness, boiling my blood. Unjust decisions are put into motion with indifference seemingly described by ink on the local newspaper—nonchalant, unfeeling. I can't help but frame my frustration into the melody whispering from the ledge, **how many times must the cannonballs fly before they're forever banned?**

Still, I can't escape the belief that **the answer, my friend, is blowin' in the wind**. These problems, long-standing as the mighty mountains, could crumble with time and collective effort.

![Leni Robredo](/assets/cqsrVtT5Tqx2zysBHXXq.jpg)

As day turns to dusk, I pass by the crowded marketplace, a microcosm of dogged resilience and indomitable will. Laboring under the harsh sun from dawn to dusk, vendors vend their goods with a glimmer of hope etched onto their lined faces. They exist, and they thrive, their lives a testament to the stubborn will of humanity. My thoughts form lyrics as I see their plight: **how many years can some people exist before they're allowed to be free?**

At night, while the world sleeps, I lie awake, aimlessly tracing the cracks on my ceiling. The muted whispers of fear for our dwindling freedom of speech haunt my thoughts. Online, I see posts deleted, voices stifled, and truth suppressed. The ceiling fan hums in sync with my silent frustrations, **and how many times can a man turn his head and pretend that he just doesn't see?** Underneath the automated replies and sanitized news lies a dense silence, a void of truth.

Yet, I also find solace in these quiet hours. The moon, our universal spectator, gifts me an unveiled, unhindered view of the sky, a welcome respite from the harsh questions of the day. As I gaze at its radiant solitude, I find myself wrestling with a nagging question, **how many times must a man look up before he can see the sky?**

But the moon is a listener, too. Its patient luminescence draws my thoughts to the cries that often go unheard. The dismissed pleas for equality, justice, the covert struggles of each day – all hidden beneath the din of a bustling world, **and how many ears must one man have before he can hear people cry?**

Before the break of dawn, I think of the nameless individuals who've paid the price for daring to question, dream, and expect fair skies. Too many, perhaps. Yet their cries, echoing in the wind, reverberate with a resonance that is impossible to ignore. **Yes, and how many deaths will it take 'til he knows that too many people have died?**

The wind blows, a whimsical reminder of the narrative's leitmotif—the answer. I realize that solutions are not bottled messages to be discovered by beachcombers but an amalgamation of change and time.

As I drift towards the sanctuary of sleep, Dylan's anthem echoes faintly, an ethereal lullaby for my unrest—the answer, my friend, is **_indeed blowin' in the wind._**

![Leni Robredo](/assets/95ddkjZbXVDE9ZQgAG2o.jpg)
