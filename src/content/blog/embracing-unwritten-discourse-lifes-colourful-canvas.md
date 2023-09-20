---
author: Mark Anthony Llego
pubDatetime: 2023-09-19T00:38:08Z
title: "Embracing the Unwritten: A Discourse on Life's Colourful Canvas"
postSlug: embracing-unwritten-discourse-lifes-colourful-canvas
featured: false
draft: false
tags:
  - personal
ogImage: "https://llego.dev/assets/c44188ac-71ca-42cc-af0c-e87b8992815f.jpg"
description: "Dive into the inspiring journey of a man tracing life's unpredictable routes. From childhood dreams to adult detours, imbibe how the philosophy of 'Whatever will be, will be' shapes life’s vibrant narrative."
---

```python
import matplotlib.pyplot as plt
import numpy as np

colors = ['red', 'sienna', 'goldenrod', 'olive', 'purple',
          'cadetblue', 'turquoise']

emotions = [
    "Mother's Love",
    "Yearning",
    "Uncertainty",
    "Fascination",
    "Metamorphosis",
    "Fatherhood",
    "Love and Unity"
]

x = np.random.rand(100)
y = np.random.rand(100)

emotion_indices = np.random.randint(0, len(emotions), size=100)

fig, ax = plt.subplots(figsize=(8, 6))

lines = []

for i in range(len(emotions)):
    indices = np.where(emotion_indices == i)
    scatter = ax.scatter(x[indices], y[indices], color=colors[i], label=emotions[i])
    ax.plot(x[indices], y[indices], color='gray', alpha=0.4)
    lines.append(scatter)

que_sera_x = 0.5
que_sera_y = 0.5

plt.text(
    que_sera_x,
    que_sera_y,
    "Que Sera, Sera",
    fontsize=12,
    ha='center',
    va='center',
    color='black',
    weight='bold'
)

plt.scatter(0.2, 0.3, color='salmon', marker='D', s=100, label="Inay Nating")
plt.scatter(0.8, 0.2, color='yellowgreen', marker='^', s=100, label="Itay Francing")
plt.scatter(0.4, 0.7, color='blue', marker='o', s=100, label="Mama Solmarie")
plt.scatter(0.6, 0.4, color='pink', marker='o', s=100, label="Mama Lyn Lyn")
plt.scatter(0.6, 0.7, color='slategray', marker='s', s=100, label="Computer Shop")

family = {
    "Arlene": (que_sera_x + np.random.uniform(-0.08, 0.08), que_sera_y + np.random.uniform(0.05, 0.15), 'cyan', 'heart', 150),
    "Desmond": (que_sera_x + np.random.uniform(-0.08, 0.08), que_sera_y + np.random.uniform(0.05, 0.15), 'violet', 'o', 150),
    "Argi": (que_sera_x + np.random.uniform(-0.08, 0.08), que_sera_y + np.random.uniform(0.05, 0.15), 'greenyellow', 'o', 150)
}
for name, (x, y, color, marker, size) in family.items():
    if marker == 'heart':
        plt.scatter(
            x,
            y,
            color=color,
            marker=(104, 0, 0),
            s=size,
            label=name
        )
    else:
        plt.scatter(
            x,
            y,
            color=color,
            marker=marker,
            s=size,
            label=name
        )

annotations = {
    "Basey, Samar": (0.27, 0.88),
    "Antipolo City": (0.5, 0.15),
    "Nursing": (0.35, 0.4),
    "Computer Shop": (0.68, 0.68),
    "Fatherhood": (0.25, 0.25),
    "Love and Unity": (0.65, 0.1)
}

for annotation, position in annotations.items():
    ax.annotate(
        annotation,
        position,
        xycoords='figure fraction',
        fontsize=10,
        ha='center'
    )

plt.legend(
    loc='center left',
    bbox_to_anchor=(1, 0.5),
    title="Legend"
)
plt.title("Vibrant Tapestry of Life")
plt.xlabel("X Coordinate")
plt.ylabel("Y Coordinate")

plt.tight_layout()
plt.show()
```

