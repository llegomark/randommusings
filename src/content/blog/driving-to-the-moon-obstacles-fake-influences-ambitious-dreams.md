---
author: Mark Anthony Llego
pubDatetime: 2022-05-11T04:35:23Z
title: "Driving to the Moon: Navigating Obstacles, Fake Influences, and Ambitious Dreams"
postSlug: driving-to-the-moon-obstacles-fake-influences-ambitious-dreams
featured: false
draft: false
tags:
  - personal
ogImage: "https://llego.dev/assets/418af944-3455-44c9-8210-c27d164efb53.jpg"
description: "Embark on a hilarious and ambitious road trip as we navigate through obstacles, face fake influences, and relentlessly pursue our dreams of success. Inspired by Nik Makino's song Moon, join us on a journey filled with self-belief and determination."
---

```python
import nltk
import random
from nltk.corpus import stopwords
from wordcloud import WordCloud
import matplotlib.pyplot as plt

nltk.download('punkt')
nltk.download('stopwords')

words_list = ["ambition", "determination", "self-belief", "success", "struggle", "perseverance",
              "obstacles", "endurance", "faith", "hardship", "confidence", "motivation",
              "achievement", "courage", "potential", "initiative", "goal", "fake", "influence",
              "persistence", "progress", "effort", "overcome"]

random.shuffle(words_list)

narrative = ' '.join(words_list)

words = nltk.word_tokenize(narrative)

stop_words = set(stopwords.words("english"))
filtered_words = [word for word in words if word.casefold() not in stop_words]

wc = WordCloud(background_color="black", max_words=100, contour_color='steelblue')

wordcloud = wc.generate(' '.join(filtered_words))

plt.figure(figsize=(10,10))
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis("off")
plt.show()

```

![Moon](https://llego.dev/assets/moon-1.png)
![Moon](https://llego.dev/assets/moon-2.png)
![Moon](https://llego.dev/assets/moon-3.png)
![Moon](https://llego.dev/assets/moon-4.png)
![Moon](https://llego.dev/assets/moon-5.png)
![Moon](https://llego.dev/assets/moon-6.png)

As the tropical sun dipped beneath the horizon and the flickering lights of Manila came alive, I found myself behind the wheel of my aging jeep, surveying the path in the rear-view mirror. I was knee-deep on a journey plastered with trials yet held a dream - an ambition as grand as the sky above, a quest as audacious as a trip to the moon. As Nik Makino's voice resounded through my rusty speakers with a familiar chorus, "Sa'n ka punta to the moon," those words echoed my silent aspirations.

The drive was long, peppered with the familiar buzz of honking jeepneys, the vibrant scent of roasting lechón, and the soft glimmer of the radiant moon leading the way. Manila was more than just my city; it was a labyrinth – a whirlwind of noise, color, and ceaseless vitality. Amidst its energy, it presented a trail of temptations, distractions, and false influences, masquerading as intoxicating shortcuts to the top.

"Bawal ang tus at peke sa byahe," as the song resonated, was my unwavering motto. I chose tenacity over cheap cuts, authenticity over pretense, and pushing away forces that threatened to steer my journey off-course. Every dismissal reminded me that I traveled not just for the destination but for a journey valid in its struggle and admirable in its authenticity.

The mirror reflected a man whose eyes sparkled with stubborn resilience, "mga mata namumula." I poured my heart into creating a rap empire out of the slums of Tondo. My songs, raw and spirit-ed, echoed the hardships of countless others – the street vendors, tricycle drivers, orphans – all striving to replace barren plates with a taste of prosperity.

I had seen friends take the easy path, drawn towards the mirage of unearned fame and quick success. Yet, I chose to separate myself: "Iwan ‘yung dating mga kasabay." Their failure was a harsh reminder that patience was as crucial as effort and talent in this conquest game.

Tara bumyahe pa-ulap," I whispered to the city, promising to add our stories to the star-lit canvas. The jeep's engine thrummed, mirroring my pulse as if we shared the thrill of our moonshot mission.

I had critics – countless eyes watching me, expecting a downfall. But their watchful gaze transformed into a fuel propelling me further. Their skepticism metamorphosed into my stubborn defiance. “Malamang ay ‘di nila nagagawa." What they deemed impossible, I perceived as a challenge – one I gladly accepted with audacious determination.

I yearned to reach the top, not just for selfish conquest, but to paint a vivid picture for the children in Tondo, to show them that impossible is a word only found in the dictionary of the fearful. Strive, hustle, and keep going – until the moon is under your feet and the stars are within your reach.

Every stretch of the road, every turn, and every uphill battle became a metaphor for my struggle—my pursuit of success. Each mile traversed echoed my relentless self-belief, the vehicle symbolizing my persistent efforts, the moon – an embodiment of my dreams, looming close yet far, spurring me to push harder, driving me closer to my destination.

Throughout this nocturnal journey, the moon – clear and bright, a silent companion on my road trip – witnessed my transformation. From being desperate for a quick ride to the top, I saw myself mature into someone appreciating the expedition, fueled by ambition, steeped in self-belief, and barred by no obstacle.

The playlist returned to Makino's anthem, "Sa'n ka punta to the moon." This time, the question didn't feel eerie but strangely comforting. I was already on that road, zooming towards the moon and beyond, on my way to etch my narrative.

<div class="video-container">
  <iframe width="736" height="315" src="https://www.youtube.com/embed/I8PuR6RkrTU?si=7vL4IYA-yqBY1_Gh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
