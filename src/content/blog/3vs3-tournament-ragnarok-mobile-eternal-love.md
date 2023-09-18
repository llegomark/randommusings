---
author: Mark Anthony Llego
pubDatetime: 2023-09-18T02:36:13Z
title: "Enhanced Simulation of Ragnarok Mobile: Eternal Love 3vs3 PVP Tournament"
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

    def __init__(self, name: str, job: str, skill: int, equipment: int):
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
        self.num_losses = 0

    @classmethod
    def randomize_skill(cls, job: str) -> int:
        """
        Randomizes the skill level based on the job.
        :param job: The job of the player.
        :return: The randomized skill level.
        """
        base_skill = JOB_RANKINGS[job]
        randomized_skill = random.randint(int(base_skill * 0.8), int(base_skill * 1.2))
        return randomized_skill

    def base_strength(self) -> float:
        """
        Calculate the base strength of the player based on their attributes.
        :return: The base strength of the player.
        """
        job_multiplier = random.uniform(0.8, 1.2)  # Randomize job multipliers each tournament
        job_ranking = random.randint(1, 10)  # Randomize job rankings each tournament
        base_strength = random.gauss(job_ranking * job_multiplier * self.equipment, GAUSSIAN_STD)
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

    @classmethod
    def swap_players(cls, team1: 'Team', team2: 'Team') -> Tuple['Team', 'Team']:
        """
        Swaps random players between two teams to mix up team compositions.
        :param team1: The first team.
        :param team2: The second team.
        :return: The two teams with swapped players.
        """
        random_indices = random.sample(range(3), k=2)
        team1.members[random_indices[0]], team2.members[random_indices[1]] = team2.members[random_indices[1]], \
                                                                               team1.members[random_indices[0]]
        return team1, team2

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


def analyze_skill_pair_data(skill_pair_performance: Dict[Tuple[str, str], int], tournaments_played: int):
    """
    Analyze the skill pair data after each tournament to detect imbalances.
    Increase/decrease synergy bonuses to buff/nerf overpowered combinations.
    """
    for skill_pair, occurrences in skill_pair_performance.items():
        if occurrences > tournaments_played * 0.6:  # Skill pair has occurred in more than 60% of tournaments
            synergy_bonus = skill_pair_performance[skill_pair] / tournaments_played
            logging.info(f"Skill pair {skill_pair} is overpowered. Current synergy bonus: {synergy_bonus}")
            if synergy_bonus > 1.5:  # Adjust synergy bonus based on desired balance
                logging.info("Nerfing synergy bonus")
                skill_interaction.synergy_dict[skill_pair] *= 0.8
            elif synergy_bonus < 0.5:
                logging.info("Buffing synergy bonus")
                skill_interaction.synergy_dict[skill_pair] *= 1.2


def force_skill_pair_rematches(teams: Dict[str, Team], skill_pair_performance: Dict[Tuple[str, str], int]):
    """
    Occasionally force rematches of skill pairs that haven't been seen often to gather more data.
    """
    rematch_threshold = 3  # Number of occurrences below which a rematch is forced
    for skill_pair, occurrences in skill_pair_performance.items():
        if occurrences < rematch_threshold:
            logging.info(f"Forcing rematch of skill pair {skill_pair}")
            for team in teams.values():
                for player in team.members:
                    if player.skill == skill_pair[0]:
                        player.skill = Player.randomize_skill(player.job)
                        logging.info(f"Player {player.name} has new skill level: {player.skill}")


def analyze_job_performance(job_performance: Dict[str, float], tournaments_played: int):
    """
    Analyze job performance over time to detect jobs that need buffs/nerfs.
    Adjust job multipliers and rankings accordingly.
    """
    for job, total_strength in job_performance.items():
        average_strength = total_strength / tournaments_played
        logging.info(f"Job {job} average strength: {average_strength}")
        if average_strength > 10000:  # Placeholder threshold for imbalance detection
            logging.info(f"Job {job} is overpowered. Current multiplier: {JOB_MULTIPLIERS[job]}")
            JOB_MULTIPLIERS[job] *= 0.9  # Nerf job multiplier by 10%


