---
author: Mark Anthony Llego
pubDatetime: 2023-09-18T02:36:13Z
title: "Unleashing the Epic 3vs3 PVP Simulation for Ragnarok Mobile: Eternal Love - Hellion Guild"
postSlug: epic-3vs3-pvp-simulation-ragnarok-mobile-eternal-love-hellion-guild
featured: false
draft: false
tags:
  - Ragnarok Mobile
ogImage: "https://llego.dev/assets/a07569ee-32bc-4c86-be7a-2d3e910664d0.jpg"
description: "Experience the thrill of the upcoming Internal 3vs3 PVP simulation in the Hellion Guild of Ragnarok Mobile: Eternal Love. Dive into the world of fierce battles, strategic buffs, and debuffs – all brought to life through Python code. Join the fun as I showcase my Python expertise and the passion for gaming."
---

```python
import random
import collections
import heapq
import matplotlib.pyplot as plt
import pandas as pd
import logging
from typing import List, Dict, Tuple

# Add logging configuration
logging.basicConfig(level=logging.DEBUG, format='%(levelname)s - %(message)s')


class SkillInteractions:
    """
    Represents skill interactions between players.
    """

    def __init__(self):
        # Define synergy, counter, status effects, combo breakers, buffs and debuffs
        self.synergy_dict = {('Fireball', 'Ignite'): 1.3, ('Charge', 'Stun'): 1.2}
        self.counter_dict = {('Reflect', 'PiercingStrike'): 0.5, ('Block', 'StrongAttack'): 0.3}
        self.status_effects_dict = {('Freeze', 'BurningAura'): 0.7, ('Paralysis', 'LightningStrike'): 0.6}
        self.combo_breakers_dict = {('Silence', 'ComboStrike'): 0.5, ('Interrupt', 'Berserk'): 0.6}
        self.buffs_debuffs_dict = {'Boost': 1.2, 'Slow': 0.8}

    def apply_skill_interactions(self, player1: 'Player', player2: 'Player') -> float:
        """
        Applies the skill interactions to modify the players' strengths.
        :param player1: The first player.
        :param player2: The second player.
        :return: The modified strength of player1.
        """
        p1_base_strength = player1.base_strength()
        skill_combination = (player1.skill, player2.skill)
        logging.debug(f"Skill combination: {skill_combination}")
        if skill_combination in self.synergy_dict:
            p1_base_strength *= self.synergy_dict[skill_combination]
        elif skill_combination in self.counter_dict:
            p1_base_strength *= self.counter_dict[skill_combination]
        elif skill_combination in self.status_effects_dict:
            p1_base_strength *= self.status_effects_dict[skill_combination]
        elif skill_combination in self.combo_breakers_dict:
            p1_base_strength *= self.combo_breakers_dict[skill_combination]
        if player1.skill in self.buffs_debuffs_dict:
            p1_base_strength *= self.buffs_debuffs_dict[player1.skill]
        logging.debug(f"Modified strength of player1: {p1_base_strength}")
        return float(p1_base_strength)


class Player:
    """
    Represents a player with their attributes.
    """

    def __init__(self, name: str, job: str, skill: str, equipment: int):
        """
        Initialize a Player object.
        :param name: The player's name.
        :param job: The player's job.
        :param skill: The player's skill level.
        :param equipment: The player's equipment level.
        """
        self.name = name
        self.job = job
        self.skill = int(skill)  # Convert skill to integer
        self.equipment = equipment
        self.average_strength = 0
        self.num_wins = 0

    def base_strength(self) -> float:
        """
        Calculate the base strength of the player based on their attributes.
        :return: The base strength of the player.
        """
        job_multiplier = JOB_MULTIPLIERS[self.job]
        base_strength = random.gauss(JOB_RANKINGS[self.job] * job_multiplier * self.equipment, GAUSSIAN_STD)
        logging.debug(f"Base strength of {self.name}: {base_strength}")
        return base_strength

    def strength(self, interactions: SkillInteractions, opponent: 'Player') -> float:
        """
        Calculate the modified strength of the player based on skill interactions.
        :param interactions: The SkillInteractions instance.
        :param opponent: The opponent player.
        :return: The modified strength of the player.
        """
        modified_strength = interactions.apply_skill_interactions(self, opponent)
        logging.debug(f"Modified strength of {self.name}: {modified_strength}")
        return modified_strength


class Team:
    """
    Represents a team of players.
    """

    def __init__(self, name: str, members: List[Player]):
        """
        Initialize a Team object.
        :param name: The name of the team.
        :param members: The members of the team.
        """
        self.name = name
        self.members = members

        assert len(self.members) == 3, "Team must have exactly three members"

    def strength(self, interactions: SkillInteractions) -> float:
        total_strength = 0.0  # Initialize as float
        for i in range(len(self.members)):
            for j in range(i + 1, len(self.members)):
                total_strength += self.members[i].strength(interactions, self.members[j])
                total_strength += self.members[j].strength(interactions, self.members[i])
        return total_strength


def calculate_mvp(player_performance: Dict[str, List[float]]) -> str:
    """
    Calculate the Most Valuable Player (MVP) based on the average strength of each player.
    :param player_performance: A dictionary of player performance.
    :return: The name of the MVP.
    """
    max_average_strength = 0
    mvp = ""
    for player, strengths in player_performance.items():
        if len(strengths) > 0:
            average_strength = sum(strengths) / len(strengths)
            if average_strength > max_average_strength:
                max_average_strength = average_strength
                mvp = player
    return mvp


def apply_buffs_debuffs(teams: Dict[str, Team]) -> None:
    """
    Apply random buffs and debuffs to players' skill levels based on their jobs.
    :param teams: A dictionary of teams.
    """
    for team in teams.values():
        for player in team.members:
            buff_debuff_multiplier = random.uniform(0.8, 1.2)
            player.skill *= buff_debuff_multiplier
            JOB_RANKINGS[player.job] *= buff_debuff_multiplier


def match(team1: Team, team2: Team, player_performance: Dict[str, List[float]],
          job_performance: Dict[str, float]) -> Tuple[Team, float]:
    """
    Simulate a match between two teams and update player and job performance dictionaries.
    :param team1: The first team.
    :param team2: The second team.
    :param player_performance: A dictionary to store player performance.
    :param job_performance: A dictionary to store job performance.
    :return: A tuple of the winning team and the maximum strength among the teams.
    """
    interactions = SkillInteractions()
    apply_buffs_debuffs({team1.name: team1, team2.name: team2})  # Apply buffs and debuffs

    strength1 = team1.strength(interactions)
    strength2 = team2.strength(interactions)

    weight1 = random.uniform(0.9, 1.1)
    weight2 = random.uniform(0.9, 1.1)
    strength1 *= weight1
    strength2 *= weight2

    if strength1 > strength2:
        winning_team = team1
    else:
        winning_team = team2

    # Update player and job performance
    for team in [team1, team2]:
        for player in team.members:
            player_strength = player.strength(interactions, opponent=team.members[0])
            player_performance[player.name].append(player_strength)
            job_performance[player.job] += player_strength

            player.average_strength = (player.average_strength * player.num_wins + player_strength) / (
                    player.num_wins + 1)
            player.num_wins += 1

    return winning_team, max(strength1, strength2)


def tournament(teams: Dict[str, Team]) -> Tuple[Team, List[float], Dict[str, List[float]], Dict[str, float]]:
    """
    Simulate a round-robin style tournament between teams and calculate the winner and performance metrics.
    :param teams: A dictionary of teams.
    :return: A tuple of the winning team, winning strengths, player performance, and job performance.
    """
    player_performance = {player.name: [] for team in teams.values() for player in team.members}
    job_performance = collections.defaultdict(float)

    teams_list = list(teams.values())
    num_teams = len(teams_list)
    matches_per_round = (num_teams - 1)
    total_rounds = num_teams - 1

    for current_round in range(total_rounds):
        round_results = []

        for match_number in range(matches_per_round):
            team1_index = (current_round + match_number) % (num_teams - 1)
            team2_index = (num_teams - 1 - match_number + current_round) % (num_teams - 1)
            team1 = teams_list[team1_index]
            team2 = teams_list[team2_index]
            winning_team, winning_strength = match(team1, team2, player_performance, job_performance)
            round_results.append((winning_team, winning_strength))

        round_results.sort(key=lambda x: x[1], reverse=True)
        winning_team = round_results[0][0]
        winning_strengths = [strength for _, strength in round_results]

        team_rankings = collections.Counter(team for team, _ in round_results)
        teams_list.sort(key=lambda x: team_rankings[x], reverse=True)

    return teams_list[0], winning_strengths, player_performance, job_performance


class Plotter:
    """
    Handles plotting functionalities for the tournament results.
    """

    @staticmethod
    def progression(winning_strengths: List[float]) -> None:
        """
        Plot the progression of the winning team's score in each round of the tournament.
        :param winning_strengths: A list of winning strengths in each round.
        """
        plt.figure(figsize=(8, 6))
        plt.plot(range(1, len(winning_strengths) + 1), winning_strengths, color='blue', marker='o')
        plt.xlabel('Round Number')
        plt.ylabel('Winning Score')
        plt.title('Score Progression of Winning Team')
        plt.grid(True)
        plt.show()

    @staticmethod
    def top_players(player_performance: Dict[str, List[float]]) -> None:
        """
        Plot the top 3 players in the tournament based on their total strength.
        :param player_performance: A dictionary of player performance.
        """
        total_strengths = {player: sum(performance) for player, performance in player_performance.items()}
        top_players = heapq.nlargest(3, total_strengths, key=total_strengths.get)
        top_scores = [total_strengths[player] for player in top_players]

        plt.figure(figsize=(8, 6))
        plt.bar(top_players, top_scores, color='orange')
        plt.xlabel('Player')
        plt.ylabel('Total Strength')
        plt.title('Top 3 Players in the Tournament')
        plt.grid(True)
        plt.show()

    @staticmethod
    def job_performance(job_performance: Dict[str, float]) -> None:
        """
        Plot the performance of jobs in the tournament based on their total strength.
        :param job_performance: A dictionary of job performance.
        """
        jobs = list(job_performance.keys())
        performances = list(job_performance.values())

        plt.figure(figsize=(8, 6))
        plt.barh(jobs, performances, color='green')
        plt.xlabel('Total Strength')
        plt.ylabel('Job')
        plt.title('Performance of Jobs in the Tournament')
        plt.grid(True)
        plt.show()

    @staticmethod
    def distribution_of_strengths(player_performance: Dict[str, List[float]]) -> None:
        """
        Plot the distribution of player strengths in the tournament.
        :param player_performance: A dictionary of player performance.
        """
        strengths = [sum(performance) for performance in player_performance.values()]

        plt.figure(figsize=(8, 6))
        plt.hist(strengths, bins=NUM_BINS, alpha=0.5, color='purple')
        plt.xlabel('Total Strength')
        plt.ylabel('Number of Players')
        plt.title('Distribution of Player Strengths')
        plt.grid(True)
        plt.show()

    @staticmethod
    def individual_progression(player_performance: Dict[str, List[float]]) -> None:
        """
        Plot the individual strength progression of each player in the tournament.
        :param player_performance: A dictionary of player performance.
        """
        max_rounds = max(len(performance) for performance in player_performance.values())

        padded_performance = {
            player: performance + [0.0] * (max_rounds - len(performance)) for player, performance in
            player_performance.items()
        }

        df = pd.DataFrame(padded_performance)
        plt.figure(figsize=(10, 6))
        plt.plot(df)
        plt.xlabel('Round')
        plt.ylabel('Strength')
        plt.title('Individual Strength Progression per Round')
        plt.grid(True)
        plt.legend(df.columns)
        plt.show()


GAUSSIAN_STD = 2
NUM_BINS = 30

JOB_RANKINGS = {
    'Arcane Master': 7,
    'Chronomancer': 8,
    'Stellar Hunter': 6,
    'Saint': 8,
    'Begetter': 8,
    'Gunslinger': 7,
    'Nidhogg': 6,
    'Genos': 8,
    'Rathgricy': 7,
    'Thanatos': 8,
    'Hela': 7,
    'Blade Soul': 8,
    'Jormungandr': 6,
    'Phantom Dancer': 7,
    'Luna Danseuse': 8,
    'Ronin': 6,
}

JOB_MULTIPLIERS = {
    'Arcane Master': 1.1,
    'Chronomancer': 1.2,
    'Stellar Hunter': 1.0,
    'Saint': 1.2,
    'Begetter': 1.2,
    'Gunslinger': 1.1,
    'Nidhogg': 0.9,
    'Genos': 1.2,
    'Rathgricy': 1.1,
    'Thanatos': 1.2,
    'Hela': 1.1,
    'Blade Soul': 1.2,
    'Jormungandr': 0.9,
    'Phantom Dancer': 1.1,
    'Luna Danseuse': 1.2,
    'Ronin': 0.9,
}


def main():
    """
    Main function to run the 3vs3 tournament simulation.
    """
    team_names = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6',
                  'Team 7', 'Team 8', 'Team 9', 'Team 10', 'Team 11', 'Team 12']

    team_members = [
        [Player('Jabee', 'Rathgricy', '5', 1), Player('Sprite', 'Phantom Dancer', '7', 1),
         Player('Sugar', 'Begetter', '8', 1)],
        [Player('Antheus', 'Luna Danseuse', '9', 1), Player('Drrn', 'Gunslinger', '6', 1),
         Player('Art', 'Hela', '7', 1)],
        [Player('Tops', 'Blade Soul', '8', 1), Player('Jashobeam', 'Phantom Dancer', '6', 1),
         Player('Cai', 'Saint', '5', 1)],
        [Player('Goku', 'Thanatos', '9', 1), Player('Jpwiz', 'Chronomancer', '7', 1),
         Player('Badtrip', 'Phantom Dancer', '9', 1)],
        [Player('Yatoro', 'Hela', '7', 1), Player('Close', 'Saint', '8', 1), Player('Jocel', 'Jormungandr', '6', 1)],
        [Player('Notting', 'Blade Soul', '6', 1), Player('Black', 'Rathgricy', '7', 1),
         Player('Bulok', 'Saint', '8', 1)],
        [Player('Bryn', 'Ronin', '7', 1), Player('Leitsac', 'Begetter', '5', 1),
         Player('Trixie', 'Nidhogg', '6', 1)],
        [Player('Gab', 'Arcane Master', '8', 1), Player('Hermit', 'Hela', '6', 1),
         Player('Found', 'Chronomancer', '5', 1)],
        [Player('Ryleigh', 'Blade Soul', '6', 1), Player('Athan28', 'Rathgricy', '7', 1),
         Player('Iyot', 'Phantom Dancer', '8', 1)],
        [Player('JL', 'Arcane Master', '7', 1), Player('Eren', 'Genos', '5', 1),
         Player('Greed', 'Rathgricy', '6', 1)],
        [Player('Suzy', 'Chronomancer', '8', 1), Player('Meputia', 'Rathgricy', '6', 2),
         Player('Cyrax', 'Thanatos', '7', 1)],
        [Player('Dillydaly', 'Stellar Hunter', '5', 1), Player('Puch', 'Hela', '7', 1),
         Player('Kent', 'Begetter', '6', 1)],
    ]

    teams = {name: Team(name, members) for name, members in zip(team_names, team_members)}

    winner, winning_strengths, player_performance, job_performance = tournament(teams)

    mvp = calculate_mvp(player_performance)
    logging.info(f"The Most Valuable Player is: {mvp}")
    logging.info(f"The winning team is: {winner.name}")

    plotter = Plotter()
    plotter.progression(winning_strengths)
    plotter.top_players(player_performance)
    plotter.job_performance(job_performance)
    plotter.distribution_of_strengths(player_performance)
    plotter.individual_progression(player_performance)


if __name__ == '__main__':
    main()
```

