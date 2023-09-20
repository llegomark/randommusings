---
author: Mark Anthony Llego
pubDatetime: 2023-09-20T04:01:06Z
title: "Echoes of Indifference: A Game of Life's Unforgiving Patterns"
postSlug: echoes-indifference-game-lifes-unforgiving-patterns
featured: false
draft: false
tags:
  - personal
ogImage: "https://llego.dev/assets/6c43bfc9-c3b4-4541-8791-da44bd7aed6f.jpg"
description: 'Explore our insightful narrative journey reflecting on societal indifference and isolation, paralleled with Conway''s Game of Life, inspired by the haunting themes in Bobbie Gentry''s Ode to Billie Joe."'
---

```python
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

class Grid:
    def __init__(self, size_x, size_y):
        self.size_x = size_x
        self.size_y = size_y
        self.grid = np.random.choice([0, 1], size_x*size_y).reshape(size_x, size_y)

    def count_alive_neighbours(self, x, y):
        alive_neighbours = 0
        for i in [-1, 0, 1]:
            for j in [-1, 0, 1]:
                if i == 0 and j == 0:
                    continue
                xi = (x + i) % self.size_x
                yj = (y + j) % self.size_y
                alive_neighbours += self.grid[xi][yj]
        return alive_neighbours

    def advance(self):
        new_grid = self.grid.copy()
        for x in range(self.size_x):
            for y in range(self.size_y):
                alive_neighbours = self.count_alive_neighbours(x, y)
                if self.grid[x][y] == 1 and (alive_neighbours < 2 or alive_neighbours > 3):
                    new_grid[x][y] = 0
                elif self.grid[x][y] == 0 and alive_neighbours == 3:
                    new_grid[x][y] = 1
        self.grid = new_grid


def animate(frameNum, img, grid):
    grid.advance()
    img.set_array(grid.grid)
    return img,


N = 100
updateInterval = 50
grid = Grid(N, N)

fig, ax = plt.subplots()
img = ax.imshow(grid.grid, interpolation='nearest')

desc = ax.text(0.5, -0.1, "Llego.dev", transform=ax.transAxes, ha='center')

def animate(frameNum, img, grid, desc):
    grid.advance()
    img.set_array(grid.grid)

    desc.set_text("Llego.dev")

    return img, desc

ani = animation.FuncAnimation(fig, animate, fargs=(img, grid, desc),
                              frames = 10, interval = updateInterval,
                              blit = True, save_count = 50)

ani.save('GameOfLife.gif', writer='imagemagick', fps=30)

plt.show()
```

```python
from IPython.display import Image
Image(filename="GameOfLife.gif")
```

Life was about to lose one of its characters on an ordinary day. It was the third of June, another sleepy, dusty Delta day. Bold and boundless fields simmered under the blaze, swallowing the day's heat and exhaling a dusty, mirage-filled haze. A haunting tale from the song "Ode to Billie Joe" began replicating in the heat-stricken silence. Our world was about to lose one of its actors too soon, a boy barely past the carefree days of his youth, jumping off the Tallahatchie Bridge.

![Mark Anthony Llego](/assets/GameOfLife.gif)

Life echoes the captivating patterns of ['Conway's Game of Life'](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)- a "zero-player" game where time unfolds with complex scenarios presented under simple rules. The game, designed without a defined purpose, formulates patterns through interactions that can flip the course of existence and map the journey of life's twists and turns. Much like the living cells of Conway's game, we are dots in this vast cosmos, our individual actions leaving imprints on a communal canvas, our decisions popping in and out of existence under the dictated rules of society.

Upon hearing the shattering news, "Well, Billie Joe never had a lick of sense; pass the biscuits, please," someone spoke amidst the chatter, carelessly throwing words into the circulating air. Billie Joe's desperate act became a mere topic of dinner discussion. It reiterated an inherent trait of human society – the ease with which we jump to conclusions, the readiness to dismiss the sorrows we don't fully comprehend, and the silence we choose to maintain for the stories we fail to decode.

The boy who once participated in youthful pranks at the county picture show became a poignant echo underneath the Tallahatchie Bridge. His forced descent marked the loss of innocence and harsh understanding of life's realities, a narrative thread connecting each of us. We all stand at a similar precipice at some point in our lives, caught between the fading glow of naivety and the looming shadows of reality. "It was always somethin' after church on Sunday nights." Yet three days pass, and a boy who should've been exploring life starts falling into the hands of a tragic end.

As life overwhelmingly transitions from innocent explorations to harsh adversities, we collide against society's stormy indifference. We mimic Conway's living cells pattern, which relies on surroundings to survive, each stirring consequences in the immediate neighborhood. A supportive society should provide an empathetic network, allowing the individual's struggles to meet the wind of understanding and not be doomed to ricoche off the unsympathetic cliffs of judgment.

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/HaRacIzZSPo?si=wa-JktTb3LVTkuE_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

The unspoken story of Billie Joe gradually lost its prominence in everyday conversations, leaving a trail of muted sorrows and unanswered questions. It unfolded as a cautionary tale about the delicacy of the human spirit and the hazards of isolation. We exchange spaces and moments, often remaining heedless of the silent cries for help, the battles fought behind smiles, and the part of us that yearns for empathy and acceptance. Unless we scrub away the thick layer of indifference, we all are potential Billie Joes awaiting recognition.

As we journey onward, the third of June etches onto calendars with new memories, washing away remnants of past revelations. The unmoved world spins forward in its dictated orbit, much like Conway's Game of Life operates without any intervention. The player initiates the game and watches as myriad patterns evolve, each transition encapsulating the fluorescence of existence.

Life parallels Conway's game more intensely than we concede. Do we express the same disregard for the disappearing cells from the grid as we do for the unheard cries around us? Amidst the mundane whirlwind of life, it's a question that might find its home in our reflective moments as we continue our respective dances on life's checkerboard, the arrival of another third of June bringing echoes of a forgotten, sleepy, dusty Delta day.