![Que Sera, Sera](https://llego.dev/assets/queserasera-1.png)

Stepping into the quiet of our Antipolo City apartment, <a href= "https://youtu.be/r0m9wr_o0Qg?si=vM1oyQujCKtv6nFa" target= "_blank"> "Whatever Will Be, Will Be (Que Sera, Sera)"</a> cradles my senses, awakening memories that dance through the years. Sit beside me, and let me share my story with you.

![Basey, Samar](https://llego.dev/assets/mBqd7TKJLRSWx6Pahw9N.jpg)

Growing up in Basey, Samar, a simple paradise steeped in the company of swaying coconut trees and the serenity of the river, my world was held together by the unwavering love of my mother (Mama Solmarie), my Lola (Inay Nating), and Lolo (Itay Francing). They were my sun, moon, and stars — yet, amid the love that surrounded me, there was an absence of a father that palpably lingered.

![Basey, Samar](https://llego.dev/assets/jUerf7W29UHQEjAtxwjb.jpg)
![Basey, Samar](https://llego.dev/assets/WL7WUfDr8DWHtm88brSi.jpg)

An image of him, a vague outline drawn from the whispered stories of elders and my mother's tear-streaked narratives, shadowed my journey. I remember my elementary days, feeling the sting of words when classmates mocked, "waray nim tatay," and envying the bonds I saw between fathers and sons during Parent-Teacher conferences. A collection of incomplete moments added fuel to the fire of my yearning.

At the crossroads of my youth, I made the leap from the coconut-laden coasts of Samar to the pulsing heart of Antipolo City. This sudden shift in my world was a step taken hand in hand with my grandparents while Mama, a public school teacher, stayed behind in Basey.

When I was young, my dream was to become a lawyer. However, time led me to pursue a different path - nursing. It wasn't inspired by a childhood dream but rather for practical purposes. My Tita, my legal mother, suggested this track due to the high demand and job security in nursing.

Even though I embarked on this journey with pure intentions, I soon felt confined rather than free. My decision became a restriction rather than a choice, and the promising opportunities faded, creating uncertainty and discontent.

Amidst these uncertainties, one place was my constant — the "Info Station Computer Rentals," owned by my legal parents. Becoming a regular face at the computer shop since my arrival in Antipolo, it was more than just a place of casual convenience or business. The haven introduced me to a realm beyond nursing, beyond textbooks.

My humble tasks of customer assistance slowly evolved into a fascination with the world that lived beyond the computer screen. The rhythm of programming languages sang me a melody different from that of nursing, and soon, my heart found synchronization with it. It didn't occur overnight, but over countless hours in front of these screens, a desire solidified, pulling me away from the path of nursing and anchoring me to the exciting world of zeros and ones.

This was also the time when I discovered the enchanting world of 'Ragnarok Online' in 2004. Those intricate digital landscapes housed epic adventures that beckoned me deeper into this enlightening cosmos of technology. Even today, these shared moments with fellow players from far and wide remain etched in my heart.

Now, as "Llego Printing Services," this place is more than just a computer shop. It's a symbol of my growth, evolution, and metamorphosis from the curiosity of a keyboard dabbler to a master of coding workflows, from virtual game battles to the real-life quest for professional aspirations.

When adulthood added another title to my name — a father — I felt the weight of my childhood struggles. The hushed whispers of the night left me questioning my ability to father without a firsthand experience of what being a father meant. But I learned and grew with each of Desmond and Argi's giggles, hugs, and innocent queries. I realized being a good father came instinctively, guided by pure love.

My partner Arlene, my rock and confidante, has been my co-pilot in this unpredictable life adventure. Through the laughter, the silent whispers, and even the storms, we have grown together—stronger and more united. They, our delightful children, are the anchors that keep me rooted amidst life's tumultuous tides.

Pausing now and looking back, my life seems a vibrant tapestry of mixed hues. Each color—vivid or discreet—adds depth and emotion to my story. Tying this entire piece together are the unseen hands of Inay Nating, and Itay Francing, and the guiding presence of Mama Solmarie and Mama Lyn Lyn. They have been the constants in my life, silently guiding my rudder through life’s swirling and unpredictable seas.

![Basey, Samar](https://llego.dev/assets/MVF3gkm4kcbCx9sWmJ77.jpg)
![Basey, Samar](https://llego.dev/assets/L92utBcP5CuY2saorbBD.jpg)

So, let's raise a toast to life—its uncertainties, surprising plot twists, and the colors it paints us in. Much like Doris Day melodiously taught us, **Que Sera, Sera.** Embracing life's beautiful uncertainties, dancing to its distinct rhythm, and creating our melody in this grand symphony are all part of this journey. For in the end, **whatever will be will be.**

<div class="video-container">
    <iframe width="736" height="315" src="https://www.youtube.com/embed/r0m9wr_o0Qg?si=qs2oOxKdE5t2KF8f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