![Ragnarok Mobile: Eternal Love](https://llego.dev/assets/Screenshot_2023.09.14_22.30.19.953.png)

Hey there! I've recently been working on some code for our upcoming Internal 3vs3 PVP in our striking Hellion Guild. I wanted to showcase my Python skills by creating a fun and interactive tournament simulation for Ragnarok Mobile: Eternal Love.

My code aims to simulate an exciting round-robin style tournament between teams of 3 players each. I added random buffs and debuffs based on the player's job rankings and skill levels to make things interesting. This introduces a level of unpredictability and strategy to the matches. Remember that this simulation does not consider the players' equipment, stats, skills, or other attributes. It is purely a simulation and does not reflect the actual gameplay mechanics of Ragnarok Mobile: Eternal Love.

I created the `Player,` `Team,` and `SkillInteractions` classes in the code to represent individual players, teams, and skill interactions between players. Each player is assigned a name, job, skill, and equipment level. The team's total strength is calculated based on the combined strength of its members.

I used various calculations and data structures to determine the tournament's winner and performance metrics. The most valuable player (MVP) is calculated based on the average strength of each player throughout the matches.

In the modified version of the code, I added several new features. Firstly, I implemented a class called `SkillInteractions` to handle skill interactions between players. This class defines dictionaries for synergy, counter, status effects, combo breakers, buffs, and debuffs. This class's `apply_skill_interactions` method uses skill interactions to modify the players' strengths.

I also added a `Plotter` class to handle plotting functionalities for the tournament results. This class includes methods for plotting the progression of the winning team's score, the top 3 players based on total strength, the performance of jobs in the tournament, the distribution of player strengths, and the individual strength progression of each player.

Furthermore, I modified the `Player` class to include new attributes and methods. Each player now has an `average_strength` attribute to store their average strength throughout the matches and a `num_wins` attribute to keep track of the number of wins during the tournament. The `strength` method in the `Player` class now considers the skill interactions between players to calculate the modified strength of the player.

The `calculate_mvp` function was modified to accept the new player performance dictionary and calculate the MVP based on the average strength of each player.

Lastly, the `apply_buffs_debuffs` function was added to apply random buffs and debuffs to players' skill levels and job rankings based on their jobs.

This modified code should provide an enhanced and more comprehensive simulation of the 3vs3 PVP tournament in Ragnarok Mobile: Eternal Love. I'm excited about our upcoming PVP, and I hope this code contributes to the fun and competitive spirit of the event. Let's enjoy the tournament, and may the best team emerge victorious in Ragnarok Mobile: Eternal Love!

Feel free to reach out if you have any questions or need further assistance. See you on the battleground!

## Example Code Outputs

The Most Valuable Player is: Suzy

The winning team is: Team 11

![Ragnarok Mobile: Eternal Love](https://llego.dev/assets/ragnarok-1.png)
![Ragnarok Mobile: Eternal Love](https://llego.dev/assets/ragnarok-2.png)
![Ragnarok Mobile: Eternal Love](https://llego.dev/assets/ragnarok-3.png)
![Ragnarok Mobile: Eternal Love](https://llego.dev/assets/ragnarok-4.png)
![Ragnarok Mobile: Eternal Love](https://llego.dev/assets/ragnarok-5.png)

<details>
  <summary>Sample Debug Messages</summary>
  <pre>
DEBUG - Modified strength of Close: 6.618574002479601
DEBUG - Base strength of Jocel: 5.842110287819193
DEBUG - Skill combination: (5.677554185055725, 5.542981005728732)
DEBUG - Modified strength of player1: 5.842110287819193
DEBUG - Modified strength of Jocel: 5.842110287819193
DEBUG - Base strength of JL: 12.252586418474454
DEBUG - Skill combination: (11.3387038517898, 11.3387038517898)
DEBUG - Modified strength of player1: 12.252586418474454
DEBUG - Modified strength of JL: 12.252586418474454
DEBUG - Base strength of Eren: 10.497353100362758
INFO - The Most Valuable Player is: Suzy
INFO - The winning team is: Team 11
</pre>
</details>