def simulate_tournaments_in_advance(teams: Dict[str, Team], num_simulations: int):
    """
    Simulate multiple tournaments in advance to forecast expected win rates for players/jobs/skill pairs
    before using for actual tournaments.
    """
    player_win_rates = {player.name: 0 for team in teams.values() for player in team.members}
    job_win_rates = {job: 0 for job in JOB_RANKINGS.keys()}
    skill_pair_win_rates = {(skill1, skill2): 0 for skill1 in JOB_RANKINGS.keys() for skill2 in JOB_RANKINGS.keys()}

    for _ in range(num_simulations):
        player_performance = {player.name: [] for team in teams.values() for player in team.members}
        job_performance = collections.defaultdict(float)
        skill_pair_performance = {}

        tournament_results = tournament(teams, 1)[0]  # Run one tournament
        winner, _, player_performance, job_performance = tournament_results

        for player, strengths in player_performance.items():
            if len(strengths) > 0:
                player_win_rates[player] += 1

        for job, total_strength in job_performance.items():
            average_strength = total_strength / len(player_performance)
            job_win_rates[job] += average_strength

        for skill_pair, _ in skill_pair_performance.items():
            skill_pair_win_rates[skill_pair] += 1

    for player in player_win_rates:
        player_win_rates[player] /= num_simulations

    for job in job_win_rates:
        job_win_rates[job] /= num_simulations

    for skill_pair in skill_pair_win_rates:
        skill_pair_win_rates[skill_pair] /= num_simulations

    return player_win_rates, job_win_rates, skill_pair_win_rates


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
        [Player('Jabee', 'Rathgricy', Player.randomize_skill('Rathgricy'), 1),
         Player('Sprite', 'Phantom Dancer', Player.randomize_skill('Phantom Dancer'), 1),
         Player('Sugar', 'Begetter', Player.randomize_skill('Begetter'), 1)],
        [Player('Antheus', 'Luna Danseuse', Player.randomize_skill('Luna Danseuse'), 1),
         Player('Drrn', 'Gunslinger', Player.randomize_skill('Gunslinger'), 1),
         Player('Art', 'Hela', Player.randomize_skill('Hela'), 1)],
        [Player('Tops', 'Blade Soul', Player.randomize_skill('Blade Soul'), 1),
         Player('Jashobeam', 'Phantom Dancer', Player.randomize_skill('Phantom Dancer'), 1),
         Player('Cai', 'Saint', Player.randomize_skill('Saint'), 1)],
        [Player('Goku', 'Thanatos', Player.randomize_skill('Thanatos'), 1),
         Player('Jpwiz', 'Chronomancer', Player.randomize_skill('Chronomancer'), 1),
         Player('Badtrip', 'Phantom Dancer', Player.randomize_skill('Phantom Dancer'), 1)],
        [Player('Yatoro', 'Hela', Player.randomize_skill('Hela'), 1),
         Player('Close', 'Saint', Player.randomize_skill('Saint'), 1),
         Player('Jocel', 'Jormungandr', Player.randomize_skill('Jormungandr'), 1)],
        [Player('Notting', 'Blade Soul', Player.randomize_skill('Blade Soul'), 1),
         Player('Black', 'Rathgricy', Player.randomize_skill('Rathgricy'), 1),
         Player('Bulok', 'Saint', Player.randomize_skill('Saint'), 1)],
        [Player('Bryn', 'Ronin', Player.randomize_skill('Ronin'), 1),
         Player('Leitsac', 'Begetter', Player.randomize_skill('Begetter'), 1),
         Player('Trixie', 'Nidhogg', Player.randomize_skill('Nidhogg'), 1)],
        [Player('Gab', 'Arcane Master', Player.randomize_skill('Arcane Master'), 1),
         Player('Hermit', 'Hela', Player.randomize_skill('Hela'), 1),
         Player('Found', 'Chronomancer', Player.randomize_skill('Chronomancer'), 1)],
        [Player('Ryleigh', 'Blade Soul', Player.randomize_skill('Blade Soul'), 1),
         Player('Athan28', 'Rathgricy', Player.randomize_skill('Rathgricy'), 1),
         Player('Iyot', 'Phantom Dancer', Player.randomize_skill('Phantom Dancer'), 1)],
        [Player('JL', 'Arcane Master', Player.randomize_skill('Arcane Master'), 1),
         Player('Eren', 'Genos', Player.randomize_skill('Genos'), 1),
         Player('Greed', 'Rathgricy', Player.randomize_skill('Rathgricy'), 1)],
        [Player('Suzy', 'Chronomancer', Player.randomize_skill('Chronomancer'), 1),
         Player('Meputia', 'Rathgricy', Player.randomize_skill('Rathgricy'), 2),
         Player('Cyrax', 'Thanatos', Player.randomize_skill('Thanatos'), 1)],
        [Player('Dillydaly', 'Stellar Hunter', Player.randomize_skill('Stellar Hunter'), 1),
         Player('Puch', 'Hela', Player.randomize_skill('Hela'), 1),
         Player('Kent', 'Begetter', Player.randomize_skill('Begetter'), 1)],
    ]

    teams = {name: Team(name, members) for name, members in zip(team_names, team_members)}

    num_tournaments = 5  # Number of tournaments to run

    # Track wins/losses for each skill pair
    skill_pair_performance = {}

    for tournament_index in range(num_tournaments):
        player_performance = {player.name: [] for team in teams.values() for player in team.members}
        job_performance = collections.defaultdict(float)

        # Analyze skill pair data after each tournament
        analyze_skill_pair_data(skill_pair_performance, tournament_index + 1)

        # Occasionally force rematches of skill pairs that haven't been seen often
        force_skill_pair_rematches(teams, skill_pair_performance)

        tournament_results = tournament(teams, 1)[0]  # Run one tournament
        winner, _, player_performance, job_performance = tournament_results

        # Update skill pair performance based on tournament results
        for team in [team for team in teams.values() if team == winner]:
            for player in team.members:
                for opponent in [opponent for opponent in team.members if opponent != player]:
                    skill_pair = (player.skill, opponent.skill)
                    if skill_pair in skill_pair_performance:
                        skill_pair_performance[skill_pair] += 1
                    else:
                        skill_pair_performance[skill_pair] = 1

    # Calculate player win rates, job performance, and skill pair win rates
    player_win_rates, job_win_rates, skill_pair_win_rates = simulate_tournaments_in_advance(teams, num_tournaments)

    # Apply adjustments based on win rates
    for team in teams.values():
        for player in team.members:
            if player.name in player_win_rates:
                win_rate = player_win_rates[player.name]
                logging.info(f"Adjusting skill level of player {player.name} based on win rate: {win_rate}")
                player.skill = adjust_skill_level(player.skill, win_rate)

    for job, win_rate in job_win_rates.items():
        logging.info(f"Adjusting job multiplier of job {job} based on win rate: {win_rate}")
        JOB_MULTIPLIERS[job] = adjust_job_multiplier(JOB_MULTIPLIERS[job], win_rate)

    for skill_pair, win_rate in skill_pair_win_rates.items():
        logging.info(f"Adjusting synergy bonus of skill pair {skill_pair} based on win rate: {win_rate}")
        adjust_synergy_bonus(skill_pair, win_rate)

    # Run final tournaments with adjusted skill levels, job multipliers, and synergy bonuses
    tournament_results = tournament(teams, num_tournaments)

    all_mvp = []
    all_winners = []
    plotter = Plotter()

    for tournament_index, result in enumerate(tournament_results):
        winner, winning_strengths, player_performance, job_performance = result
        mvp = calculate_mvp(player_performance)
        logging.info(f"The Most Valuable Player of Tournament {tournament_index + 1} is: {mvp}")
        logging.info(f"The winning team of Tournament {tournament_index + 1} is: {winner.name}")
        all_mvp.append(mvp)
        all_winners.append(winner.name)

        # Plot tournament results
        plotter.progression(winning_strengths)
        plotter.top_players(player_performance)
        plotter.job_performance(job_performance)
        plotter.distribution_of_strengths(player_performance)
        plotter.individual_progression(player_performance)

    logging.info(f"All MVPs: {all_mvp}")
    logging.info(f"All winners: {all_winners}")


