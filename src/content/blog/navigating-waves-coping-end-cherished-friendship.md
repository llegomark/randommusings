---
author: Mark Anthony Llego
pubDatetime: 2023-09-23T05:26:44Z
title: "Navigating the Waves: Coping with the End of a Cherished Friendship"
postSlug: navigating-waves-coping-end-cherished-friendship
featured: false
draft: false
tags:
  - personal
ogImage: "https://llego.dev/assets/90811a25-146e-491a-89ea-86458b3f7754.jpg"
description: "Explore heartfelt advice on coping with feelings of surprise, disappointment, and longing that arise from the end of a treasured friendship. Discover ways to cherish existing bonds and nurture new ones."
---

```python
import random
import networkx as nx
import matplotlib.pyplot as plt
from nltk.sentiment import SentimentIntensityAnalyzer
from typing import List, Dict


class User:
    def __init__(self, name: str):
        """
        Initialize a User instance.

        Args:
            name: The name of the user.
        """
        self.name = name
        self.friends: Dict["User", int] = {}
        self.posts: List[Dict[str, str]] = []
        self.messages: List[Dict[str, str]] = []
        self.interests: set = set()

    def add_friendship(self, friend: "User", strength: int = 1):
        """
        Add a friend to the user's friend list.

        Args:
            friend: The User instance representing the friend to be added.
            strength: The strength of the friendship.
        """
        self.friends[friend] = strength

    def remove_friendship(self, friend: "User"):
        """
        Remove a friend from the user's friend list.

        Args:
            friend: The User instance representing the friend to be removed.
        """
        if friend in self.friends:
            del self.friends[friend]

    def create_post(self, content: str, privacy: str = "public", interests: List[str] = None):
        """
        Create a post by the user.

        Args:
            content: The content of the post.
            privacy: The privacy setting of the post.
            interests: The list of interests associated with the post.
        """
        self.posts.append({"content": content, "privacy": privacy, "interests": interests})

    def send_message(self, friend: "User", content: str):
        """
        Send a message to a friend.

        Args:
            friend: The User instance representing the friend to send the message to.
            content: The content of the message.
        """
        friend.receive_message(self, content)

    def receive_message(self, sender: "User", content: str):
        """
        Receive a message from a friend.

        Args:
            sender: The User instance representing the sender of the message.
            content: The content of the message.
        """
        self.messages.append({"sender": sender, "content": content})


class SocialNetwork:
    def __init__(self):
        """
        Initialize the SocialNetwork instance.
        """
        self.users: Dict[str, User] = {}

    def create_user(self, name: str) -> User:
        """
        Create a new user in the social network.

        Args:
            name: The name of the user.

        Returns:
            The User instance representing the created user.
        """
        if name in self.users:
            return self.users[name]
        else:
            user = User(name)
            self.users[name] = user
            return user

    def add_friendship(self, user1: User, user2: User, strength1: int = 1, strength2: int = 1):
        """
        Add a friendship between two users.

        Args:
            user1: The User instance representing the first user.
            user2: The User instance representing the second user.
            strength1: The strength of the friendship for user1.
            strength2: The strength of the friendship for user2.
        """
        user1.add_friendship(user2, strength1)
        user2.add_friendship(user1, strength2)

    def remove_friendship(self, user1: User, user2: User):
        """
        Remove a friendship between two users.

        Args:
            user1: The User instance representing the first user.
            user2: The User instance representing the second user.
        """
        user1.remove_friendship(user2)
        user2.remove_friendship(user1)

    def find_longest_friendship(self) -> Tuple[User, User]:
        """
        Find the pair of users with the longest friendship connection in the social network.

        Returns:
            The pair of User instances representing the users with the longest friendship connection.
        """
        longest_friendship = 0
        longest_friends = None

        for user in self.users.values():
            visited = set()
            queue = [(user, 0)]

            while queue:
                curr_user, length = queue.pop(0)

                if curr_user in visited:
                    continue

                visited.add(curr_user)

                if length > longest_friendship:
                    longest_friendship = length
                    longest_friends = (user, curr_user)

                for friend, _ in curr_user.friends.items():
                    queue.append((friend, length + 1))

        return longest_friends

    def suggest_friend(self, user: User):
        """
        Suggest a friend for a given user based on their interests.

        Args:
            user: The user for whom a friend is suggested.
        """
        interests = {interest for post in user.posts if post.get('interests') for interest in post['interests']}
        potential_friends = {
            friend
            for friend in self.users.values()
            if friend != user
            and friend not in user.friends
            and hasattr(friend, 'interests')
            and friend.interests is not None
            and any(interest in interests for interest in friend.interests)
        }
        if potential_friends:
            suggested_friend = random.choice(list(potential_friends))
            print(f"We suggest {suggested_friend.name} as a friend for {user.name}.")
        else:
            print(f"We couldn't find any suitable friend suggestions for {user.name}.")

    def analyze_communities(self):
        """
        Analyze the network structure to identify communities within the social network based on connections.
        """
        G = nx.Graph()

        for user in self.users.values():
            G.add_node(user.name)

            for friend, strength in user.friends.items():
                G.add_edge(user.name, friend.name, weight=strength)

        communities_generator = nx.algorithms.community.greedy_modularity_communities(G)
        communities = list(communities_generator)

        for i, community in enumerate(communities, start=1):
            print(f"Community {i}: {', '.join(community)}")

        # Draw the network graph
        pos = nx.spring_layout(G)
        nx.draw(G, pos, with_labels=True)
        edge_labels = nx.get_edge_attributes(G, 'weight')
        nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels)
        plt.show()

    def search_users(self, query: str) -> List[User]:
        """
        Search for users within the network based on a query.

        Args:
            query: The query string to search for.

        Returns:
            A list of User instances matching the query.
        """
        results = [
            user
            for user in self.users.values()
            if query.lower() in user.name.lower()
            or (user.interests and query.lower() in [interest.lower() for interest in user.interests])
        ]
        if results:
            print(f"Search results for '{query}':")
            for result in results:
                print(result.name)
        else:
            print(f"No users found for '{query}'.")
        return results

    def analyze_activity_trends(self):
        """
        Analyze the activity trends of users based on the number of posts they made.
        """
        activity_counts = {user: len(user.posts) for user in self.users.values()}
        sorted_users = sorted(activity_counts.items(), key=lambda x: x[1], reverse=True)

        print("Activity trends:")
        for user, count in sorted_users:
            print(f"{user.name}: {count} posts")

    def analyze_sentiment(self):
        """
        Perform sentiment analysis on the posts made by each user in the social network.
        """
        sentiment_analyzer = SentimentIntensityAnalyzer()
        sentiment_scores = {}

        for user in self.users.values():
            sentiment_scores[user.name] = []
            for post in user.posts:
                sentiment_score = sentiment_analyzer.polarity_scores(post['content'])['compound']
                sentiment_scores[user.name].append(sentiment_score)

        average_scores = {user: sum(scores) / len(scores) for user, scores in sentiment_scores.items()}

        print("Sentiment analysis:")
        for user, average_score in average_scores.items():
            print(f"{user}: Average sentiment score: {average_score:.2f}")


# Example usage
network = SocialNetwork()

alice = network.create_user("Alice")
bob = network.create_user("Bob")
carol = network.create_user("Carol")
dave = network.create_user("Dave")
eve = network.create_user("Eve")
frank = network.create_user("Frank")

network.add_friendship(alice, bob, strength1=3, strength2=2)
network.add_friendship(alice, carol, strength1=2, strength2=1)
network.add_friendship(alice, dave, strength1=1, strength2=1)
network.add_friendship(carol, dave, strength1=2, strength2=1)
network.add_friendship(dave, eve)
network.add_friendship(frank, dave, strength1=1, strength2=2)

network.remove_friendship(carol, dave)

longest_friends = network.find_longest_friendship()
print(f"The longest friendship is between {longest_friends[0].name} and {longest_friends[1].name}.")

alice.create_post("Hello, everyone!", privacy='public', interests=['greeting'])
bob.create_post("Happy Friday!", privacy='public', interests=['weekend'])
carol.create_post("Just finished a great book!", privacy='friends', interests=['books'])
dave.create_post("Excited about my new project!", privacy='private', interests=['technology'])
eve.create_post("Enjoying the weekend!", privacy='public', interests=['weekend'])
frank.create_post("Great game last night!", privacy='public', interests=['sports'])

alice.send_message(bob, "Hey, how are you?")
bob.send_message(alice, "Doing great! How about you?")
alice.send_message(bob, "I'm good too. Let's catch up soon!")

network.suggest_friend(alice)
network.suggest_friend(carol)
network.suggest_friend(frank)

alice.interests = {"music", "technology"}
carol.interests = {"books", "art"}
frank.interests = {"technology", "sports"}

network.analyze_communities()

network.search_users("bob")
network.search_users("tech")

network.analyze_activity_trends()

network.analyze_sentiment()
```

