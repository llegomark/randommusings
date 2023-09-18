---
author: Mark Anthony Llego
pubDatetime: 2023-09-19T00:38:08Z
title: "Embracing the Unwritten: A Discourse on Life's Colourful Canvas"
postSlug: embracing-unwritten-discourse-lifes-colourful-canvas
featured: true
draft: false
tags:
  - personal
ogImage: "https://llego.dev/assets/c44188ac-71ca-42cc-af0c-e87b8992815f.jpg"
description: "Dive into the inspiring journey of a man tracing life's unpredictable routes. From childhood dreams to adult detours, imbibe how the philosophy of 'Whatever will be, will be' shapes life’s vibrant narrative."
---

```python
import matplotlib.pyplot as plt
import numpy as np

colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown']

emotions = ["Mother's Love", "Yearning", "Uncertainty", "Fascination", "Metamorphosis", "Fatherhood", "Love and Unity"]

x = np.random.rand(100)
y = np.random.rand(100)

emotion_indices = np.random.randint(0, len(emotions), size=100)

plt.figure(figsize=(8, 6))
for i in range(len(emotions)):
    indices = np.where(emotion_indices == i)
    plt.scatter(x[indices], y[indices], color=colors[i], label=emotions[i])

que_sera_x = 0.5
que_sera_y = 0.5
plt.text(que_sera_x, que_sera_y, "Que Sera, Sera", fontsize=12, ha='center', va='center', color='black', weight='bold')

grandmother_x = 0.2
grandmother_y = 0.3
plt.scatter(grandmother_x, grandmother_y, color='purple', marker='D', s=100, label="Inay Nating")

grandfather_x = 0.8
grandfather_y = 0.2
plt.scatter(grandfather_x, grandfather_y, color='blue', marker='^', s=100, label="Itay Francing")

mother_x = 0.4
mother_y = 0.7
plt.scatter(mother_x, mother_y, color='pink', marker='o', s=100, label="Mama Solmarie")

legal_mother_x = 0.6
legal_mother_y = 0.4
plt.scatter(legal_mother_x, legal_mother_y, color='green', marker='P', s=100, label="Mama Lyn Lyn")

computer_shop_x = 0.6
computer_shop_y = 0.7
plt.scatter(computer_shop_x, computer_shop_y, color='green', marker='s', s=100, label="Computer Shop")

hidden_father_x = 0.4
hidden_father_y = 0.05
plt.scatter(hidden_father_x, hidden_father_y, color='white', edgecolors='black', marker='X', s=30, label="Hidden Father")

family = {
    "Arlene": (que_sera_x + np.random.uniform(-0.08, 0.08), que_sera_y + np.random.uniform(0.05, 0.15), 'yellow', 'heart', 150),
    "Desmond": (que_sera_x + np.random.uniform(-0.08, 0.08), que_sera_y + np.random.uniform(0.05, 0.15), 'purple', 'o', 150),
    "Argi": (que_sera_x + np.random.uniform(-0.08, 0.08), que_sera_y + np.random.uniform(0.05, 0.15), 'pink', 'o', 150)
}
for name, (x, y, color, marker, size) in family.items():
    if marker == 'heart':
        plt.scatter(x, y, color=color, marker=(104, 0, 0), s=size, label=name)  # Heart marker
    else:
        plt.scatter(x, y, color=color, marker=marker, s=size, label=name)

plt.legend(loc='upper left')
plt.title("Vibrant Tapestry of Life")
plt.xlabel("X Coordinate")
plt.ylabel("Y Coordinate")

plt.show()

```

![Que Sera, Sera](https://llego.dev/assets/queserasera.png)

Stepping into the quiet of our Antipolo City apartment, <a href= "https://youtu.be/r0m9wr_o0Qg?si=vM1oyQujCKtv6nFa" target= "_blank"> "Whatever Will Be, Will Be (Que Sera, Sera)"</a> cradles my senses, awakening memories that dance through the years. Sit beside me, and let me share my story with you.

![Basey, Samar](https://llego.dev/assets/mBqd7TKJLRSWx6Pahw9N.jpg)

Growing up in Basey, Samar, a simple paradise steeped in the company of swaying coconut trees and the serenity of the river, my world was held together by the unwavering love of my mother (Mama Solmarie), my Lola (Inay Nating), and Lolo (Itay Francing). They were my sun, moon, and stars — yet, amid the love that surrounded me, there was an absence of a father that palpably lingered.

![Basey, Samar](https://llego.dev/assets/jUerf7W29UHQEjAtxwjb.jpg)
![Basey, Samar](https://llego.dev/assets/WL7WUfDr8DWHtm88brSi.jpg)

An image of him, a vague outline drawn from the whispered stories of elders and my mother's tear-streaked narratives, shadowed my journey. I remember my elementary days, feeling the sting of words when classmates mocked, "waray nim tatay," and envying the bonds I saw between fathers and sons during Parent-Teacher conferences. A collection of incomplete moments added fuel to the fire of my yearning.

At the crossroads of my youth, I made the leap from the coconut-laden coasts of Samar to the pulsing heart of Antipolo City. This sudden shift in my world was a step taken hand in hand with my grandparents while Mama, a public school teacher, stayed behind in Basey.

As the hands of time turned, engulfing the lawyer dreams of my childhood, they revealed a new, unexpected path — nursing. My Tita, my legal mother, sketched it into existence on paper. But as I ventured down the road, the shadows of dissatisfaction and limited opportunities slowly blurred my path.

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

<iframe width="100%" height="315" src="https://www.youtube.com/embed/r0m9wr_o0Qg?si=qs2oOxKdE5t2KF8f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