if __name__ == '__main__':
    main()

```

['GitHub'](https://github.com/llegomark/simulation)

![Ragnarok Mobile: Eternal Love](https://llego.dev/assets/Screenshot_2023.09.14_22.30.19.953.png)

Greetings! I have been working on a Python code to simulate an upcoming Internal 3vs3 PVP tournament in our striking Hellion Guild. This code showcases my Python skills while providing a fun and interactive tournament simulation for Ragnarok Mobile: Eternal Love.

The simulation simulates an exciting round-robin style tournament between teams of three players. I have incorporated random buffs and debuffs based on the players' job rankings and skill levels to make things more interesting. This introduces a level of unpredictability and strategy to the matches. However, it's important to note that this simulation does not consider the players' equipment, stats, skills, or other attributes. It is purely a simulation and does not reflect the actual gameplay mechanics of Ragnarok Mobile: Eternal Love.

## Code Design

To develop this simulation, I have created several classes and functionalities in the Python code:

### 1. Player, Team, and SkillInteractions Classes

I have defined the `Player`, `Team`, and `SkillInteractions` classes to represent individual players, teams, and skill interactions between players.

The `Player` class represents a player with attributes such as their name, job, skill level, and equipment level. Each player is assigned a random skill level based on their job. The `Player` class also includes methods to calculate the base strength of a player and the modified strength considering skill interactions with their opponents.

The `Team` class represents a team consisting of three players. It includes a method to calculate the team's total strength based on its members' combined strength.

The `SkillInteractions` class handles the skill interactions between players. It defines dictionaries for synergy, counter, status effects, combo breakers, buffs, and debuffs. This class's `apply_skill_interactions` method modifies the players' strengths based on the defined skill interactions.

### 2. Additional Features

In the modified version of the code, I have added some additional features to enhance the simulation:

- **Skill Interactions**: I implemented a class called `SkillInteractions` to handle the skill interactions between players. This class defines dictionaries for various skill interactions such as synergy, counter, status effects, combo breakers, buffs, and debuffs. This class's `apply_skill_interactions` method uses the defined skill interactions to modify the players' strengths.

- **Plotter Class**: I added a `Plotter` class to handle plotting functionalities for the tournament results. This class includes methods for plotting the progression of the winning team's score, the top 3 players based on total strength, the performance of jobs in the tournament, the distribution of player strengths, and the individual strength progression of each player.

### 3. Calculation Functions

I have also included several functions to perform calculations and analysis in the code:

- **calculate_mvp**: This function calculates the Most Valuable Player (MVP) based on the average strength of each player.

- **analyze_skill_pair_data**: This function analyzes the skill pair data after each tournament to detect imbalances. It suggests adjustments to synergy bonuses for overpowered skill combinations.

- **force_skill_pair_rematches**: This function occasionally forces rematches of skill pairs that have yet to be seen often to gather more data.

- **analyze_job_performance**: This function analyzes the performance over time to detect jobs needing buffs or nerfs. It suggests adjustments to job multipliers and rankings accordingly.

- **simulate_tournaments_in_advance**: This function simulates multiple tournaments in advance to forecast expected win rates for players, jobs, and skill pairs. It returns the calculated win rates for further adjustments.

### 4. Constants and Configuration

The code includes certain constants and configuration parameters:

- **JOB_RANKINGS**: A dictionary that defines the base skill level for each job.

- **JOB_MULTIPLIERS**: A dictionary that sets the initial job multipliers for balancing job performance.

- **GAUSSIAN_STD**: The standard deviation used in calculating the base strength of players.

- **NUM_BINS**: The number of bins used in plotting the distribution of player strengths.

## Final Thoughts

With these enhancements, the modified code provides an enhanced and more comprehensive simulation of the 3vs3 PVP tournament in Ragnarok Mobile: Eternal Love. Adding the `SkillInteractions` class and the `Plotter` class increases the flexibility and analytical capabilities of the simulation. Adjusting skill levels, job multipliers, and synergy bonuses based on win rates improves the simulation's balance and fairness.

I hope this updated code contributes to the fun and competitive spirit of the upcoming PVP event. See you on the battleground, and may the best team emerge victorious in Ragnarok Mobile: Eternal Love!

Please feel free to reach out if you have any questions or need further assistance.

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