<div class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZYu6XsHlENM?si=iNftPJY67rFV71sR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Dear friends, I want to share some thoughts with you today from the deep well of my own experiences and the hope that they might offer solace to those who have endured the sudden end of a cherished friendship.

I remember the day when my closest friend and I drifted apart like it was yesterday. The feelings of surprise, disappointment, and longing that engulfed me were overwhelming, but they also became the catalyst for the wisdom I now share with you.

The first wave to hit me was sheer surprise. It’s as if a thunderstorm had erupted on an otherwise sunny day. How could someone so integral to my life suddenly vanish? I felt confused, betrayed, and angry. I wondered what I had done wrong or what I could have done differently.

But a surprise is not a permanent state. It’s a shock that jolts us out of our comfort zone and forces us to face reality. And the truth is often messy and unpredictable. People change, circumstances change, and sometimes friendships change too. It’s not always easy to accept, but it’s part of life.

Disappointment, like a heavy fog, settled in next. The weight of unanswered questions and unfulfilled promises seemed unbearable. But remember, disappointment is natural, and it’s okay to feel it. It means you cared, you invested, you hoped. It means you had expectations, and expectations are not wrong. They are signs of trust and respect.

But expectations can also be unrealistic or unfair. Sometimes, we expect too much from ourselves, others, or things to stay the same forever. Sometimes, we expect people to read our minds or fulfill our needs without communicating them clearly. Occasionally, we hope people to be perfect or never make mistakes.

But people are not perfect, and neither are we. We all have flaws, weaknesses, and limitations. We all make mistakes, hurt others, and get hurt. We all have different needs, wants, and goals. Sometimes, these differences create conflicts or misunderstandings that can damage or end a friendship.

So, how do we cope with disappointment? By acknowledging it, expressing it, and letting it go. By forgiving ourselves and others for being human. By learning from our mistakes and growing from them. By adjusting our expectations and being more flexible and realistic. By being grateful for what we had and what we learned.

The longing was the echo that followed me, an ache in my heart that refused to fade. Longing is a testament to the depth of your connection, a journey you must traverse. It’s normal to miss someone who was once so close to you, reminisce about the good times you shared, and wish things were different.

But longing can also be unhealthy if it becomes obsessive or prevents you from moving on. If you find yourself stuck in the past, unable to let go or enjoy the present, you must address your longing head-on. You need to ask yourself why you are holding on so tightly, what you fear losing, and what you hope to gain.

Sometimes, we cling to a friendship because we fear being alone or losing our identity. Occasionally, we idealize a company because we forget the wrong parts or ignore reality. Sometimes, we hope for a reconciliation because we think it will fix everything or make us happy again.

But these are illusions that keep us from healing and growing. We are never alone; we constantly evolve, and happiness comes from within. We don’t need anyone else to complete us or validate us. We don’t need to live in the past or depend on the future. We need to live in the now and embrace ourselves.

So, how do we cope with longing? By accepting it, releasing it, and transforming it. Acknowledging that some things are beyond our control and some endings are inevitable. By removing our attachment and letting go of our regrets. We can change our pain into wisdom and compassion, which allows us to move forward with grace and peace of mind.

To cope with these emotions, find healthy ways to process them, such as talking to friends or seeking professional help. Don’t bottle or deny them; they will only fester and strengthen. Don’t act on them impulsively or harmfully; they will only hurt you and others more.

Instead, express them constructively and creatively; they will help you heal and grow. Write them down in a journal or a letter to help you clarify your thoughts and feelings. Share them with someone you trust or a therapist; they will help you gain perspective and support.

In an ideal world, we’d all have the chance to say a proper goodbye, understand why bonds weaken, and cherish the memories we’ve created. But life doesn’t always give us that luxury. Sometimes, friendships end abruptly, without warning or explanation.

That’s why we should cherish the friendships we have today. Communicate openly, listen actively, and celebrate each other’s presence. Don’t take anything for granted; appreciate every moment you share. Don’t let minor issues escalate; resolve them peacefully and respectfully.

Don’t let pride or fear get in the way; apologize when you’re wrong, and forgive when you’re hurt. Don’t let distance or time separate you; stay in touch and make plans to meet. Don’t let jealousy or resentment poison you; be happy for your friend’s success and support them in their struggles.

In closing, remember that while the pain of losing a friend may never fully fade, you will grow more robust, and new friendships will emerge. Embrace the journey, my friends, and may you find healing and growth in every step. You are not alone in your feelings; we all go through them at some point.

But we can also overcome them with courage, patience, and love. And we can always cherish the memories of those who touched our lives, even if they are no longer with us. They are part of our story, and we are part of theirs. And that’s something to be grateful for. Thank you for listening.

Mark~
